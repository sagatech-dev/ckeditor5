/**
 * The link actions view class. This view displays the link preview, allows
 * unlinking or editing the link.
 *
 * @extends View
 */
export default class PlaceholderInputView extends View<HTMLElement> {
    /**
     * @inheritDoc
     */
    constructor(editor: any, data: any, placeholder: any);
    placeholder: any;
    options: ListItemView[];
    /**
     * Tracks information about DOM focus in the actions.
     * @readonly
     * @member {FocusTracker}
     */
    readonly focusTracker: FocusTracker;
    /**
     * An instance of the {KeystrokeHandler}.
     * @readonly
     * @member {KeystrokeHandler}
     */
    readonly keystrokes: KeystrokeHandler;
    /**
     * A collection of views that can be focused in the view.
     * @readonly
     * @protected
     * @member {ViewCollection}
     */
    protected readonly _focusables: ViewCollection<View<HTMLElement>>;
    /**
     * Helps cycling over {@link #_focusables} in the view.
     * @readonly
     * @protected
     * @member {FocusCycler}
     */
    protected readonly focusCycler: FocusCycler;
    focus(value: any): void;
    _createOption(editor: any, data: any): ListItemView[];
}
import View from "@ckeditor/ckeditor5-ui/src/view";
import ListItemView from "@ckeditor/ckeditor5-ui/src/list/listitemview";
import FocusTracker from "@ckeditor/ckeditor5-utils/src/focustracker";
import KeystrokeHandler from "@ckeditor/ckeditor5-utils/src/keystrokehandler";
import ViewCollection from "@ckeditor/ckeditor5-ui/src/viewcollection";
import FocusCycler from "@ckeditor/ckeditor5-ui/src/focuscycler";
