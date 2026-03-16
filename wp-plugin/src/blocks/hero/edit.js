import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	TextControl,
	TextareaControl,
	Button,
} from '@wordpress/components';

export function Edit( { attributes, setAttributes } ) {
	const {
		badgeText,
		headline,
		subheadline,
		phone,
		ctaText,
		ctaUrl,
		heroImageUrl,
		trustPoints,
		stats,
	} = attributes;

	const updateTrustPoint = ( index, value ) => {
		const updated = [ ...( trustPoints || [] ) ];
		updated[ index ] = value;
		setAttributes( { trustPoints: updated } );
	};

	const addTrustPoint = () =>
		setAttributes( { trustPoints: [ ...( trustPoints || [] ), 'New Trust Point' ] } );

	const removeTrustPoint = ( index ) =>
		setAttributes( { trustPoints: ( trustPoints || [] ).filter( ( _, i ) => i !== index ) } );

	const updateStat = ( index, field, value ) => {
		const updated = [ ...( stats || [] ) ];
		updated[ index ] = { ...updated[ index ], [ field ]: value };
		setAttributes( { stats: updated } );
	};

	const addStat = () =>
		setAttributes( { stats: [ ...( stats || [] ), { label: 'New Stat', value: '0+' } ] } );

	const removeStat = ( index ) =>
		setAttributes( { stats: ( stats || [] ).filter( ( _, i ) => i !== index ) } );

	return (
		<>
			<InspectorControls>
				<PanelBody title="Hero Content" initialOpen={ true }>
					<TextControl
						label="Badge Text"
						value={ badgeText }
						onChange={ ( val ) => setAttributes( { badgeText: val } ) }
					/>
					<TextareaControl
						label="Headline"
						value={ headline }
						onChange={ ( val ) => setAttributes( { headline: val } ) }
						rows={ 2 }
					/>
					<TextareaControl
						label="Sub-headline"
						value={ subheadline }
						onChange={ ( val ) => setAttributes( { subheadline: val } ) }
						rows={ 3 }
					/>
				</PanelBody>

				<PanelBody title="Call to Action" initialOpen={ false }>
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

				<PanelBody title="Hero Image" initialOpen={ false }>
					<TextControl
						label="Image URL"
						value={ heroImageUrl }
						onChange={ ( val ) => setAttributes( { heroImageUrl: val } ) }
					/>
				</PanelBody>

				<PanelBody title="Trust Points" initialOpen={ false }>
					{ ( trustPoints || [] ).map( ( point, index ) => (
						<PanelRow key={ index } style={ { flexDirection: 'column', alignItems: 'stretch' } }>
							<TextControl
								label={ `Point ${ index + 1 }` }
								value={ point }
								onChange={ ( val ) => updateTrustPoint( index, val ) }
							/>
							<Button
								isDestructive
								isSmall
								onClick={ () => removeTrustPoint( index ) }
								style={ { marginTop: '-8px', marginBottom: '8px' } }
							>
								Remove
							</Button>
						</PanelRow>
					) ) }
					<Button isPrimary isSmall onClick={ addTrustPoint }>
						+ Add Trust Point
					</Button>
				</PanelBody>

				<PanelBody title="Floating Stats" initialOpen={ false }>
					{ ( stats || [] ).map( ( stat, index ) => (
						<div key={ index } style={ { borderBottom: '1px solid #ddd', paddingBottom: 12, marginBottom: 12 } }>
							<TextControl
								label={ `Stat ${ index + 1 } — Label` }
								value={ stat.label }
								onChange={ ( val ) => updateStat( index, 'label', val ) }
							/>
							<TextControl
								label={ `Stat ${ index + 1 } — Value` }
								value={ stat.value }
								onChange={ ( val ) => updateStat( index, 'value', val ) }
							/>
							<Button isDestructive isSmall onClick={ () => removeStat( index ) }>
								Remove
							</Button>
						</div>
					) ) }
					<Button isPrimary isSmall onClick={ addStat }>
						+ Add Stat
					</Button>
				</PanelBody>
			</InspectorControls>

			<div { ...useBlockProps( { style: { background: '#0B2545', padding: '24px', borderRadius: '8px' } } ) }>
				<div style={ { display: 'inline-block', background: '#BE2026', borderRadius: '99px', padding: '4px 12px', marginBottom: 12 } }>
					<span style={ { color: '#fca5a5', fontSize: 12, fontWeight: 700 } }>{ badgeText }</span>
				</div>
				<h1 style={ { color: '#fff', fontSize: 32, fontWeight: 800, margin: '0 0 12px', lineHeight: 1.2 } }>
					{ headline }
				</h1>
				<p style={ { color: 'rgba(255,255,255,0.7)', fontSize: 15, margin: '0 0 20px' } }>
					{ subheadline }
				</p>
				<div style={ { display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 20 } }>
					{ ( trustPoints || [] ).map( ( p, i ) => (
						<span key={ i } style={ { color: 'rgba(255,255,255,0.85)', fontSize: 13, display: 'flex', alignItems: 'center', gap: 6 } }>
							✅ { p }
						</span>
					) ) }
				</div>
				<div style={ { display: 'flex', gap: 12 } }>
					<span style={ { background: '#BE2026', color: '#fff', padding: '10px 20px', borderRadius: 12, fontWeight: 700, fontSize: 14 } }>
						📞 Call Now: { phone }
					</span>
					<span style={ { background: 'rgba(255,255,255,0.15)', color: '#fff', padding: '10px 20px', borderRadius: 12, fontWeight: 700, fontSize: 14 } }>
						{ ctaText } →
					</span>
				</div>
				<p style={ { color: 'rgba(255,255,255,0.3)', fontSize: 11, marginTop: 12 } }>
					Hero Section — edit content in the sidebar →
				</p>
			</div>
		</>
	);
}
