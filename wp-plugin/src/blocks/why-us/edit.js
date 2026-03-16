import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	TextareaControl,
	Button,
	SelectControl,
} from '@wordpress/components';

const COLOR_OPTIONS = [
	{ label: 'Green', value: '#25A55F' },
	{ label: 'Dark Green', value: '#1E7A45' },
	{ label: 'Teal', value: '#4FD4A4' },
	{ label: 'Yellow', value: '#F4C542' },
];

const ICON_OPTIONS = [
	{ label: 'Clock', value: 'Clock' },
	{ label: 'Shield', value: 'Shield' },
	{ label: 'Award', value: 'Award' },
	{ label: 'DollarSign', value: 'DollarSign' },
	{ label: 'Users', value: 'Users' },
	{ label: 'Leaf', value: 'Leaf' },
];

const DEFAULT_ADVANTAGE = {
	iconName: 'Shield',
	title: 'New Advantage',
	description: 'Describe this advantage.',
	color: '#25A55F',
};

export function Edit( { attributes, setAttributes } ) {
	const { sectionLabel, headline, subtext, techImageUrl, advantages } = attributes;

	const updateAdvantage = ( index, field, value ) => {
		const updated = [ ...( advantages || [] ) ];
		updated[ index ] = { ...updated[ index ], [ field ]: value };
		setAttributes( { advantages: updated } );
	};

	const addAdvantage = () =>
		setAttributes( { advantages: [ ...( advantages || [] ), { ...DEFAULT_ADVANTAGE } ] } );

	const removeAdvantage = ( index ) =>
		setAttributes( {
			advantages: ( advantages || [] ).filter( ( _, i ) => i !== index ),
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
					<TextControl
						label="Tech Image URL"
						value={ techImageUrl }
						onChange={ ( val ) => setAttributes( { techImageUrl: val } ) }
					/>
				</PanelBody>

				<PanelBody title={ `Advantages (${ ( advantages || [] ).length })` } initialOpen={ false }>
					{ ( advantages || [] ).map( ( adv, index ) => (
						<div
							key={ index }
							style={ { borderBottom: '1px solid #e0e0e0', paddingBottom: 16, marginBottom: 16 } }
						>
							<strong style={ { display: 'block', marginBottom: 8, fontSize: 12 } }>
								{ index + 1 }. { adv.title }
							</strong>
							<SelectControl
								label="Icon"
								value={ adv.iconName }
								options={ ICON_OPTIONS }
								onChange={ ( val ) => updateAdvantage( index, 'iconName', val ) }
							/>
							<TextControl
								label="Title"
								value={ adv.title }
								onChange={ ( val ) => updateAdvantage( index, 'title', val ) }
							/>
							<TextareaControl
								label="Description"
								value={ adv.description }
								onChange={ ( val ) => updateAdvantage( index, 'description', val ) }
								rows={ 2 }
							/>
							<SelectControl
								label="Color"
								value={ adv.color }
								options={ COLOR_OPTIONS }
								onChange={ ( val ) => updateAdvantage( index, 'color', val ) }
							/>
							<Button isDestructive isSmall onClick={ () => removeAdvantage( index ) }>
								Remove
							</Button>
						</div>
					) ) }
					<Button isPrimary isSmall onClick={ addAdvantage }>
						+ Add Advantage
					</Button>
				</PanelBody>
			</InspectorControls>

			<div { ...useBlockProps( { style: { background: '#fff', padding: 24, borderRadius: 8, border: '1px solid #E2E8F0' } } ) }>
				<div style={ { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 } }>
					<div style={ { background: '#F7F9F8', borderRadius: 16, minHeight: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' } }>
						{ techImageUrl && (
							<img src={ techImageUrl } alt="" style={ { width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', borderRadius: 16 } } />
						) }
						<span style={ { position: 'relative', color: '#fff', fontWeight: 700, textShadow: '0 2px 8px rgba(0,0,0,0.5)' } }>Tech Image</span>
					</div>
					<div>
						<span style={ { background: '#1E7A45', color: '#fff', borderRadius: 99, padding: '3px 12px', fontSize: 11, fontWeight: 700 } }>
							{ sectionLabel }
						</span>
						<h2 style={ { fontSize: 22, fontWeight: 800, color: '#0B2545', margin: '10px 0 8px' } }>
							{ headline }
						</h2>
						<p style={ { fontSize: 13, color: '#4A5568', marginBottom: 16 } }>{ subtext }</p>
						<div style={ { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 } }>
							{ ( advantages || [] ).slice( 0, 6 ).map( ( adv, i ) => (
								<div key={ i } style={ { display: 'flex', gap: 8, alignItems: 'flex-start' } }>
									<div style={ { width: 28, height: 28, borderRadius: 6, background: `${ adv.color }20`, flexShrink: 0 } } />
									<div>
										<strong style={ { fontSize: 11, color: '#0B2545', display: 'block' } }>{ adv.title }</strong>
										<p style={ { fontSize: 10, color: '#718096', margin: 0 } }>{ adv.description.slice( 0, 50 ) }…</p>
									</div>
								</div>
							) ) }
						</div>
					</div>
				</div>
				<p style={ { color: '#aaa', fontSize: 11, marginTop: 12 } }>
					Why Choose Us — edit in the sidebar →
				</p>
			</div>
		</>
	);
}
