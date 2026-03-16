import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	TextareaControl,
	Button,
} from '@wordpress/components';

export function Edit( { attributes, setAttributes } ) {
	const { formTitle, formSubtext, phone, email, serviceOptions, whyItems, hours } = attributes;

	const updateServiceOption = ( index, value ) => {
		const updated = [ ...( serviceOptions || [] ) ];
		updated[ index ] = value;
		setAttributes( { serviceOptions: updated } );
	};

	const addServiceOption = () =>
		setAttributes( { serviceOptions: [ ...( serviceOptions || [] ), 'New Service' ] } );

	const removeServiceOption = ( index ) =>
		setAttributes( { serviceOptions: ( serviceOptions || [] ).filter( ( _, i ) => i !== index ) } );

	const updateWhyItem = ( index, value ) => {
		const updated = [ ...( whyItems || [] ) ];
		updated[ index ] = value;
		setAttributes( { whyItems: updated } );
	};

	const addWhyItem = () =>
		setAttributes( { whyItems: [ ...( whyItems || [] ), 'New reason.' ] } );

	const removeWhyItem = ( index ) =>
		setAttributes( { whyItems: ( whyItems || [] ).filter( ( _, i ) => i !== index ) } );

	const updateHour = ( index, field, value ) => {
		const updated = [ ...( hours || [] ) ];
		updated[ index ] = { ...updated[ index ], [ field ]: value };
		setAttributes( { hours: updated } );
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title="Form Content" initialOpen={ true }>
					<TextControl
						label="Form Title"
						value={ formTitle }
						onChange={ ( val ) => setAttributes( { formTitle: val } ) }
					/>
					<TextareaControl
						label="Form Subtext"
						value={ formSubtext }
						onChange={ ( val ) => setAttributes( { formSubtext: val } ) }
						rows={ 2 }
					/>
					<TextControl
						label="Phone Number"
						value={ phone }
						onChange={ ( val ) => setAttributes( { phone: val } ) }
					/>
					<TextControl
						label="Email Address"
						type="email"
						value={ email }
						onChange={ ( val ) => setAttributes( { email: val } ) }
					/>
				</PanelBody>

				<PanelBody title={ `Service Options (${ ( serviceOptions || [] ).length })` } initialOpen={ false }>
					{ ( serviceOptions || [] ).map( ( option, index ) => (
						<div
							key={ index }
							style={ { display: 'flex', gap: 8, alignItems: 'center', marginBottom: 6 } }
						>
							<TextControl
								value={ option }
								onChange={ ( val ) => updateServiceOption( index, val ) }
								style={ { flex: 1, margin: 0 } }
							/>
							<Button isDestructive isSmall onClick={ () => removeServiceOption( index ) }>✕</Button>
						</div>
					) ) }
					<Button isPrimary isSmall onClick={ addServiceOption }>+ Add Option</Button>
				</PanelBody>

				<PanelBody title={ `Why Choose Us (${ ( whyItems || [] ).length })` } initialOpen={ false }>
					{ ( whyItems || [] ).map( ( item, index ) => (
						<div
							key={ index }
							style={ { display: 'flex', gap: 8, alignItems: 'center', marginBottom: 6 } }
						>
							<TextControl
								value={ item }
								onChange={ ( val ) => updateWhyItem( index, val ) }
								style={ { flex: 1, margin: 0 } }
							/>
							<Button isDestructive isSmall onClick={ () => removeWhyItem( index ) }>✕</Button>
						</div>
					) ) }
					<Button isPrimary isSmall onClick={ addWhyItem }>+ Add Item</Button>
				</PanelBody>

				<PanelBody title={ `Service Hours (${ ( hours || [] ).length })` } initialOpen={ false }>
					{ ( hours || [] ).map( ( row, index ) => (
						<div
							key={ index }
							style={ { borderBottom: '1px solid #e0e0e0', paddingBottom: 10, marginBottom: 10 } }
						>
							<TextControl
								label="Day(s)"
								value={ row.day }
								onChange={ ( val ) => updateHour( index, 'day', val ) }
							/>
							<TextControl
								label="Hours"
								value={ row.hours }
								onChange={ ( val ) => updateHour( index, 'hours', val ) }
							/>
						</div>
					) ) }
				</PanelBody>
			</InspectorControls>

			<div { ...useBlockProps( { style: { background: '#F7F9F8', padding: 24, borderRadius: 8 } } ) }>
				<div style={ { display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16 } }>
					<div style={ { background: '#fff', borderRadius: 12, padding: 20, border: '1px solid #E2E8F0' } }>
						<h2 style={ { color: '#0B2545', fontSize: 16, fontWeight: 800, marginBottom: 4 } }>{ formTitle }</h2>
						<p style={ { color: '#718096', fontSize: 12, marginBottom: 16 } }>{ formSubtext }</p>
						<div style={ { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 8 } }>
							{ [ 'Full Name *', 'Phone Number *', 'Email Address', 'Service Needed *' ].map( ( label, i ) => (
								<div key={ i } style={ { background: '#F7F9F8', borderRadius: 8, height: 36, border: '1px solid #E2E8F0', padding: '0 10px', display: 'flex', alignItems: 'center' } }>
									<span style={ { color: '#A0AEC0', fontSize: 11 } }>{ label }</span>
								</div>
							) ) }
						</div>
						<div style={ { background: '#F7F9F8', borderRadius: 8, height: 60, border: '1px solid #E2E8F0', marginBottom: 8 } } />
						<div style={ { background: 'linear-gradient(135deg, #1E7A45, #25A55F)', borderRadius: 10, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' } }>
							<span style={ { color: '#fff', fontWeight: 700, fontSize: 13 } }>Send My Request →</span>
						</div>
					</div>
					<div style={ { display: 'flex', flexDirection: 'column', gap: 8 } }>
						<div style={ { background: '#BE2026', borderRadius: 10, padding: 14 } }>
							<strong style={ { color: '#fff', fontSize: 12, display: 'block', marginBottom: 4 } }>24/7 Emergency?</strong>
							<div style={ { background: '#fff', borderRadius: 6, padding: '6px 10px', textAlign: 'center', color: '#BE2026', fontWeight: 800, fontSize: 12 } }>
								{ phone }
							</div>
						</div>
						<div style={ { background: '#fff', border: '1px solid #E2E8F0', borderRadius: 10, padding: 14 } }>
							<strong style={ { color: '#0B2545', fontSize: 12, display: 'block', marginBottom: 8 } }>Why Choose Septic Masters?</strong>
							{ ( whyItems || [] ).slice( 0, 4 ).map( ( item, i ) => (
								<div key={ i } style={ { display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 } }>
									<span style={ { color: '#25A55F', fontSize: 12 } }>✓</span>
									<span style={ { color: '#4A5568', fontSize: 11 } }>{ item }</span>
								</div>
							) ) }
						</div>
						<div style={ { background: '#0B2545', borderRadius: 10, padding: 14 } }>
							<strong style={ { color: '#fff', fontSize: 12, display: 'block', marginBottom: 8 } }>Service Hours</strong>
							{ ( hours || [] ).map( ( row, i ) => (
								<div key={ i } style={ { display: 'flex', justifyContent: 'space-between', paddingBottom: 4, marginBottom: 4, borderBottom: i < ( hours || [] ).length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none' } }>
									<span style={ { color: 'rgba(255,255,255,0.7)', fontSize: 10 } }>{ row.day }</span>
									<span style={ { color: '#fff', fontSize: 10, fontWeight: 600 } }>{ row.hours }</span>
								</div>
							) ) }
						</div>
					</div>
				</div>
				<p style={ { color: '#aaa', fontSize: 11, marginTop: 12 } }>
					Contact Form — edit in sidebar →
				</p>
			</div>
		</>
	);
}
