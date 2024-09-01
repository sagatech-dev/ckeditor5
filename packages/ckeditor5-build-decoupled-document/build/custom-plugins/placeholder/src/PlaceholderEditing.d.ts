export default class PlaceholderEditing extends Plugin {
    static get requires(): (typeof Widget)[];
    init(): void;
    _balloon: ContextualBalloon | undefined;
    _openBalloon(data: any): void;
    placeholderOptions: PlaceholderOptionsView | PlaceholderInputView | undefined;
    closeBalloon(): void;
    _setPlaceholderInput(data: any): PlaceholderInputView;
    _setPlaceholderOptions(data: any): PlaceholderOptionsView;
    _defineSchema(): void;
    _defineConverters(): void;
}
import Plugin from '@ckeditor/ckeditor5-core/src/plugin.js';
import ContextualBalloon from '@ckeditor/ckeditor5-ui/src/panel/balloon/contextualballoon.js';
import PlaceholderOptionsView from './PlaceholderOptionsView.js';
import PlaceholderInputView from './PlaceholderInputView.js';
import Widget from '@ckeditor/ckeditor5-widget/src/widget.js';
