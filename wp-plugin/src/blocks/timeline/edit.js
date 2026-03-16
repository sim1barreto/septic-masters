import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	TextareaControl,
	Button,
} from '@wordpress/components';

const DEFAULT_MILESTONE = { year: '2024', event: 'New milestone event.' };

export function Edit( { attributes, setAttributes } ) {
	const { sectionLabel, headline, milestones } = attributes;

	const updateMilestone = ( index, field, value ) => {
		const updated = [ ...( milestones || [] ) ];
		updated[ index ] = { ...updated[ index ], [ field ]: value };
		setAttributes( { milestones: updated } );
	};

	const addMilestone = () =>
		setAttributes( { milestones: [ ...( milestones || [] ), { ...DEFAULT_MILESTONE } ] } );

	const removeMilestone = ( index ) =>
		setAttributes( { milestones: ( milestones || [] ).filter( ( _, i ) => i !== index ) } );

	return (
		<>
			<InspectorControls>
				<PanelBody title="Section" initialOpen={ true }>
					<TextControl
						label="Section Label"
						value={ sectionLabel }
						onChange={ ( val ) => setAttributes( { sectionLabel: val } ) }
					/>
					<TextControl
						label="Headline"
						value={ headline }
						onChange={ ( val ) => setAttributes( { headline: val } ) }
					/>
				</PanelBody>

				<PanelBody title={ `Milestones (${ ( milestones || [] ).length })` } initialOpen={ false }>
					{ ( milestones || [] ).map( ( m, index ) => (
						<div
							key={ index }
							style={ { borderBottom: '1px solid #e0e0e0', paddingBottom: 12, marginBottom: 12 } }
						>
							<TextControl
								label="Year"
								value={ m.year }
								onChange={ ( val ) => updateMilestone( index, 'year', val ) }
							/>
							<TextareaControl
								label="Event Description"
								value={ m.event }
								onChange={ ( val ) => updateMilestone( index, 'event', val ) }
								rows={ 2 }
							/>
							<Button isDestructive isSmall onClick={ () => removeMilestone( index ) }>
								Remove
							</Button>
						</div>
					) ) }
					<Button isPrimary isSmall onClick={ addMilestone }>+ Add Milestone</Button>
				</PanelBody>
			</InspectorControls>

			<div { ...useBlockProps( { style: { background: 'linear-gradient(135deg, #0B2545, #0D2E1C)', padding: 24, borderRadius: 8 } } ) }>
				<div style={ { textAlign: 'center', marginBottom: 20 } }>
					<span style={ { background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)', borderRadius: 99, padding: '3px 12px', fontSize: 11, fontWeight: 700 } }>
						{ sectionLabel }
					</span>
					<h2 style={ { color: '#fff', fontSize: 18, fontWeight: 800, margin: '10px 0 0' } }>{ headline }</h2>
				</div>
				<div style={ { paddingLeft: 32, position: 'relative' } }>
					<div style={ { position: 'absolute', left: 8, top: 0, bottom: 0, width: 2, background: 'linear-gradient(to bottom, #25A55F, #1E7A45)' } } />
					{ ( milestones || [] ).map( ( m, i ) => (
						<div key={ i } style={ { marginBottom: 16, position: 'relative' } }>
							<div style={ { position: 'absolute', left: -28, top: 0, width: 12, height: 12, borderRadius: '50%', background: '#25A55F', border: '2px solid #0B2545' } } />
							<div style={ { color: '#25A55F', fontSize: 11, fontWeight: 700, marginBottom: 2 } }>{ m.year }</div>
							<div style={ { color: 'rgba(255,255,255,0.8)', fontSize: 12 } }>{ m.event }</div>
						</div>
					) ) }
				</div>
				<p style={ { color: 'rgba(255,255,255,0.4)', fontSize: 11, marginTop: 12 } }>
					Timeline — edit milestones in sidebar →
				</p>
			</div>
		</>
	);
}
