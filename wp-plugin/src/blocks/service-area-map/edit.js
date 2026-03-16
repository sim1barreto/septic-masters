import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	TextareaControl,
	ToggleControl,
	Button,
} from '@wordpress/components';

const DEFAULT_AREA = { name: 'New City', primary: false };

export function Edit( { attributes, setAttributes } ) {
	const { sectionLabel, headline, subtext, imageUrl, badgeText, badgeSubtext, ctaText, ctaUrl, areas } = attributes;

	const updateArea = ( index, field, value ) => {
		const updated = [ ...( areas || [] ) ];
		updated[ index ] = { ...updated[ index ], [ field ]: value };
		setAttributes( { areas: updated } );
	};

	const addArea = () =>
		setAttributes( { areas: [ ...( areas || [] ), { ...DEFAULT_AREA } ] } );

	const removeArea = ( index ) =>
		setAttributes( { areas: ( areas || [] ).filter( ( _, i ) => i !== index ) } );

	return (
		<>
			<InspectorControls>
				<PanelBody title="Content" initialOpen={ true }>
					<TextControl
						label="Section Label"
						value={ sectionLabel }
						onChange={ ( val ) => setAttributes( { sectionLabel: val } ) }
					/>
					<TextareaControl
						label="Headline"
						value={ headline }
						onChange={ ( val ) => setAttributes( { headline: val } ) }
						rows={ 2 }
					/>
					<TextareaControl
						label="Subtext"
						value={ subtext }
						onChange={ ( val ) => setAttributes( { subtext: val } ) }
						rows={ 3 }
					/>
					<TextControl
						label="Image URL"
						value={ imageUrl }
						onChange={ ( val ) => setAttributes( { imageUrl: val } ) }
					/>
					<TextControl
						label="Badge Text"
						value={ badgeText }
						onChange={ ( val ) => setAttributes( { badgeText: val } ) }
					/>
					<TextControl
						label="Badge Subtext"
						value={ badgeSubtext }
						onChange={ ( val ) => setAttributes( { badgeSubtext: val } ) }
					/>
					<TextControl
						label="CTA Button Text"
						value={ ctaText }
						onChange={ ( val ) => setAttributes( { ctaText: val } ) }
					/>
					<TextControl
						label="CTA URL"
						value={ ctaUrl }
						onChange={ ( val ) => setAttributes( { ctaUrl: val } ) }
					/>
				</PanelBody>

				<PanelBody title={ `Areas (${ ( areas || [] ).length })` } initialOpen={ false }>
					{ ( areas || [] ).map( ( area, index ) => (
						<div
							key={ index }
							style={ { borderBottom: '1px solid #e0e0e0', paddingBottom: 12, marginBottom: 12 } }
						>
							<TextControl
								label={ `City ${ index + 1 }` }
								value={ area.name }
								onChange={ ( val ) => updateArea( index, 'name', val ) }
							/>
							<ToggleControl
								label="Primary area"
								checked={ area.primary }
								onChange={ ( val ) => updateArea( index, 'primary', val ) }
							/>
							<Button isDestructive isSmall onClick={ () => removeArea( index ) }>
								Remove
							</Button>
						</div>
					) ) }
					<Button isPrimary isSmall onClick={ addArea }>+ Add Area</Button>
				</PanelBody>
			</InspectorControls>

			<div { ...useBlockProps( { style: { background: '#0B2545', padding: 24, borderRadius: 8 } } ) }>
				<span style={ { background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)', borderRadius: 99, padding: '3px 12px', fontSize: 11, fontWeight: 700 } }>
					{ sectionLabel }
				</span>
				<h2 style={ { color: '#fff', fontSize: 20, fontWeight: 800, margin: '10px 0 6px' } }>{ headline }</h2>
				<p style={ { color: 'rgba(255,255,255,0.6)', fontSize: 13, marginBottom: 16 } }>{ subtext }</p>
				<div style={ { display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 } }>
					{ ( areas || [] ).map( ( area, i ) => (
						<span
							key={ i }
							style={ {
								background: area.primary ? 'rgba(30,122,69,0.3)' : 'rgba(255,255,255,0.05)',
								border: `1px solid ${ area.primary ? 'rgba(37,165,95,0.3)' : 'rgba(255,255,255,0.1)' }`,
								color: area.primary ? '#fff' : 'rgba(255,255,255,0.65)',
								borderRadius: 12,
								padding: '4px 10px',
								fontSize: 12,
								fontWeight: area.primary ? 600 : 500,
							} }
						>
							{ area.name }, TX
						</span>
					) ) }
				</div>
				<p style={ { color: 'rgba(255,255,255,0.4)', fontSize: 11, marginTop: 8 } }>
					Service Area Map — edit in sidebar → ({ ( areas || [] ).length } areas)
				</p>
			</div>
		</>
	);
}
