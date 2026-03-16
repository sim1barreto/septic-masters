import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	TextareaControl,
	Button,
} from '@wordpress/components';

const DEFAULT_SERVICE = {
	iconName: 'Wrench',
	title: 'New Service',
	color: '#25A55F',
	description: 'Service description.',
	benefits: [ 'Benefit one', 'Benefit two' ],
	price: 'Starting at $XXX',
	time: '1–2 hours',
};

export function Edit( { attributes, setAttributes } ) {
	const { phone, ctaUrl, services } = attributes;

	const updateService = ( index, field, value ) => {
		const updated = [ ...( services || [] ) ];
		updated[ index ] = { ...updated[ index ], [ field ]: value };
		setAttributes( { services: updated } );
	};

	const updateBenefit = ( serviceIndex, benefitIndex, value ) => {
		const updatedServices = [ ...( services || [] ) ];
		const benefits = [ ...( updatedServices[ serviceIndex ].benefits || [] ) ];
		benefits[ benefitIndex ] = value;
		updatedServices[ serviceIndex ] = { ...updatedServices[ serviceIndex ], benefits };
		setAttributes( { services: updatedServices } );
	};

	const addBenefit = ( serviceIndex ) => {
		const updatedServices = [ ...( services || [] ) ];
		const benefits = [ ...( updatedServices[ serviceIndex ].benefits || [] ), 'New benefit' ];
		updatedServices[ serviceIndex ] = { ...updatedServices[ serviceIndex ], benefits };
		setAttributes( { services: updatedServices } );
	};

	const removeBenefit = ( serviceIndex, benefitIndex ) => {
		const updatedServices = [ ...( services || [] ) ];
		const benefits = ( updatedServices[ serviceIndex ].benefits || [] ).filter( ( _, i ) => i !== benefitIndex );
		updatedServices[ serviceIndex ] = { ...updatedServices[ serviceIndex ], benefits };
		setAttributes( { services: updatedServices } );
	};

	const addService = () =>
		setAttributes( { services: [ ...( services || [] ), { ...DEFAULT_SERVICE } ] } );

	const removeService = ( index ) =>
		setAttributes( { services: ( services || [] ).filter( ( _, i ) => i !== index ) } );

	return (
		<>
			<InspectorControls>
				<PanelBody title="Global Settings" initialOpen={ true }>
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

				{ ( services || [] ).map( ( service, index ) => (
					<PanelBody
						key={ index }
						title={ service.title || `Service ${ index + 1 }` }
						initialOpen={ false }
					>
						<TextControl
							label="Icon Name (Lucide)"
							value={ service.iconName }
							onChange={ ( val ) => updateService( index, 'iconName', val ) }
						/>
						<TextControl
							label="Title"
							value={ service.title }
							onChange={ ( val ) => updateService( index, 'title', val ) }
						/>
						<TextControl
							label="Color (hex)"
							value={ service.color }
							onChange={ ( val ) => updateService( index, 'color', val ) }
						/>
						<TextareaControl
							label="Description"
							value={ service.description }
							onChange={ ( val ) => updateService( index, 'description', val ) }
							rows={ 4 }
						/>
						<TextControl
							label="Price"
							value={ service.price }
							onChange={ ( val ) => updateService( index, 'price', val ) }
						/>
						<TextControl
							label="Service Time"
							value={ service.time }
							onChange={ ( val ) => updateService( index, 'time', val ) }
						/>
						<p style={ { fontSize: 12, fontWeight: 600, marginBottom: 4 } }>Benefits</p>
						{ ( service.benefits || [] ).map( ( benefit, bi ) => (
							<div
								key={ bi }
								style={ { display: 'flex', gap: 8, alignItems: 'center', marginBottom: 6 } }
							>
								<TextControl
									value={ benefit }
									onChange={ ( val ) => updateBenefit( index, bi, val ) }
									style={ { flex: 1, margin: 0 } }
								/>
								<Button isDestructive isSmall onClick={ () => removeBenefit( index, bi ) }>✕</Button>
							</div>
						) ) }
						<Button isSmall onClick={ () => addBenefit( index ) } style={ { marginBottom: 12 } }>
							+ Benefit
						</Button>
						<Button isDestructive isSmall onClick={ () => removeService( index ) }>
							Remove Service
						</Button>
					</PanelBody>
				) ) }

				<PanelBody title="Add Service" initialOpen={ false }>
					<Button isPrimary onClick={ addService }>+ Add Service</Button>
				</PanelBody>
			</InspectorControls>

			<div { ...useBlockProps( { style: { background: '#F7F9F8', padding: 24, borderRadius: 8 } } ) }>
				<div style={ { display: 'flex', flexDirection: 'column', gap: 12 } }>
					{ ( services || [] ).map( ( service, i ) => (
						<div
							key={ i }
							style={ { background: '#fff', border: '1px solid #E2E8F0', borderRadius: 12, padding: 16, display: 'grid', gridTemplateColumns: '1fr 3fr 1fr', gap: 12 } }
						>
							<div style={ { background: `${ service.color }15`, borderRadius: 8, padding: 12, display: 'flex', flexDirection: 'column', gap: 8 } }>
								<div style={ { width: 32, height: 32, borderRadius: 8, background: `${ service.color }20`, display: 'flex', alignItems: 'center', justifyContent: 'center' } }>
									<span style={ { color: service.color, fontSize: 14 } }>{ service.iconName[ 0 ] }</span>
								</div>
								<div style={ { color: '#718096', fontSize: 10, textTransform: 'uppercase' } }>Cost</div>
								<div style={ { color: '#0B2545', fontSize: 11, fontWeight: 700 } }>{ service.price }</div>
								<div style={ { color: '#718096', fontSize: 10, textTransform: 'uppercase' } }>Time</div>
								<div style={ { color: '#0B2545', fontSize: 11, fontWeight: 600 } }>{ service.time }</div>
							</div>
							<div>
								<h3 style={ { color: '#0B2545', fontSize: 14, fontWeight: 800, marginBottom: 6 } }>{ service.title }</h3>
								<p style={ { color: '#4A5568', fontSize: 12, marginBottom: 8 } }>{ service.description }</p>
								<div style={ { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4 } }>
									{ ( service.benefits || [] ).map( ( b, bi ) => (
										<div key={ bi } style={ { display: 'flex', alignItems: 'center', gap: 4 } }>
											<span style={ { color: service.color, fontSize: 12 } }>✓</span>
											<span style={ { color: '#4A5568', fontSize: 11 } }>{ b }</span>
										</div>
									) ) }
								</div>
							</div>
							<div style={ { display: 'flex', flexDirection: 'column', gap: 8 } }>
								<div style={ { background: service.color, borderRadius: 8, padding: '8px 12px', textAlign: 'center', fontSize: 12, color: '#fff', fontWeight: 700 } }>
									Call Now
								</div>
								<div style={ { border: '1px solid #E2E8F0', borderRadius: 8, padding: '8px 12px', textAlign: 'center', fontSize: 12, color: '#0B2545', fontWeight: 600 } }>
									Get Quote →
								</div>
							</div>
						</div>
					) ) }
				</div>
				<p style={ { color: '#aaa', fontSize: 11, marginTop: 12 } }>
					Services Detail — ${ ( services || [] ).length } services, edit in sidebar →
				</p>
			</div>
		</>
	);
}
