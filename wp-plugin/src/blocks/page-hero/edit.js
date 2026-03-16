import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	TextareaControl,
	Button,
} from '@wordpress/components';

const DEFAULT_BADGE = { icon: 'CheckCircle', text: 'New badge' };

export function Edit( { attributes, setAttributes } ) {
	const { sectionLabel, headline, headlineGradient, subtext, imageUrl, badges } = attributes;

	const updateBadge = ( index, field, value ) => {
		const updated = [ ...( badges || [] ) ];
		updated[ index ] = { ...updated[ index ], [ field ]: value };
		setAttributes( { badges: updated } );
	};

	const addBadge = () =>
		setAttributes( { badges: [ ...( badges || [] ), { ...DEFAULT_BADGE } ] } );

	const removeBadge = ( index ) =>
		setAttributes( { badges: ( badges || [] ).filter( ( _, i ) => i !== index ) } );

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
						label="Headline (use \n for line break)"
						value={ headline }
						onChange={ ( val ) => setAttributes( { headline: val } ) }
						rows={ 3 }
					/>
					<TextControl
						label="Gradient Phrase (part of headline)"
						value={ headlineGradient }
						onChange={ ( val ) => setAttributes( { headlineGradient: val } ) }
					/>
					<TextareaControl
						label="Subtext"
						value={ subtext }
						onChange={ ( val ) => setAttributes( { subtext: val } ) }
						rows={ 3 }
					/>
					<TextControl
						label="Background Image URL"
						value={ imageUrl }
						onChange={ ( val ) => setAttributes( { imageUrl: val } ) }
					/>
				</PanelBody>

				<PanelBody title={ `Badges (${ ( badges || [] ).length })` } initialOpen={ false }>
					{ ( badges || [] ).map( ( badge, index ) => (
						<div
							key={ index }
							style={ { borderBottom: '1px solid #e0e0e0', paddingBottom: 12, marginBottom: 12 } }
						>
							<TextControl
								label="Icon Name (Lucide)"
								value={ badge.icon }
								onChange={ ( val ) => updateBadge( index, 'icon', val ) }
							/>
							<TextControl
								label="Badge Text"
								value={ badge.text }
								onChange={ ( val ) => updateBadge( index, 'text', val ) }
							/>
							<Button isDestructive isSmall onClick={ () => removeBadge( index ) }>
								Remove
							</Button>
						</div>
					) ) }
					<Button isPrimary isSmall onClick={ addBadge }>+ Add Badge</Button>
				</PanelBody>
			</InspectorControls>

			<div { ...useBlockProps( { style: { background: '#0B2545', padding: 24, borderRadius: 8 } } ) }>
				<span style={ { background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)', borderRadius: 99, padding: '3px 12px', fontSize: 11, fontWeight: 700 } }>
					{ sectionLabel }
				</span>
				<h1 style={ { color: '#fff', fontSize: 28, fontWeight: 800, margin: '10px 0 8px', lineHeight: 1.15 } }>
					{ ( headline || '' ).split( '\n' ).map( ( line, i ) => (
						<span key={ i }>
							{ line }{ i < ( headline || '' ).split( '\n' ).length - 1 && <br /> }
						</span>
					) ) }
				</h1>
				<p style={ { color: 'rgba(255,255,255,0.65)', fontSize: 14, maxWidth: 500, marginBottom: 16 } }>{ subtext }</p>
				<div style={ { display: 'flex', flexWrap: 'wrap', gap: 8 } }>
					{ ( badges || [] ).map( ( badge, i ) => (
						<span
							key={ i }
							style={ { background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)', borderRadius: 99, padding: '4px 12px', fontSize: 12 } }
						>
							{ badge.icon } { badge.text }
						</span>
					) ) }
				</div>
				<p style={ { color: 'rgba(255,255,255,0.4)', fontSize: 11, marginTop: 12 } }>
					Page Hero — edit in sidebar →
				</p>
			</div>
		</>
	);
}
