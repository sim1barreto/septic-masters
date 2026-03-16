import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	TextareaControl,
	Button,
} from '@wordpress/components';

const DEFAULT_FAQ = { q: 'New question?', a: 'Answer to the question.' };

export function Edit( { attributes, setAttributes } ) {
	const { sectionLabel, headline, subtext, phone, email, faqs } = attributes;

	const updateFaq = ( index, field, value ) => {
		const updated = [ ...( faqs || [] ) ];
		updated[ index ] = { ...updated[ index ], [ field ]: value };
		setAttributes( { faqs: updated } );
	};

	const addFaq = () =>
		setAttributes( { faqs: [ ...( faqs || [] ), { ...DEFAULT_FAQ } ] } );

	const removeFaq = ( index ) =>
		setAttributes( { faqs: ( faqs || [] ).filter( ( _, i ) => i !== index ) } );

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

				<PanelBody title={ `FAQ Items (${ ( faqs || [] ).length })` } initialOpen={ false }>
					{ ( faqs || [] ).map( ( faq, index ) => (
						<div
							key={ index }
							style={ { borderBottom: '1px solid #e0e0e0', paddingBottom: 16, marginBottom: 16 } }
						>
							<strong style={ { display: 'block', marginBottom: 8, fontSize: 12 } }>
								Q{ index + 1 }
							</strong>
							<TextareaControl
								label="Question"
								value={ faq.q }
								onChange={ ( val ) => updateFaq( index, 'q', val ) }
								rows={ 2 }
							/>
							<TextareaControl
								label="Answer"
								value={ faq.a }
								onChange={ ( val ) => updateFaq( index, 'a', val ) }
								rows={ 4 }
							/>
							<Button isDestructive isSmall onClick={ () => removeFaq( index ) }>
								Remove
							</Button>
						</div>
					) ) }
					<Button isPrimary isSmall onClick={ addFaq }>
						+ Add FAQ
					</Button>
				</PanelBody>
			</InspectorControls>

			<div { ...useBlockProps( { style: { background: '#fff', padding: 24, borderRadius: 8, border: '1px solid #E2E8F0' } } ) }>
				<div style={ { display: 'grid', gridTemplateColumns: '2fr 3fr', gap: 32 } }>
					<div>
						<span style={ { background: '#1E7A45', color: '#fff', borderRadius: 99, padding: '3px 12px', fontSize: 11, fontWeight: 700 } }>
							{ sectionLabel }
						</span>
						<h2 style={ { fontSize: 22, fontWeight: 800, color: '#0B2545', margin: '10px 0 8px' } }>
							{ headline }
						</h2>
						<p style={ { color: '#4A5568', fontSize: 13, marginBottom: 16 } }>{ subtext }</p>
						<div style={ { background: '#F7F9F8', borderRadius: 12, padding: 16, border: '1px solid #E2E8F0' } }>
							<p style={ { color: '#1E7A45', fontSize: 12, fontWeight: 600, margin: '0 0 4px' } }>📞 { phone }</p>
							<p style={ { color: '#1E7A45', fontSize: 12, fontWeight: 600, margin: 0 } }>✉️ { email }</p>
						</div>
					</div>
					<div style={ { display: 'flex', flexDirection: 'column', gap: 8 } }>
						{ ( faqs || [] ).map( ( faq, i ) => (
							<div
								key={ i }
								style={ { border: '1px solid #E2E8F0', borderRadius: 12, overflow: 'hidden' } }
							>
								<div style={ { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', background: i === 0 ? '#F0FBF5' : '#fff' } }>
									<span style={ { fontSize: 13, fontWeight: 600, color: i === 0 ? '#1E7A45' : '#0B2545' } }>
										{ faq.q }
									</span>
									<div style={ { width: 24, height: 24, borderRadius: '50%', background: i === 0 ? '#1E7A45' : '#E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 } }>
										<span style={ { color: i === 0 ? '#fff' : '#718096', fontSize: 14, lineHeight: 1 } }>
											{ i === 0 ? '−' : '+' }
										</span>
									</div>
								</div>
								{ i === 0 && (
									<div style={ { padding: '0 16px 12px', background: '#F0FBF5', fontSize: 12, color: '#4A5568' } }>
										{ faq.a }
									</div>
								) }
							</div>
						) ) }
					</div>
				</div>
				<p style={ { color: '#aaa', fontSize: 11, marginTop: 12 } }>
					FAQ Accordion — edit questions in the sidebar → ({ ( faqs || [] ).length } items)
				</p>
			</div>
		</>
	);
}
