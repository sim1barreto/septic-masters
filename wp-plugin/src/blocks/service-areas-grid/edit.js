import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	TextareaControl,
	Button,
} from '@wordpress/components';

const DEFAULT_AREA = {
	city: 'New City',
	county: 'County Name',
	description: 'Description of the area.',
	services: [ 'Service one', 'Service two', 'Service three' ],
	color: '#25A55F',
};

export function Edit( { attributes, setAttributes } ) {
	const { sectionLabel, headline, subtext, phone, ctaUrl, areas } = attributes;

	const updateArea = ( index, field, value ) => {
		const updated = [ ...( areas || [] ) ];
		updated[ index ] = { ...updated[ index ], [ field ]: value };
		setAttributes( { areas: updated } );
	};

	const updateAreaService = ( areaIndex, serviceIndex, value ) => {
		const updated = [ ...( areas || [] ) ];
		const services = [ ...( updated[ areaIndex ].services || [] ) ];
		services[ serviceIndex ] = value;
		updated[ areaIndex ] = { ...updated[ areaIndex ], services };
		setAttributes( { areas: updated } );
	};

	const addArea = () =>
		setAttributes( { areas: [ ...( areas || [] ), { ...DEFAULT_AREA, services: [ ...DEFAULT_AREA.services ] } ] } );

	const removeArea = ( index ) =>
		setAttributes( { areas: ( areas || [] ).filter( ( _, i ) => i !== index ) } );

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
						label="Quote CTA URL"
						value={ ctaUrl }
						onChange={ ( val ) => setAttributes( { ctaUrl: val } ) }
					/>
				</PanelBody>

				{ ( areas || [] ).map( ( area, index ) => (
					<PanelBody
						key={ index }
						title={ area.city || `Area ${ index + 1 }` }
						initialOpen={ false }
					>
						<TextControl
							label="City"
							value={ area.city }
							onChange={ ( val ) => updateArea( index, 'city', val ) }
						/>
						<TextControl
							label="County"
							value={ area.county }
							onChange={ ( val ) => updateArea( index, 'county', val ) }
						/>
						<TextareaControl
							label="Description"
							value={ area.description }
							onChange={ ( val ) => updateArea( index, 'description', val ) }
							rows={ 2 }
						/>
						<TextControl
							label="Color (hex)"
							value={ area.color }
							onChange={ ( val ) => updateArea( index, 'color', val ) }
						/>
						{ ( area.services || [] ).map( ( svc, si ) => (
							<TextControl
								key={ si }
								label={ `Service ${ si + 1 }` }
								value={ svc }
								onChange={ ( val ) => updateAreaService( index, si, val ) }
							/>
						) ) }
						<Button isDestructive isSmall onClick={ () => removeArea( index ) }>
							Remove Area
						</Button>
					</PanelBody>
				) ) }

				<PanelBody title="Add Area" initialOpen={ false }>
					<Button isPrimary onClick={ addArea }>+ Add Service Area</Button>
				</PanelBody>
			</InspectorControls>

			<div { ...useBlockProps( { style: { background: '#fff', padding: 24, borderRadius: 8, border: '1px solid #E2E8F0' } } ) }>
				<div style={ { textAlign: 'center', marginBottom: 20 } }>
					<span style={ { background: 'rgba(30,122,69,0.1)', color: '#1E7A45', borderRadius: 99, padding: '3px 12px', fontSize: 11, fontWeight: 700 } }>
						{ sectionLabel }
					</span>
					<h2 style={ { fontSize: 18, fontWeight: 800, color: '#0B2545', margin: '10px 0 6px' } }>{ headline }</h2>
					<p style={ { color: '#4A5568', fontSize: 12 } }>{ subtext }</p>
				</div>
				<div style={ { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 } }>
					{ ( areas || [] ).map( ( area, i ) => (
						<div
							key={ i }
							style={ { background: '#F7F9F8', border: '1px solid #E2E8F0', borderRadius: 12, padding: 16 } }
						>
							<div style={ { display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 } }>
								<div style={ { width: 32, height: 32, borderRadius: 8, background: `${ area.color }15`, border: `1px solid ${ area.color }30`, display: 'flex', alignItems: 'center', justifyContent: 'center' } }>
									<span style={ { color: area.color, fontSize: 14 } }>📍</span>
								</div>
								<div>
									<strong style={ { color: '#0B2545', fontSize: 12 } }>{ area.city }, TX</strong>
									<div style={ { color: '#718096', fontSize: 10 } }>{ area.county }</div>
								</div>
							</div>
							<p style={ { color: '#4A5568', fontSize: 11, marginBottom: 8 } }>{ area.description }</p>
							{ ( area.services || [] ).map( ( svc, si ) => (
								<div key={ si } style={ { display: 'flex', alignItems: 'center', gap: 4, marginBottom: 3 } }>
									<span style={ { color: area.color, fontSize: 10 } }>✓</span>
									<span style={ { color: '#4A5568', fontSize: 10 } }>{ svc }</span>
								</div>
							) ) }
						</div>
					) ) }
				</div>
				<p style={ { color: '#aaa', fontSize: 11, marginTop: 12, textAlign: 'center' } }>
					Service Areas Grid — { ( areas || [] ).length } areas, edit in sidebar →
				</p>
			</div>
		</>
	);
}
