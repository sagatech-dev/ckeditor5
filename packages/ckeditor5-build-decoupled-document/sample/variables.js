/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

const variables = [
	{
		'name': 'NOME DA EMPRESA',
		'attr': 'company_name',
		'is_fixed': true,
		'is_solved': true,
		'is_block': false,
		'value': 'Sagatech LTDA',
		'options': null
	},
	{
		'name': 'SERVICES',
		'attr': 'quoted_services',
		'is_fixed': true,
		'is_solved': true,
		'is_block': true,
		'value': '\n' +
			'<table>\n' +
			'    <thead>\n' +
			'    <tr>\n' +
			'        <th style=&quot;width: 60%&quot;>Serviço</th>\n' +
			'        <th style=&quot;text-align: center&quot;>Quantidade</th>\n' +
			'        <th style=&quot;text-align: right&quot;>Preço</th>\n' +
			'    </tr>\n' +
			'    </thead>\n' +
			'    <tbody>\n' +
			'            <tr>\n' +
			'            <td>\n' +
			'                <p>B1 - Contabilidade Geral</p>\n' +
			'                <p style=&quot;font&quot;>\n' +
			'                    <span style=&quot;font-size:10pt;&quot;>Registro e organização de todas as transações financeiras da sua empresa.</span>\n' +
			'                </p>\n' +
			'            </td>\n' +
			'            <td style=&quot;text-align: center&quot;>1</td>\n' +
			'            <td style=&quot;text-align: right&quot;>R$ 2.500,00</td>\n' +
			'        </tr>\n' +
			'        </tbody>\n' +
			'</table>\n',
		'options': null
	},
	{
		'name': 'P2',
		'attr': null,
		'is_fixed': false,
		'is_solved': false,
		'value': null,
		'options': [
			'corporal anterior',
			'corporal posterior',
			'fúndica',
			'lateral direita',
			'lateral esquerda'
		]
	},
	{
		'name': 'P3',
		'attr': null,
		'is_fixed': false,
		'is_solved': false,
		'value': null,
		'options': [
			'heterogênea',
			'homogênea'
		]
	},
	{
		'name': 'P4',
		'attr': null,
		'is_fixed': false,
		'is_solved': false,
		'value': null,
		'options': [
			'0',
			'I',
			'II',
			'III'
		]
	},
	{
		'name': 'P5',
		'attr': null,
		'is_fixed': false,
		'is_solved': false,
		'value': null,
		'options': [
			'ondas com incisura protodiastólica.',
			'ondas sem incisura protodiastólica.'
		]
	},
	{
		'name': 'P6',
		'attr': null,
		'is_fixed': false,
		'is_solved': false,
		'value': null,
		'options': [
			'lábios não visualizados devido a posição fetal',
			'lábios visualizados e normais'
		]
	},
	{
		'name': 'V3',
		'attr': null,
		'is_fixed': false,
		'is_solved': false,
		'value': null,
		'options': [
			'0 - Incompleta: necessita de avaliação adicional com ultrassonografia.',
			'1 - Negativa.',
			'2 - Achados benignos.',
			'3 - Achados provavelmente benignos.',
			'4 - Achados suspeitos.',
			'5 - Altamente suspeito de malignidade.',
			'6 - Malignidade conhecida comprovada por biópsia.'
		]
	},
	{
		'name': 'V4',
		'attr': null,
		'is_fixed': false,
		'is_solved': false,
		'value': null,
		'options': [
			'Com densidades fibroglandulares esparsas.',
			'Extremamente densas, o que diminui a sensibilidade mamográficas.',
			'Heterogeneamente densas, o que pode ocultar pequenos nódulos.',
			'Predominantemente adiposas.'
		]
	},
	{
		'name': 'V5',
		'attr': null,
		'is_fixed': false,
		'is_solved': false,
		'value': null,
		'options': [
			'grande volume e simétricas.',
			'médio volume e simétricas.',
			'pequeno volume e simétricas.'
		]
	},
	{
		'name': 'V6',
		'attr': null,
		'is_fixed': false,
		'is_solved': false,
		'value': null,
		'options': [
			'com linfonodos de aspectos normais a direita.',
			'com linfonodos de aspectos normais à esquerda.',
			'com linfonodos de aspectos normais bilateralmente.',
			'sem linfonodos.'
		]
	},
	{
		'name': 'V7',
		'attr': null,
		'is_fixed': false,
		'is_solved': false,
		'value': null,
		'options': [
			'Exame anterior não disponível para comparação.',
			'Primeira vez que realiza o exame.'
		]
	}
];
