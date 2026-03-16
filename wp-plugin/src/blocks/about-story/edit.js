import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	TextareaControl,
	Button,
} from '@wordpress/components';

export function Edit( { attributes, setAttributes } ) {
	const { sectionLabel, headline, paragraphs, ctaText, ctaUrl, imageUrl, stats } = attributes;

	const updateParagraph = ( index, value ) => {
		const updated = [ ...( paragraphs || [] ) ];
		updated[ index ] = value;
		setAttributes( { paragraphs: updated } );
	};

	const addParagraph = () =>
		setAttributes( { paragraphs: [ ...( paragraphs || [] ), 'New paragraph.' ] } );

	const removeParagraph = ( index ) =>
		setAttributes( { paragraphs: ( paragraphs || [] ).filter( ( _, i ) => i !== index ) } );

	const updateStat = ( index, field, value ) => {
		const updated = [ ...( stats || [] ) ];
		updated[ index ] = { ...updated[ index ], [ field ]: value };
		setAttributes( { stats: updated } );
	};

	const addStat = () =>
		setAttributes( { stats: [ ...( stats || [] ), { value: '0+', label: 'New stat' } ] } );

	const removeStat = ( index ) =>
		setAttributes( { stats: ( stats || [] ).filter( ( _, i ) => i !== index ) } );

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

				<PanelBody title={ `Paragraphs (${ ( paragraphs || [] ).length })` } initialOpen={ false }>
					{ ( paragraphs || [] ).map( ( para, index ) => (
						<div key={ index } style={ { marginBottom: 12 } }>
							<TextareaControl
								label={ `Paragraph ${ index + 1 }` }
								value={ para }
								onChange={ ( val ) => updateParagraph( index, val ) }
								rows={ 4 }
							/>
							<Button isDestructive isSmall onClick={ () => removeParagraph( index ) }>
								Remove
							</Button>
						</div>
					) ) }
					<Button isPrimary isSmall onClick={ addParagraph }>+ Add Paragraph</Button>
				</PanelBody>

				<PanelBody title={ `Stats (${ ( stats || [] ).length })` } initialOpen={ false }>
					{ ( stats || [] ).map( ( stat, index ) => (
						<div key={ index } style={ { borderBottom: '1px solid #e0e0e0', paddingBottom: 12, marginBottom: 12 } }>
							<TextControl
								label="Value"
								value={ stat.value }
								onChange={ ( val ) => updateStat( index, 'value', val ) }
							/>
							<TextControl
								label="Label"
								value={ stat.label }
								onChange={ ( val ) => updateStat( index, 'label', val ) }
							/>
							<Button isDestructive isSmall onClick={ () => removeStat( index ) }>
								Remove
							</Button>
						</div>
					) ) }
					<Button isPrimary isSmall onClick={ addStat }>+ Add Stat</Button>
				</PanelBody>
			</InspectorControls>

			<div { ...useBlockProps( { style: { background: '#fff', padding: 24, borderRadius: 8, border: '1px solid #E2E8F0' } } ) }>
				<div style={ { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 } }>
					<div>
						<span style={ { background: 'rgba(30,122,69,0.1)', color: '#1E7A45', borderRadius: 99, padding: '3px 12px', fontSize: 11, fontWeight: 700 } }>
							{ sectionLabel }
						</span>
						<h2 style={ { fontSize: 18, fontWeight: 800, color: '#0B2545', margin: '10px 0 12px' } }>{ headline }</h2>
						{ ( paragraphs || [] ).map( ( p, i ) => (
							<p key={ i } style={ { color: '#4A5568', fontSize: 12, marginBottom: 8, lineHeight: 1.6 } }>{ p }</p>
						) ) }
						<span style={ { display: 'inline-block', background: '#0B2545', color: '#fff', borderRadius: 8, padding: '8px 16px', fontSize: 12, fontWeight: 700, marginTop: 12 } }>
							{ ctaText } →
						</span>
					</div>
					<div style={ { background: '#F7F9F8', borderRadius: 12, height: 200, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 16, gap: 8 } }>
						<div style={ { display: 'flex', gap: 8 } }>
							{ ( stats || [] ).map( ( stat, i ) => (
								<div key={ i } style={ { flex: 1, background: 'rgba(255,255,255,0.1)', borderRadius: 8, padding: 10, textAlign: 'center' } }>
									<div style={ { color: '#fff', fontWeight: 800, fontSize: 16 } }>{ stat.value }</div>
									<div style={ { color: 'rgba(255,255,255,0.7)', fontSize: 10 } }>{ stat.label }</div>
								</div>
							) ) }
						</div>
					</div>
				</div>
				<p style={ { color: '#aaa', fontSize: 11, marginTop: 12 } }>
					About Story — edit in sidebar →
				</p>
			</div>
		</>
	);
}
