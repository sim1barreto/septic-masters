import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	TextareaControl,
	Button,
} from '@wordpress/components';

export function Edit( { attributes, setAttributes } ) {
	const { sectionLabel, headline, subtext, guarantees, phone, ctaText, ctaUrl, imageUrl } = attributes;

	const updateGuarantee = ( index, value ) => {
		const updated = [ ...( guarantees || [] ) ];
		updated[ index ] = value;
		setAttributes( { guarantees: updated } );
	};

	const addGuarantee = () =>
		setAttributes( { guarantees: [ ...( guarantees || [] ), 'New guarantee item.' ] } );

	const removeGuarantee = ( index ) =>
		setAttributes( { guarantees: ( guarantees || [] ).filter( ( _, i ) => i !== index ) } );

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
						label="Phone Number"
						value={ phone }
						onChange={ ( val ) => setAttributes( { phone: val } ) }
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
					<TextControl
						label="Image URL"
						value={ imageUrl }
						onChange={ ( val ) => setAttributes( { imageUrl: val } ) }
					/>
				</PanelBody>

				<PanelBody title={ `Guarantee Items (${ ( guarantees || [] ).length })` } initialOpen={ false }>
					{ ( guarantees || [] ).map( ( item, index ) => (
						<div
							key={ index }
							style={ { display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8 } }
						>
							<TextControl
								value={ item }
								onChange={ ( val ) => updateGuarantee( index, val ) }
								style={ { flex: 1, margin: 0 } }
							/>
							<Button isDestructive isSmall onClick={ () => removeGuarantee( index ) }>✕</Button>
						</div>
					) ) }
					<Button isPrimary isSmall onClick={ addGuarantee }>+ Add Item</Button>
				</PanelBody>
			</InspectorControls>

			<div { ...useBlockProps( { style: { background: '#F7F9F8', padding: 24, borderRadius: 8, border: '1px solid #E2E8F0' } } ) }>
				<div style={ { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 } }>
					<div>
						<span style={ { background: 'rgba(30,122,69,0.1)', color: '#1E7A45', borderRadius: 99, padding: '3px 12px', fontSize: 11, fontWeight: 700 } }>
							{ sectionLabel }
						</span>
						<h2 style={ { fontSize: 18, fontWeight: 800, color: '#0B2545', margin: '10px 0 8px' } }>{ headline }</h2>
						<p style={ { color: '#4A5568', fontSize: 12, marginBottom: 12 } }>{ subtext }</p>
						{ ( guarantees || [] ).map( ( item, i ) => (
							<div key={ i } style={ { display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 } }>
								<span style={ { color: '#25A55F', fontSize: 14 } }>✓</span>
								<span style={ { color: '#4A5568', fontSize: 12 } }>{ item }</span>
							</div>
						) ) }
						<div style={ { display: 'flex', gap: 8, marginTop: 16 } }>
							<span style={ { background: '#BE2026', color: '#fff', borderRadius: 8, padding: '8px 14px', fontSize: 12, fontWeight: 700 } }>
								{ phone }
							</span>
							<span style={ { border: '1px solid rgba(11,37,69,0.2)', color: '#0B2545', borderRadius: 8, padding: '8px 14px', fontSize: 12, fontWeight: 600 } }>
								{ ctaText }
							</span>
						</div>
					</div>
					<div style={ { background: '#E2E8F0', borderRadius: 12, height: 180 } } />
				</div>
				<p style={ { color: '#aaa', fontSize: 11, marginTop: 12 } }>
					Promise CTA — edit in sidebar →
				</p>
			</div>
		</>
	);
}
