import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	TextareaControl,
	Button,
} from '@wordpress/components';

export function Edit( { attributes, setAttributes } ) {
	const { sectionLabel, headline, subtext, phone, email, serviceOptions } = attributes;

	const updateOption = ( index, value ) => {
		const updated = [ ...( serviceOptions || [] ) ];
		updated[ index ] = value;
		setAttributes( { serviceOptions: updated } );
	};

	const addOption = () =>
		setAttributes( { serviceOptions: [ ...( serviceOptions || [] ), 'New Service' ] } );

	const removeOption = ( index ) =>
		setAttributes( {
			serviceOptions: ( serviceOptions || [] ).filter( ( _, i ) => i !== index ),
		} );

	return (
		<>
			<InspectorControls>
				<PanelBody title="Section Content" initialOpen={ true }>
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
						label="Sub-text"
						value={ subtext }
						onChange={ ( val ) => setAttributes( { subtext: val } ) }
						rows={ 3 }
					/>
				</PanelBody>

				<PanelBody title="Contact Details" initialOpen={ false }>
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
							style={ { display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8 } }
						>
							<TextControl
								value={ option }
								onChange={ ( val ) => updateOption( index, val ) }
								style={ { flex: 1, margin: 0 } }
							/>
							<Button isDestructive isSmall onClick={ () => removeOption( index ) }>✕</Button>
						</div>
					) ) }
					<Button isPrimary isSmall onClick={ addOption }>
						+ Add Option
					</Button>
				</PanelBody>
			</InspectorControls>

			<div { ...useBlockProps( { style: { background: '#F7F9F8', padding: 24, borderRadius: 8 } } ) }>
				<div style={ { textAlign: 'center', marginBottom: 24 } }>
					<span style={ { background: '#1E7A45', color: '#fff', borderRadius: 99, padding: '3px 12px', fontSize: 12, fontWeight: 700 } }>
						{ sectionLabel }
					</span>
					<h2 style={ { fontSize: 24, fontWeight: 800, color: '#0B2545', margin: '12px 0 8px' } }>
						{ headline }
					</h2>
					<p style={ { color: '#4A5568', fontSize: 14 } }>{ subtext }</p>
				</div>
				<div style={ { display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 20 } }>
					<div style={ { background: '#fff', borderRadius: 16, padding: 24, border: '1px solid #E2E8F0' } }>
						<div style={ { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 } }>
							<div style={ { background: '#F7F9F8', borderRadius: 8, height: 40, border: '1px solid #E2E8F0' } } />
							<div style={ { background: '#F7F9F8', borderRadius: 8, height: 40, border: '1px solid #E2E8F0' } } />
						</div>
						<div style={ { background: '#F7F9F8', borderRadius: 8, height: 40, border: '1px solid #E2E8F0', marginBottom: 12 } } />
						<div style={ { background: '#F7F9F8', borderRadius: 8, height: 40, border: '1px solid #E2E8F0', marginBottom: 12 } } />
						<div style={ { background: '#F7F9F8', borderRadius: 8, height: 80, border: '1px solid #E2E8F0', marginBottom: 12 } } />
						<div style={ { background: 'linear-gradient(135deg, #1E7A45, #25A55F)', borderRadius: 12, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' } }>
							<span style={ { color: '#fff', fontWeight: 700, fontSize: 14 } }>Get My Free Quote →</span>
						</div>
					</div>
					<div style={ { display: 'flex', flexDirection: 'column', gap: 12 } }>
						<div style={ { background: '#fff', borderRadius: 12, padding: 16, border: '1px solid #E2E8F0' } }>
							<strong style={ { color: '#0B2545', fontSize: 13 } }>📞 { phone }</strong>
							<p style={ { color: '#718096', fontSize: 12, margin: '4px 0 0' } }>Mon–Sat 7am–7pm · 24/7 Emergency</p>
						</div>
						<div style={ { background: '#fff', borderRadius: 12, padding: 16, border: '1px solid #E2E8F0' } }>
							<strong style={ { color: '#0B2545', fontSize: 13 } }>✉️ { email }</strong>
							<p style={ { color: '#718096', fontSize: 12, margin: '4px 0 0' } }>Reply within 1 business hour</p>
						</div>
						<div style={ { background: '#0B2545', borderRadius: 12, padding: 16 } }>
							<p style={ { color: '#25A55F', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, margin: '0 0 8px' } }>Our Guarantee</p>
							{ [ 'Free estimate', 'Price match', 'Work backed by warranty', 'Satisfaction guaranteed' ].map( ( g, i ) => (
								<p key={ i } style={ { color: 'rgba(255,255,255,0.7)', fontSize: 12, margin: '0 0 4px' } }>✓ { g }</p>
							) ) }
						</div>
					</div>
				</div>
				<p style={ { color: '#aaa', fontSize: 11, marginTop: 12, textAlign: 'center' } }>
					Lead Capture Form — edit in the sidebar →
				</p>
			</div>
		</>
	);
}
