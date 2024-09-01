/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

const variables = [
	{
		'name': 'ALTURA DO PACIENTE',
		'attr': 'patient_height',
		'is_fixed': true,
		'is_solved': false,
		'is_block': false,
		'value': null,
		'options': null
	},
	{
		'name': 'SERVICES',
		'attr': 'quoted_services',
		'is_fixed': true,
		'is_solved': true,
		'is_block': true,
		'value': '<table><thead><tr><th style=width:60%>Serviço<th style=text-align:center>Quantidade<th style=text-align:right>Preço<tbody><tr><td><p>D9 - Consultoria Financeira<p><span style=font-size:10pt>Análise de desempenho financeiro e aconselhamento para otimização de custos e maximização de lucro.</span><td style=text-align:center>2<td style=text-align:right>R$ 850,00<tr><td><p>C2 - Apuração de Impostos<p><span style=font-size:10pt>Cálculo e preparação das obrigações fiscais, incluindo o envio das declarações necessárias.</span><td style=text-align:center>2<td style=text-align:right>R$ 1.550,00</table>',
		'options': null
	},
	{
		'name': 'CÓDIGO DO ATENDIMENTO',
		'attr': 'treatment_code',
		'is_fixed': true,
		'is_solved': true,
		'is_block': false,
		'value': 'US-0013868-23',
		'options': null
	},
	{
		'name': 'CONVÊNIO DO PACIENTE',
		'attr': 'hic_name',
		'is_fixed': true,
		'is_solved': true,
		'is_block': false,
		'value': 'AMIL',
		'options': null
	},
	{
		'name': 'CPF DO PACIENTE',
		'attr': 'patient_cpf',
		'is_fixed': true,
		'is_solved': false,
		'is_block': false,
		'value': null,
		'options': null
	},
	{
		'name': 'CRM DO PROFISSIONAL EXECUTANTE',
		'attr': 'php_crm',
		'is_fixed': true,
		'is_solved': true,
		'is_block': false,
		'value': '-',
		'options': null
	},
	{
		'name': 'DATA DE ENTRADA DO ATENDIMENTO',
		'attr': 'treatment_created_at',
		'is_fixed': true,
		'is_solved': true,
		'is_block': false,
		'value': '28/04/2023 - 12:18',
		'options': null
	},
	{
		'name': 'DATA DE NASCIMENTO DO PACIENTE',
		'attr': 'patient_birthdate',
		'is_fixed': true,
		'is_solved': true,
		'is_block': false,
		'value': '15/01/1985',
		'options': null
	},
	{
		'name': 'DATA DO PRAZO DE ENTREGA',
		'attr': 'treatment_deadline',
		'is_fixed': true,
		'is_solved': true,
		'is_block': false,
		'value': '02/05/2023 - 12:18',
		'options': null
	},
	{
		'name': 'EMAIL DO PACIENTE',
		'attr': 'patient_email',
		'is_fixed': true,
		'is_solved': false,
		'is_block': false,
		'value': null,
		'options': null
	},
	{
		'name': 'ENDEREÇO DO ESTABELECIMENTO INTERNO',
		'attr': 'hf_address',
		'is_fixed': true,
		'is_solved': true,
		'is_block': false,
		'value': 'SANTOS DUMONT, 2235, , Uberaba-MG, 38050400',
		'options': null
	},
	{
		'name': 'ENDEREÇO DO PACIENTE',
		'attr': 'patient_address',
		'is_fixed': true,
		'is_solved': true,
		'is_block': false,
		'value': ', ',
		'options': null
	},
	{
		'name': 'ENDEREÇO DO PROFISSIONAL EXECUTANTE',
		'attr': 'php_address',
		'is_fixed': true,
		'is_solved': true,
		'is_block': false,
		'value': '',
		'options': null
	},
	{
		'name': 'HORÁRIO DE FUNCIONAMENTO DO ESTABELECIMENTO INTERNO',
		'attr': 'hf_business_hour',
		'is_fixed': true,
		'is_solved': true,
		'is_block': false,
		'value': '00:00:00 às 23:40:00',
		'options': null
	},
	{
		'name': 'MODELO DE ATENDIMENTO',
		'attr': 'treatment_model',
		'is_fixed': true,
		'is_solved': true,
		'is_block': false,
		'value': 'Ultrassonografia',
		'options': null
	},
	{
		'name': 'NOME DA MÃE DO PACIENTE',
		'attr': 'patient_mothername',
		'is_fixed': true,
		'is_solved': true,
		'is_block': false,
		'value': '',
		'options': null
	},
	{
		'name': 'NOME DO PACIENTE',
		'attr': 'patient_name',
		'is_fixed': true,
		'is_solved': true,
		'is_block': false,
		'value': 'TIAGO',
		'options': null
	},
	{
		'name': 'NOME DO PROCEDIMENTO',
		'attr': 'procedure_name',
		'is_fixed': true,
		'is_solved': true,
		'is_block': false,
		'value': 'US - Torácico extracardíaco',
		'options': null
	},

	{
		'name': 'PLANO DO PACIENTE',
		'attr': 'hicp_name',
		'is_fixed': true,
		'is_solved': true,
		'is_block': false,
		'value': 'AMIL',
		'options': null
	},
	{
		'name': 'PROFISSIONAL SOLICITANTE',
		'attr': 'rhp_name',
		'is_fixed': true,
		'is_solved': false,
		'value': null,
		'options': null
	},
	{
		'name': 'P1',
		'attr': null,
		'is_fixed': false,
		'is_solved': false,
		'value': null,
		'options': [
			'cefálico com dorso lateral à direita',
			'cefálico com dorso lateral à esquerda',
			'pélvico com dorso lateral à direita',
			'pélvico com dorso lateral à esquerda',
			'transverso com com polo cefálico à direita',
			'transverso com polo cefálico à esquerda'
		]
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
