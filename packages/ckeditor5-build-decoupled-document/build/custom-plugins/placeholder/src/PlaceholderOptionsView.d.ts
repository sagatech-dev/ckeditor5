/**
 * The link actions view class. This view displays the link preview, allows
 * unlinking or editing the link.
 *
 * @extends View
 */
export default class PlaceholderOptionsView {
    /**
     * @inheritDoc
     */
    constructor(editor: any, data: any, placeholder: any);
    options: any[];
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
    protected readonly _focusables: ViewCollection<import("@ckeditor/ckeditor5-ui").View<HTMLElement>>;
    /**
     * Helps cycling over {@link #_focusables} in the view.
     * @readonly
     * @protected
     * @member {FocusCycler}
     */
    protected readonly focusCycler: FocusCycler;
    /**
     * @inheritDoc
     */
    render(): void;
    /**
     * Focuses the fist {@link #_focusables} in the actions.
     */
    focus(value: any): void;
    _createOptions(editor: any, data: any, placeholder: any): any[];
}
import FocusTracker from "@ckeditor/ckeditor5-utils/src/focustracker";
import KeystrokeHandler from "@ckeditor/ckeditor5-utils/src/keystrokehandler";
import ViewCollection from "@ckeditor/ckeditor5-ui/src/viewcollection";
import FocusCycler from "@ckeditor/ckeditor5-ui/src/focuscycler";
