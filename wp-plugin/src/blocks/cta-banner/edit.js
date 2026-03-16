import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	TextareaControl,
} from '@wordpress/components';

export function Edit( { attributes, setAttributes } ) {
	const { headline, subtext, phone, ctaText, ctaUrl } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title="Content" initialOpen={ true }>
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
			</InspectorControls>

			<div { ...useBlockProps( { style: { background: 'linear-gradient(135deg, #0B2545, #0D2E1C)', padding: 32, borderRadius: 8, textAlign: 'center' } } ) }>
				<h2 style={ { color: '#fff', fontSize: 22, fontWeight: 800, marginBottom: 8 } }>{ headline }</h2>
				<p style={ { color: 'rgba(255,255,255,0.6)', fontSize: 14, marginBottom: 20 } }>{ subtext }</p>
				<div style={ { display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' } }>
					<span style={ { background: '#BE2026', color: '#fff', borderRadius: 12, padding: '12px 24px', fontWeight: 700, fontSize: 14 } }>
						📞 { phone }
					</span>
					<span style={ { border: '1px solid rgba(255,255,255,0.2)', color: '#fff', borderRadius: 12, padding: '12px 24px', fontWeight: 600, fontSize: 14 } }>
						{ ctaText } →
					</span>
				</div>
				<p style={ { color: 'rgba(255,255,255,0.4)', fontSize: 11, marginTop: 16 } }>
					CTA Banner — edit in sidebar →
				</p>
			</div>
		</>
	);
}
