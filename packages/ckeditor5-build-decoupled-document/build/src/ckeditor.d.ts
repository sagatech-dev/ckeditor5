/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { DecoupledEditor as DecoupledEditorBase } from '@ckeditor/ckeditor5-editor-decoupled';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { FontSize, FontFamily, FontColor, FontBackgroundColor } from '@ckeditor/ckeditor5-font';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Bold, Italic, Strikethrough, Underline } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { CKBox } from '@ckeditor/ckeditor5-ckbox';
import { CKFinder } from '@ckeditor/ckeditor5-ckfinder';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { Image, ImageCaption, ImageResize, ImageStyle, ImageToolbar, ImageUpload, PictureEditing } from '@ckeditor/ckeditor5-image';
import { Indent } from '@ckeditor/ckeditor5-indent';
import { Link } from '@ckeditor/ckeditor5-link';
import { List, ListProperties } from '@ckeditor/ckeditor5-list';
import { Table, TableToolbar, TableProperties, TableCellProperties } from '@ckeditor/ckeditor5-table';
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';
import CustomFontSizeUI from '../custom-plugins/custom-font-ui/src/CustomFontSizeUI.js';
import Placeholder from '../custom-plugins/placeholder/src/Placeholder.js';
export default class DecoupledEditor extends DecoupledEditorBase {
    static builtinPlugins: (typeof Essentials | typeof Alignment | typeof FontBackgroundColor | typeof FontColor | typeof FontFamily | typeof FontSize | typeof Heading | typeof Autoformat | typeof Bold | typeof Italic | typeof Strikethrough | typeof Underline | typeof BlockQuote | typeof Image | typeof ImageCaption | typeof ImageResize | typeof ImageStyle | typeof ImageToolbar | typeof ImageUpload | typeof CloudServices | typeof CKBox | typeof CKFinder | typeof List | typeof ListProperties | typeof Indent | typeof Link | typeof Table | typeof TableCellProperties | typeof TableProperties | typeof TableToolbar | typeof PictureEditing | typeof CustomFontSizeUI | typeof Placeholder)[];
    static defaultConfig: {
        toolbar: {
            items: string[];
        };
        fontFamily: {
            options: string[];
        };
        fontSize: {
            options: {
                model: number;
                title: string;
                view: {
                    name: string;
                    styles: {
                        'font-size': string;
                    };
                };
            }[];
        };
        image: {
            resizeUnit: "px";
            toolbar: string[];
        };
        table: {
            contentToolbar: string[];
        };
        list: {
            properties: {
                styles: boolean;
                startIndex: boolean;
                reversed: boolean;
            };
        };
        ui: {
            poweredBy: {
                position: string;
                side: string;
            };
        };
        language: string;
    };
}
