import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	TextareaControl,
	Button,
} from '@wordpress/components';

const DEFAULT_VALUE = { iconName: 'Shield', title: 'New Value', description: 'Description here.', color: '#25A55F' };

export function Edit( { attributes, setAttributes } ) {
	const { sectionLabel, headline, values } = attributes;

	const updateValue = ( index, field, val ) => {
		const updated = [ ...( values || [] ) ];
		updated[ index ] = { ...updated[ index ], [ field ]: val };
		setAttributes( { values: updated } );
	};

	const addValue = () =>
		setAttributes( { values: [ ...( values || [] ), { ...DEFAULT_VALUE } ] } );

	const removeValue = ( index ) =>
		setAttributes( { values: ( values || [] ).filter( ( _, i ) => i !== index ) } );

	return (
		<>
			<InspectorControls>
				<PanelBody title="Section" initialOpen={ true }>
					<TextControl
						label="Section Label"
						value={ sectionLabel }
						onChange={ ( val ) => setAttributes( { sectionLabel: val } ) }
					/>
					<TextControl
						label="Headline"
						value={ headline }
						onChange={ ( val ) => setAttributes( { headline: val } ) }
					/>
				</PanelBody>

				<PanelBody title={ `Values (${ ( values || [] ).length })` } initialOpen={ false }>
					{ ( values || [] ).map( ( v, index ) => (
						<div
							key={ index }
							style={ { borderBottom: '1px solid #e0e0e0', paddingBottom: 12, marginBottom: 12 } }
						>
							<strong style={ { display: 'block', marginBottom: 8, fontSize: 12 } }>
								Value { index + 1 }
							</strong>
							<TextControl
								label="Icon Name (Lucide)"
								value={ v.iconName }
								onChange={ ( val ) => updateValue( index, 'iconName', val ) }
							/>
							<TextControl
								label="Title"
								value={ v.title }
								onChange={ ( val ) => updateValue( index, 'title', val ) }
							/>
							<TextareaControl
								label="Description"
								value={ v.description }
								onChange={ ( val ) => updateValue( index, 'description', val ) }
								rows={ 2 }
							/>
							<TextControl
								label="Color (hex)"
								value={ v.color }
								onChange={ ( val ) => updateValue( index, 'color', val ) }
							/>
							<Button isDestructive isSmall onClick={ () => removeValue( index ) }>
								Remove
							</Button>
						</div>
					) ) }
					<Button isPrimary isSmall onClick={ addValue }>+ Add Value</Button>
				</PanelBody>
			</InspectorControls>

			<div { ...useBlockProps( { style: { background: '#F7F9F8', padding: 24, borderRadius: 8 } } ) }>
				<div style={ { textAlign: 'center', marginBottom: 20 } }>
					<span style={ { background: 'rgba(30,122,69,0.1)', color: '#1E7A45', borderRadius: 99, padding: '3px 12px', fontSize: 11, fontWeight: 700 } }>
						{ sectionLabel }
					</span>
					<h2 style={ { fontSize: 18, fontWeight: 800, color: '#0B2545', margin: '10px 0 0' } }>{ headline }</h2>
				</div>
				<div style={ { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 } }>
					{ ( values || [] ).map( ( v, i ) => (
						<div
							key={ i }
							style={ { background: '#fff', border: '1px solid #E2E8F0', borderRadius: 12, padding: 16, textAlign: 'center' } }
						>
							<div style={ { width: 36, height: 36, borderRadius: 8, background: `${ v.color }15`, border: `1px solid ${ v.color }30`, margin: '0 auto 10px', display: 'flex', alignItems: 'center', justifyContent: 'center' } }>
								<span style={ { fontSize: 14, color: v.color } }>{ v.iconName[ 0 ] }</span>
							</div>
							<strong style={ { color: '#0B2545', fontSize: 12, display: 'block', marginBottom: 4 } }>{ v.title }</strong>
							<p style={ { color: '#718096', fontSize: 11 } }>{ v.description }</p>
						</div>
					) ) }
				</div>
				<p style={ { color: '#aaa', fontSize: 11, marginTop: 12, textAlign: 'center' } }>
					Values Grid — edit in sidebar →
				</p>
			</div>
		</>
	);
}
