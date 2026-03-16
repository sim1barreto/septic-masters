import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	TextControl,
	TextareaControl,
	Button,
	SelectControl,
} from '@wordpress/components';

const COLOR_OPTIONS = [
	{ label: 'Green', value: '#25A55F' },
	{ label: 'Dark Green', value: '#1E7A45' },
	{ label: 'Teal', value: '#4FD4A4' },
	{ label: 'Yellow', value: '#F4C542' },
	{ label: 'Red', value: '#BE2026' },
];

const ICON_OPTIONS = [
	{ label: 'Droplets', value: 'Droplets' },
	{ label: 'Search', value: 'Search' },
	{ label: 'Layers', value: 'Layers' },
	{ label: 'Wrench', value: 'Wrench' },
	{ label: 'Wind', value: 'Wind' },
	{ label: 'AlertTriangle', value: 'AlertTriangle' },
	{ label: 'Zap', value: 'Zap' },
	{ label: 'Trash2', value: 'Trash2' },
];

const DEFAULT_SERVICE = {
	iconName: 'Droplets',
	title: 'New Service',
	description: 'Service description.',
	color: '#25A55F',
};

export function Edit( { attributes, setAttributes } ) {
	const { sectionLabel, sectionTitle, sectionSubtitle, services } = attributes;

	const updateService = ( index, field, value ) => {
		const updated = [ ...( services || [] ) ];
		updated[ index ] = { ...updated[ index ], [ field ]: value };
		setAttributes( { services: updated } );
	};

	const addService = () =>
		setAttributes( { services: [ ...( services || [] ), { ...DEFAULT_SERVICE } ] } );

	const removeService = ( index ) =>
		setAttributes( { services: ( services || [] ).filter( ( _, i ) => i !== index ) } );

	return (
		<>
			<InspectorControls>
				<PanelBody title="Section Header" initialOpen={ true }>
					<TextControl
						label="Section Label"
						value={ sectionLabel }
						onChange={ ( val ) => setAttributes( { sectionLabel: val } ) }
					/>
					<TextareaControl
						label="Section Title"
						value={ sectionTitle }
						onChange={ ( val ) => setAttributes( { sectionTitle: val } ) }
						rows={ 2 }
					/>
					<TextareaControl
						label="Section Subtitle"
						value={ sectionSubtitle }
						onChange={ ( val ) => setAttributes( { sectionSubtitle: val } ) }
						rows={ 3 }
					/>
				</PanelBody>

				<PanelBody title={ `Services (${ ( services || [] ).length })` } initialOpen={ false }>
					{ ( services || [] ).map( ( service, index ) => (
						<div
							key={ index }
							style={ { borderBottom: '1px solid #e0e0e0', paddingBottom: 16, marginBottom: 16 } }
						>
							<strong style={ { display: 'block', marginBottom: 8 } }>
								Service { index + 1 }: { service.title }
							</strong>
							<SelectControl
								label="Icon"
								value={ service.iconName }
								options={ ICON_OPTIONS }
								onChange={ ( val ) => updateService( index, 'iconName', val ) }
							/>
							<TextControl
								label="Title"
								value={ service.title }
								onChange={ ( val ) => updateService( index, 'title', val ) }
							/>
							<TextareaControl
								label="Description"
								value={ service.description }
								onChange={ ( val ) => updateService( index, 'description', val ) }
								rows={ 3 }
							/>
							<SelectControl
								label="Color"
								value={ service.color }
								options={ COLOR_OPTIONS }
								onChange={ ( val ) => updateService( index, 'color', val ) }
							/>
							<Button isDestructive isSmall onClick={ () => removeService( index ) }>
								Remove Service
							</Button>
						</div>
					) ) }
					<Button isPrimary isSmall onClick={ addService }>
						+ Add Service
					</Button>
				</PanelBody>
			</InspectorControls>

			<div { ...useBlockProps( { style: { background: '#F7F9F8', padding: 24, borderRadius: 8 } } ) }>
				<span style={ { background: '#1E7A45', color: '#fff', borderRadius: 99, padding: '3px 12px', fontSize: 12, fontWeight: 700 } }>
					{ sectionLabel }
				</span>
				<h2 style={ { fontSize: 26, fontWeight: 800, color: '#0B2545', margin: '12px 0 8px' } }>
					{ sectionTitle }
				</h2>
				<p style={ { color: '#4A5568', marginBottom: 20 } }>{ sectionSubtitle }</p>
				<div style={ { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 } }>
					{ ( services || [] ).slice( 0, 8 ).map( ( s, i ) => (
						<div
							key={ i }
							style={ {
								background: '#fff',
								border: `1px solid ${ s.color }40`,
								borderRadius: 12,
								padding: 14,
							} }
						>
							<div style={ { width: 32, height: 32, borderRadius: 8, background: `${ s.color }20`, marginBottom: 8 } } />
							<strong style={ { fontSize: 12, color: '#0B2545', display: 'block', marginBottom: 4 } }>
								{ s.title }
							</strong>
							<p style={ { fontSize: 11, color: '#718096', margin: 0 } }>
								{ s.description.slice( 0, 60 ) }…
							</p>
						</div>
					) ) }
				</div>
				<p style={ { color: '#aaa', fontSize: 11, marginTop: 12 } }>
					Services Grid — edit items in the sidebar →
				</p>
			</div>
		</>
	);
}
