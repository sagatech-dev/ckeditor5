/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

'use strict';

import Controller from '../controller.js';
import Model from '../model.js';
import utils from '../utils/utils.js';
import ObservableMixin from '../utils/observablemixin.js';

/**
 * @memberOf ui.editable
 * @extends ui.Controller
 * @mixes utils.ObservaleMixin
 */
export default class Editable extends Controller {
	/**
	 * Creates a new instance of the Editable class.
	 *
	 * @param editor
	 */
	constructor( editor ) {
		super();

		this.editor = editor;

		/**
		 * Whether the editable is in read-write or read-only mode.
		 *
		 * @member {Boolean} ui.editable.Editable#isEditable
		 */
		this.set( 'isEditable', true );

		/**
		 * Whether the editable is focused.
		 *
		 * @readonly
		 * @member {Boolean} ui.editable.Editable#isFocused
		 */
		this.set( 'isFocused', false );
	}

	/**
	 * The model for the editable view.
	 *
	 * @readonly
	 * @type {ui.Model}
	 */
	get viewModel() {
		if ( this._viewModel ) {
			return this._viewModel;
		}

		const viewModel = new Model( {
			isFocused: this.isFocused
		} );
		this._viewModel = viewModel;

		viewModel.bind( 'isEditable' ).to( this );
		this.bind( 'isFocused' ).to( viewModel );

		return viewModel;
	}

	/**
	 * Temporary implementation (waiting for integration with the data model).
	 *
	 * @param {String} data HTML to be loaded.
	 */
	setData( data ) {
		this.view.editableElement.innerHTML = data;
	}

	/**
	 * Temporary implementation (waiting for integration with the data model).
	 *
	 * @returns {String} HTML string.
	 */
	getData() {
		return this.view.editableElement.innerHTML;
	}
}

utils.mix( Editable, ObservableMixin );

/**
 * The editable model interface.
 *
 * @memberOf ui.editable
 * @interface EditableModel
 */

/**
 * Whether the editable has focus.
 *
 * @member {Boolean} ui.editable.EditableModel#isFocused
 */

/**
 * Whether the editable is not in read-only mode.
 *
 * @member {Boolean} ui.editable.EditableModel#isEditable
 */
