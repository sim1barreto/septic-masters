import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	TextareaControl,
	Button,
} from '@wordpress/components';

export function Edit( { attributes, setAttributes } ) {
	const { sectionLabel, headline, subtext, phone, ctaUrl, additionalAreas, mapCities } = attributes;

	const updateArea = ( index, value ) => {
		const updated = [ ...( additionalAreas || [] ) ];
		updated[ index ] = value;
		setAttributes( { additionalAreas: updated } );
	};

	const addArea = () =>
		setAttributes( { additionalAreas: [ ...( additionalAreas || [] ), 'New City, TX' ] } );

	const removeArea = ( index ) =>
		setAttributes( { additionalAreas: ( additionalAreas || [] ).filter( ( _, i ) => i !== index ) } );

	const updateCity = ( index, field, value ) => {
		const updated = [ ...( mapCities || [] ) ];
		updated[ index ] = { ...updated[ index ], [ field ]: value };
		setAttributes( { mapCities: updated } );
	};

	const addCity = () =>
		setAttributes( { mapCities: [ ...( mapCities || [] ), { label: 'City', top: '50%', left: '50%', color: '#25A55F' } ] } );

	const removeCity = ( index ) =>
		setAttributes( { mapCities: ( mapCities || [] ).filter( ( _, i ) => i !== index ) } );

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
						rows={ 2 }
					/>
					<TextControl
						label="Phone Number"
						value={ phone }
						onChange={ ( val ) => setAttributes( { phone: val } ) }
					/>
					<TextControl
						label="CTA URL"
						value={ ctaUrl }
						onChange={ ( val ) => setAttributes( { ctaUrl: val } ) }
					/>
				</PanelBody>

				<PanelBody title={ `Additional Areas (${ ( additionalAreas || [] ).length })` } initialOpen={ false }>
					{ ( additionalAreas || [] ).map( ( area, index ) => (
						<div
							key={ index }
							style={ { display: 'flex', gap: 8, alignItems: 'center', marginBottom: 6 } }
						>
							<TextControl
								value={ area }
								onChange={ ( val ) => updateArea( index, val ) }
								style={ { flex: 1, margin: 0 } }
							/>
							<Button isDestructive isSmall onClick={ () => removeArea( index ) }>✕</Button>
						</div>
					) ) }
					<Button isPrimary isSmall onClick={ addArea }>+ Add Area</Button>
				</PanelBody>

				<PanelBody title={ `Map Cities (${ ( mapCities || [] ).length })` } initialOpen={ false }>
					{ ( mapCities || [] ).map( ( city, index ) => (
						<div
							key={ index }
							style={ { borderBottom: '1px solid #e0e0e0', paddingBottom: 10, marginBottom: 10 } }
						>
							<TextControl
								label="City Label"
								value={ city.label }
								onChange={ ( val ) => updateCity( index, 'label', val ) }
							/>
							<TextControl
								label="Top position (%)"
								value={ city.top }
								onChange={ ( val ) => updateCity( index, 'top', val ) }
							/>
							<TextControl
								label="Left position (%)"
								value={ city.left }
								onChange={ ( val ) => updateCity( index, 'left', val ) }
							/>
							<TextControl
								label="Color (hex)"
								value={ city.color }
								onChange={ ( val ) => updateCity( index, 'color', val ) }
							/>
							<Button isDestructive isSmall onClick={ () => removeCity( index ) }>
								Remove
							</Button>
						</div>
					) ) }
					<Button isPrimary isSmall onClick={ addCity }>+ Add City</Button>
				</PanelBody>
			</InspectorControls>

			<div { ...useBlockProps( { style: { background: '#F7F9F8', padding: 24, borderRadius: 8, border: '1px solid #E2E8F0' } } ) }>
				<div style={ { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 } }>
					<div>
						<span style={ { background: 'rgba(30,122,69,0.1)', color: '#1E7A45', borderRadius: 99, padding: '3px 12px', fontSize: 11, fontWeight: 700 } }>
							{ sectionLabel }
						</span>
						<h2 style={ { fontSize: 16, fontWeight: 800, color: '#0B2545', margin: '10px 0 8px' } }>{ headline }</h2>
						<p style={ { color: '#4A5568', fontSize: 12, marginBottom: 12 } }>{ subtext }</p>
						<div style={ { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 } }>
							{ ( additionalAreas || [] ).map( ( area, i ) => (
								<div
									key={ i }
									style={ { background: '#fff', border: '1px solid #E2E8F0', borderRadius: 8, padding: '4px 8px', fontSize: 11, color: '#4A5568' } }
								>
									📍 { area }
								</div>
							) ) }
						</div>
					</div>
					<div style={ { background: '#0B2545', borderRadius: 12, height: 220, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' } }>
						<div style={ { color: '#fff', fontWeight: 800, fontSize: 14 } }>Austin, TX</div>
						<div style={ { position: 'absolute', bottom: 12, color: 'rgba(255,255,255,0.5)', fontSize: 10 } }>
							~50 mile radius coverage
						</div>
					</div>
				</div>
				<p style={ { color: '#aaa', fontSize: 11, marginTop: 12 } }>
					Coverage Map — { ( additionalAreas || [] ).length } areas, edit in sidebar →
				</p>
			</div>
		</>
	);
}
