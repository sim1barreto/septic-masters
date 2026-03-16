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
];

const ICON_OPTIONS = [
	{ label: 'Phone', value: 'Phone' },
	{ label: 'ClipboardCheck', value: 'ClipboardCheck' },
	{ label: 'Settings', value: 'Settings' },
	{ label: 'ThumbsUp', value: 'ThumbsUp' },
];

const DEFAULT_STEP = {
	iconName: 'Phone',
	step: '05',
	title: 'New Step',
	description: 'Step description.',
	color: '#25A55F',
};

export function Edit( { attributes, setAttributes } ) {
	const { sectionLabel, headline, subtext, phone, steps } = attributes;

	const updateStep = ( index, field, value ) => {
		const updated = [ ...( steps || [] ) ];
		updated[ index ] = { ...updated[ index ], [ field ]: value };
		setAttributes( { steps: updated } );
	};

	const addStep = () =>
		setAttributes( { steps: [ ...( steps || [] ), { ...DEFAULT_STEP } ] } );

	const removeStep = ( index ) =>
		setAttributes( { steps: ( steps || [] ).filter( ( _, i ) => i !== index ) } );

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
						label="Phone Number"
						value={ phone }
						onChange={ ( val ) => setAttributes( { phone: val } ) }
					/>
				</PanelBody>

				<PanelBody title={ `Steps (${ ( steps || [] ).length })` } initialOpen={ false }>
					{ ( steps || [] ).map( ( step, index ) => (
						<div
							key={ index }
							style={ { borderBottom: '1px solid #e0e0e0', paddingBottom: 16, marginBottom: 16 } }
						>
							<strong style={ { display: 'block', marginBottom: 8, fontSize: 12 } }>
								Step { index + 1 }: { step.title }
							</strong>
							<SelectControl
								label="Icon"
								value={ step.iconName }
								options={ ICON_OPTIONS }
								onChange={ ( val ) => updateStep( index, 'iconName', val ) }
							/>
							<TextControl
								label="Step Number Label"
								value={ step.step }
								onChange={ ( val ) => updateStep( index, 'step', val ) }
							/>
							<TextControl
								label="Title"
								value={ step.title }
								onChange={ ( val ) => updateStep( index, 'title', val ) }
							/>
							<TextareaControl
								label="Description"
								value={ step.description }
								onChange={ ( val ) => updateStep( index, 'description', val ) }
								rows={ 3 }
							/>
							<SelectControl
								label="Color"
								value={ step.color }
								options={ COLOR_OPTIONS }
								onChange={ ( val ) => updateStep( index, 'color', val ) }
							/>
							<Button isDestructive isSmall onClick={ () => removeStep( index ) }>
								Remove
							</Button>
						</div>
					) ) }
					<Button isPrimary isSmall onClick={ addStep }>
						+ Add Step
					</Button>
				</PanelBody>
			</InspectorControls>

			<div
				{ ...useBlockProps( {
					style: {
						background: 'linear-gradient(135deg, #0B2545 0%, #0D2E1C 100%)',
						padding: 24,
						borderRadius: 8,
					},
				} ) }
			>
				<span style={ { background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.7)', borderRadius: 99, padding: '3px 12px', fontSize: 12, fontWeight: 700 } }>
					{ sectionLabel }
				</span>
				<h2 style={ { fontSize: 24, fontWeight: 800, color: '#fff', margin: '12px 0 8px' } }>
					{ headline }
				</h2>
				<p style={ { color: 'rgba(255,255,255,0.6)', marginBottom: 24 } }>{ subtext }</p>
				<div style={ { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 } }>
					{ ( steps || [] ).map( ( step, i ) => (
						<div key={ i } style={ { textAlign: 'center' } }>
							<div style={ { width: 64, height: 64, borderRadius: '50%', background: `${ step.color }25`, border: `2px solid ${ step.color }50`, margin: '0 auto 12px', display: 'flex', alignItems: 'center', justifyContent: 'center' } }>
								<span style={ { color: step.color, fontSize: 20, fontWeight: 700 } }>{ i + 1 }</span>
							</div>
							<strong style={ { color: '#fff', fontSize: 13, display: 'block', marginBottom: 6 } }>
								{ step.title }
							</strong>
							<p style={ { color: 'rgba(255,255,255,0.5)', fontSize: 11, margin: 0 } }>
								{ step.description.slice( 0, 60 ) }…
							</p>
						</div>
					) ) }
				</div>
				<p style={ { color: 'rgba(255,255,255,0.3)', fontSize: 11, marginTop: 16 } }>
					How It Works — edit in the sidebar →
				</p>
			</div>
		</>
	);
}
