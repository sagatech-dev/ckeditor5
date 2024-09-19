/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin.js';
import Widget from '@ckeditor/ckeditor5-widget/src/widget.js';
import PlaceholderCommand from './PlaceholderCommand.js';
import { toWidget, viewToModelPositionOutsideModelElement } from '@ckeditor/ckeditor5-widget/src/utils.js';
import ContextualBalloon from '@ckeditor/ckeditor5-ui/src/panel/balloon/contextualballoon.js';
import PlaceholderOptionsView from './PlaceholderOptionsView.js';
import PlaceholderInputView from './PlaceholderInputView.js';
import { nextPlaceholder } from './PlaceholderUtils.js';

export default class PlaceholderEditing extends Plugin {
	static get requires() {
		return [ Widget ];
	}

	init() {
		const editor = this.editor;

		this._defineSchema();
		this._defineConverters();

		editor.commands.add( 'placeholder', new PlaceholderCommand( editor ) );

		editor.editing.mapper.on(
			'viewToModelPosition',
			viewToModelPositionOutsideModelElement( editor.model, viewElement => viewElement.hasClass( 'placeholder' ) )
		);

		this._balloon = editor.plugins.get( ContextualBalloon );
		this.listenTo( editor.editing.view.document, 'click', ( evt, data ) => {
			const element = data.target;
			if ( !editor.isReadOnly ) {
				if ( element && element.hasClass( 'placeholder' ) ) {
					this._openBalloon( data );
					evt.stop();
				} else {
					this.closeBalloon();
				}
			}
		} );

		// Utilizado para esconder balloon quando editor perde o focus
		editor.ui.focusTracker.on( 'change:isFocused', ( evt, name, isFocused ) => {
			if ( !isFocused ) {
				this.closeBalloon();
			}
		} );

		// Utilizado para esconder balloon quando texto é realinhado
		editor.commands.get( 'alignment' ).on( 'execute', () => {
			this.closeBalloon();
		} );
	}

	_openBalloon( data ) {
		const editor = this.editor;

		// Verifica se existe algum balloon aberto e fecha
		this.closeBalloon();

		const modelElement = editor.editing.mapper.toModelElement( data.target );
		if ( modelElement && modelElement.name === 'placeholder' ) {
			// Variaveis vazias/livres
			if ( modelElement.getAttribute( 'attr' ) === 'empty' ) {
				this.placeholderOptions = this._setPlaceholderInput( data );

				// Fecha ballon/input qndo Enter é pressionado
				this.placeholderOptions.keystrokes.set( 'Enter', ( data, cancel ) => {
					// Encontra proxima variavel
					this.closeBalloon();
					setTimeout( function() {
						nextPlaceholder( editor );
					}, 100 );
					cancel();
				} );
			}

			// Variaveis fixas
			else if ( modelElement.getAttribute( 'isFixed' ) ) {
				return;
			}

			// Variaveis com opções
			else {
				this.placeholderOptions = this._setPlaceholderOptions( data );

				// Close the panel on esc key press when the **actions have focus**.
				this.placeholderOptions.keystrokes.set( 'Esc', ( data, cancel ) => {
					this.closeBalloon();
					cancel();
				} );
			}

			// Abre novo balloon
			this._balloon.add( {
				view: this.placeholderOptions,
				singleViewMode: true,
				position: {
					target: data.domTarget
				}
			} );

			this.placeholderOptions.focus( modelElement.getAttribute( 'value' ) );
		}
	}

	closeBalloon() {
		if ( this._balloon.hasView( this.placeholderOptions ) ) {
			this._balloon.remove( this.placeholderOptions );
		}
	}

	_setPlaceholderInput( data ) {
		const editor = this.editor;
		return new PlaceholderInputView( editor, data, this );
	}

	_setPlaceholderOptions( data ) {
		const editor = this.editor;
		return new PlaceholderOptionsView( editor, data, this );
	}

	_defineSchema() {
		const schema = this.editor.model.schema;

		// text
		schema.register( 'placeholder', {

			// Allow wherever text is allowed:
			allowIn: [ '$block' ],
			allowAttributesOf: '$text',

			// The placeholder will act as an inline node:
			isInline: true,

			// The placeholder can have many types, like date, name, surname, etc:
			allowAttributes: [ 'name', 'attr', 'value', 'isFixed', 'isSolved', 'isBlock', 'options' ]
		} );

		// block
		schema.register( 'placeholderBlock', {

			// Allow wherever block is allowed:
			allowIn: [ '$root', '$container' ],
			allowAttributesOf: 'table',

			// The placeholder will act as an block node:
			isBlock: true,

			// The placeholder can have many types, like date, name, surname, etc:
			allowAttributes: [ 'name', 'attr', 'value', 'isFixed', 'isSolved', 'isBlock', 'options' ]
		} );
	}

	_defineConverters() {
		const editor = this.editor;
		const conversion = editor.conversion;
		const variables = editor.config.get( 'variables' );

		// Define upcast conversion:
		conversion.for( 'upcast' ).elementToElement( {
			view: {
				name: 'span',
				classes: [ 'placeholder' ]
			},
			model: ( viewElement, conversionApi ) => {
				const modelWriter = conversionApi.writer;
				const data = {
					name: viewElement.getAttribute( 'data-name' ),
					attr: viewElement.getAttribute( 'data-attr' ),
					value: viewElement.getAttribute( 'data-value' ),
					isFixed: viewElement.getAttribute( 'data-is-fixed' ),
					isSolved: viewElement.getAttribute( 'data-is-solved' ),
					isBlock: '0',
					options: viewElement.getAttribute( 'data-options' )
				};

				// Converte a variavel fixa caso exista attributos
				if ( variables ) {
					if ( data.isFixed ) {
						const variableFound = variables.find( variable => {
							return variable.attr === data.attr;
						} );
						if ( variableFound ) {
							if ( variableFound.value ) {
								data.value = variableFound.value;
								data.isSolved = 1;
							} else {
								data.value = data.name;
								data.isSolved = 0;
							}
						}
					}
				}
				return modelWriter.createElement( 'placeholder', data );
			}
		} );

		// Define upcast conversion:
		conversion.for( 'upcast' ).elementToElement( {
			view: {
				name: 'figure',
				classes: [ 'placeholder-block' ]
			},
			model: ( viewElement, conversionApi ) => {
				const modelWriter = conversionApi.writer;
				const data = {
					name: viewElement.getAttribute( 'data-name' ),
					attr: viewElement.getAttribute( 'data-attr' ),
					value: viewElement.getAttribute( 'data-value' ),
					isFixed: viewElement.getAttribute( 'data-is-fixed' ),
					isSolved: viewElement.getAttribute( 'data-is-solved' ),
					isBlock: '1',
					options: viewElement.getAttribute( 'data-options' )
				};

				// Converte a variavel fixa caso exista attributos
				if ( variables ) {
					if ( data.isFixed ) {
						const variableFound = variables.find( variable => {
							return variable.attr === data.attr;
						} );
						if ( variableFound ) {
							if ( variableFound.value ) {
								data.value = variableFound.value;
								data.isSolved = 1;
							} else {
								data.value = data.name;
								data.isSolved = 0;
							}
						}
					}
				}
				console.log( data );
				return modelWriter.createElement( 'placeholderBlock', data );
			}
		} );

		// Define downcast conversion:
		conversion.for( 'downcast' ).elementToElement( {
			model: 'placeholder',
			view: ( modelElement, conversionApi ) => {
				const viewWriter = conversionApi.writer;
				const placeholder = {
					title: modelElement.getAttribute( 'name' ),
					class: 'placeholder' +
					( modelElement.getAttribute( 'isFixed' ) ? ' placeholder-solved' : ' placeholder-pointer' ) +
					( modelElement.getAttribute( 'isSolved' ) ? ' placeholder-solved' : '' ),
					'data-name': modelElement.getAttribute( 'name' ),
					'data-attr': modelElement.getAttribute( 'attr' ),
					'data-value': modelElement.getAttribute( 'value' ),
					'data-is-fixed': modelElement.getAttribute( 'isFixed' ),
					'data-is-solved': modelElement.getAttribute( 'isSolved' ),
					'data-is-block': 0,
					'data-options': modelElement.getAttribute( 'options' )
				};
				const placeholderView = viewWriter.createContainerElement( 'span', placeholder );

				const innerText = viewWriter.createText( placeholder[ 'data-is-solved' ] ?
					placeholder[ 'data-value' ] :
					placeholder[ 'data-name' ] );
				viewWriter.insert( viewWriter.createPositionAt( placeholderView, 0 ), innerText );

				return toWidget( placeholderView, viewWriter );
			}
		} );

		conversion.for( 'downcast' ).elementToElement( {
			model: 'placeholderBlock',
			view: ( modelElement, conversionApi ) => {
				const viewWriter = conversionApi.writer;

				const placeholderBlock = {
					title: modelElement.getAttribute( 'name' ),
					class: 'placeholder-block' +
					( modelElement.getAttribute( 'isFixed' ) ? ' placeholder-solved' : ' placeholder-pointer' ) +
					( modelElement.getAttribute( 'isSolved' ) ? ' placeholder-solved' : '' ),
					'data-name': modelElement.getAttribute( 'name' ),
					'data-attr': modelElement.getAttribute( 'attr' ),
					'data-value': modelElement.getAttribute( 'value' ),
					'data-is-fixed': modelElement.getAttribute( 'isFixed' ),
					'data-is-solved': modelElement.getAttribute( 'isSolved' ),
					'data-is-block': 1,
					'data-options': modelElement.getAttribute( 'options' )
				};
				const placeholderView = viewWriter.createContainerElement( 'figure', placeholderBlock );

				const uiElement = viewWriter.createUIElement( 'div', null, function( domDocument ) {
					const domElement = this.toDomElement( domDocument );
					domElement.innerHTML = placeholderBlock[ 'data-is-solved' ] ?
						placeholderBlock[ 'data-value' ] :
						`<p style="text-align: center">${ placeholderBlock[ 'data-name' ] }</p>`;
					return domElement;
				} );
				viewWriter.insert( viewWriter.createPositionAt( placeholderView, 0 ), uiElement );

				return toWidget( placeholderView, viewWriter );
			}
		} );
	}
}
