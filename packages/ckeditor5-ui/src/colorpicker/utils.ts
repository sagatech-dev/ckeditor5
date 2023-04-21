/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module ui/colorpicker/utils
 */

/* eslint-disable @typescript-eslint/ban-ts-comment */

// There are no available types for 'color-parse' module.
// @ts-ignore
import { default as parse } from 'color-parse';
import * as convert from 'color-convert';

/**
 * Parses and converts the color string to requested format. Handles variety of color spaces
 * like `hsl`, `hex` or `rgb`.
 *
 * @param color
 * @returns A color string.
 */
export function convertColor( color: string, outputFormat: ColorPickerOutputFormat ): string {
	if ( !color ) {
		return '';
	}

	const colorObject = parseColorString( color );

	if ( !colorObject.space ) {
		return '';
	}

	console.log( colorObject );

	if ( !isDifferent( colorObject.space, outputFormat ) ) {
		return color;
	}

	console.log( colorObject.space, outputFormat );

	if ( !canConvertParsedColor( colorObject ) ) {
		return '';
	}

	// convert = {
	// 	rgb: {
	//		//rgb: () => {}
	// 		hsl: () => {},
	// 		hex: () => {},
	// 		hsv: () => {},
	// 	},
	// 	hsl: {
	//		rgb: () => {}
	// 		// hsl: () => {},
	// 		hex: () => {},
	// 		hsv: () => {},
	// 	},
	// 	...
	// }

	// convert.rgb.hsl( ... );
	// convert.rgb.rgb( ... );

	const conversionFrom = convert[ colorObject.space ];
	const conversionTo = conversionFrom[ outputFormat ];
	const convertedColorChannels = conversionTo( colorObject.values );

	return formatColorOutput( convertedColorChannels, outputFormat );
}

/**
 * Converts a color string to hex format.
 *
 * @param color
 * @returns A color string.
 */
export function convertToHex( color: string ): string {
	if ( !color ) {
		return '';
	}

	if ( color.startsWith( '#' ) ) {
		return color;
	}

	const colorObject = parseColorString( color ) as Exclude<ParsedColor, ParsedHexColor>;

	if ( !colorObject.space ) {
		return '#000';
	}

	return '#' + convert[ colorObject.space as keyof Omit<typeof convert, 'hex'> ].hex( colorObject.values );
}

/**
 * Formats the passed color channels according to the requested format.
 *
 * @param values
 * @param format
 * @returns A color string.
 */
function formatColorOutput( values: Array<number> | string, format: ColorPickerOutputFormat ): string {
	switch ( format ) {
		case 'hex': return `#${ values }`;
		case 'rgb': return `rgb( ${ values[ 0 ] }, ${ values[ 1 ] }, ${ values[ 2 ] } )`;
		case 'hsl': return `hsl( ${ values[ 0 ] }, ${ values[ 1 ] }%, ${ values[ 2 ] }% )`;
		case 'hwb': return `hwb( ${ values[ 0 ] }, ${ values[ 1 ] }, ${ values[ 2 ] } )`;
		case 'lab': return `lab( ${ values[ 0 ] }% ${ values[ 1 ] } ${ values[ 2 ] } )`;
		case 'lch': return `lch( ${ values[ 0 ] }% ${ values[ 1 ] } ${ values[ 2 ] } )`;

		default: return '';
	}
}

/**
 * Color formats handled by color converter.
 */
export type ColorPickerOutputFormat = Extract<ParsedColor[ 'space' ], 'hex' | 'rgb' | 'hsl' | 'hwb' | 'lab' | 'lch'>;

/**
 * Configuration of the color picker feature.
 *
 * It can be forced to apply colors in the editor in a particular format.
 *
 * @default `{
 * 	format: 'hsl'
 * }`
 */
export type ColorPickerConfig = {
	format?: ColorPickerOutputFormat;
};

type ParsedColor = {
	readonly space:
		'rgb' | 'hsl' | 'hsv' | 'hsb' | 'hwb' | 'cmy' | 'cmyk' | 'xyz' | 'xyy' | 'gray' | 'lab' | 'lch' |
		'lchu' | 'lchv' | 'lchuv' | 'luv' | 'yuv' | 'lms' | 'hex';
	readonly alpha: number;
	readonly values: Array<number>;
};

type ConvertableParsedColor = ParsedColor & {
	readonly space: keyof typeof convert;
};

type UnparsedColor = {
	readonly space: '';
};

function canConvertParsedColor( parsedColor: ParsedColor ): parsedColor is ConvertableParsedColor {
	return Object.keys( convert ).includes( parsedColor.space );
}

function isSame<T extends ParsedColor[ 'space' ]>( space: ParsedColor[ 'space' ], outputFormat: T ): space is T {
	return space === outputFormat;
}

function isDifferent<T extends ColorPickerOutputFormat>( space: ParsedColor[ 'space' ], outputFormat: T ):
	outputFormat is Exclude<ColorPickerOutputFormat, ParsedColor[ 'space' ]> {
	return space !== outputFormat;
}

function parseColorString( colorString: string ): ParsedColor {
	// Parser library treats `hex` format as belonging to `rgb` space | which messes up further conversion.
	// Let's parse such strings on our own.
	// if ( colorString.startsWith( '#' ) ) {
	// 	return {
	// 		space: 'hex',
	// 		values: colorString.substring( 1 ),
	// 		alpha: parse( colorString ).alpha
	// 	};
	// }

	return parse( colorString );
}
