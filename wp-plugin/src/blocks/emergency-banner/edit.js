import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	TextareaControl,
	Button,
} from '@wordpress/components';

export function Edit( { attributes, setAttributes } ) {
	const { badgeLabel, headline, subtext, phone, contactUrl, features } = attributes;

	const updateFeature = ( index, value ) => {
		const updated = [ ...( features || [] ) ];
		updated[ index ] = value;
		setAttributes( { features: updated } );
	};

	const addFeature = () =>
		setAttributes( { features: [ ...( features || [] ), 'New feature' ] } );

	const removeFeature = ( index ) =>
		setAttributes( { features: ( features || [] ).filter( ( _, i ) => i !== index ) } );

	return (
		<>
			<InspectorControls>
				<PanelBody title="Content" initialOpen={ true }>
					<TextControl
						label="Badge Label"
						value={ badgeLabel }
						onChange={ ( val ) => setAttributes( { badgeLabel: val } ) }
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
						label="Phone Number"
						value={ phone }
						onChange={ ( val ) => setAttributes( { phone: val } ) }
					/>
					<TextControl
						label="Contact Page URL"
						value={ contactUrl }
						onChange={ ( val ) => setAttributes( { contactUrl: val } ) }
					/>
				</PanelBody>

				<PanelBody title={ `Features (${ ( features || [] ).length })` } initialOpen={ false }>
					{ ( features || [] ).map( ( feature, index ) => (
						<div
							key={ index }
							style={ { display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8 } }
						>
							<TextControl
								value={ feature }
								onChange={ ( val ) => updateFeature( index, val ) }
								style={ { flex: 1, margin: 0 } }
							/>
							<Button isDestructive isSmall onClick={ () => removeFeature( index ) }>✕</Button>
						</div>
					) ) }
					<Button isPrimary isSmall onClick={ addFeature }>+ Add Feature</Button>
				</PanelBody>
			</InspectorControls>

			<div { ...useBlockProps( { style: { background: 'linear-gradient(135deg, #BE2026, #7A1519)', padding: 24, borderRadius: 8 } } ) }>
				<div style={ { marginBottom: 12 } }>
					<span style={ { background: 'rgba(255,255,255,0.2)', color: '#fff', borderRadius: 99, padding: '3px 12px', fontSize: 11, fontWeight: 700 } }>
						{ badgeLabel }
					</span>
				</div>
				<h2 style={ { color: '#fff', fontSize: 22, fontWeight: 800, margin: '8px 0' } }>
					{ ( headline || '' ).replace( /\\n/g, ' / ' ) }
				</h2>
				<p style={ { color: 'rgba(255,255,255,0.75)', fontSize: 13, marginBottom: 16 } }>{ subtext }</p>
				<div style={ { display: 'flex', gap: 8, marginBottom: 16 } }>
					<span style={ { background: '#fff', color: '#BE2026', borderRadius: 8, padding: '8px 16px', fontWeight: 800, fontSize: 13 } }>
						{ phone }
					</span>
					<span style={ { background: 'rgba(255,255,255,0.15)', color: '#fff', borderRadius: 8, padding: '8px 16px', fontWeight: 600, fontSize: 13 } }>
						Request Online →
					</span>
				</div>
				<div style={ { display: 'flex', flexWrap: 'wrap', gap: 12 } }>
					{ ( features || [] ).map( ( f, i ) => (
						<span key={ i } style={ { color: 'rgba(255,255,255,0.85)', fontSize: 12 } }>✓ { f }</span>
					) ) }
				</div>
				<p style={ { color: 'rgba(255,255,255,0.5)', fontSize: 11, marginTop: 12 } }>
					Emergency Banner — edit in sidebar →
				</p>
			</div>
		</>
	);
}
