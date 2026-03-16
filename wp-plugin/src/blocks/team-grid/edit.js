import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	Button,
} from '@wordpress/components';

const DEFAULT_MEMBER = { name: 'New Member', role: 'Technician', experience: '5 years', initials: 'NM', color: '#25A55F' };

export function Edit( { attributes, setAttributes } ) {
	const { sectionLabel, headline, members } = attributes;

	const updateMember = ( index, field, value ) => {
		const updated = [ ...( members || [] ) ];
		updated[ index ] = { ...updated[ index ], [ field ]: value };
		setAttributes( { members: updated } );
	};

	const addMember = () =>
		setAttributes( { members: [ ...( members || [] ), { ...DEFAULT_MEMBER } ] } );

	const removeMember = ( index ) =>
		setAttributes( { members: ( members || [] ).filter( ( _, i ) => i !== index ) } );

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

				<PanelBody title={ `Team Members (${ ( members || [] ).length })` } initialOpen={ false }>
					{ ( members || [] ).map( ( member, index ) => (
						<div
							key={ index }
							style={ { borderBottom: '1px solid #e0e0e0', paddingBottom: 12, marginBottom: 12 } }
						>
							<strong style={ { display: 'block', marginBottom: 8, fontSize: 12 } }>
								Member { index + 1 }
							</strong>
							<TextControl
								label="Name"
								value={ member.name }
								onChange={ ( val ) => updateMember( index, 'name', val ) }
							/>
							<TextControl
								label="Role"
								value={ member.role }
								onChange={ ( val ) => updateMember( index, 'role', val ) }
							/>
							<TextControl
								label="Experience"
								value={ member.experience }
								onChange={ ( val ) => updateMember( index, 'experience', val ) }
							/>
							<TextControl
								label="Initials (2 chars)"
								value={ member.initials }
								onChange={ ( val ) => updateMember( index, 'initials', val ) }
							/>
							<TextControl
								label="Color (hex)"
								value={ member.color }
								onChange={ ( val ) => updateMember( index, 'color', val ) }
							/>
							<Button isDestructive isSmall onClick={ () => removeMember( index ) }>
								Remove
							</Button>
						</div>
					) ) }
					<Button isPrimary isSmall onClick={ addMember }>+ Add Member</Button>
				</PanelBody>
			</InspectorControls>

			<div { ...useBlockProps( { style: { background: '#fff', padding: 24, borderRadius: 8, border: '1px solid #E2E8F0' } } ) }>
				<div style={ { textAlign: 'center', marginBottom: 20 } }>
					<span style={ { background: 'rgba(30,122,69,0.1)', color: '#1E7A45', borderRadius: 99, padding: '3px 12px', fontSize: 11, fontWeight: 700 } }>
						{ sectionLabel }
					</span>
					<h2 style={ { fontSize: 18, fontWeight: 800, color: '#0B2545', margin: '10px 0 0' } }>{ headline }</h2>
				</div>
				<div style={ { display: 'grid', gridTemplateColumns: `repeat(${ Math.min( ( members || [] ).length, 4 ) }, 1fr)`, gap: 12 } }>
					{ ( members || [] ).map( ( member, i ) => (
						<div
							key={ i }
							style={ { background: '#F7F9F8', border: '1px solid #E2E8F0', borderRadius: 12, padding: 16, textAlign: 'center' } }
						>
							<div style={ { width: 48, height: 48, borderRadius: 10, background: `linear-gradient(135deg, ${ member.color }, ${ member.color }99)`, color: '#fff', fontWeight: 800, fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px' } }>
								{ member.initials }
							</div>
							<strong style={ { color: '#0B2545', fontSize: 12, display: 'block' } }>{ member.name }</strong>
							<div style={ { color: '#718096', fontSize: 11, marginTop: 2 } }>{ member.role }</div>
							<div style={ { color: member.color, fontSize: 10, fontWeight: 600, marginTop: 4 } }>{ member.experience }</div>
						</div>
					) ) }
				</div>
				<p style={ { color: '#aaa', fontSize: 11, marginTop: 12, textAlign: 'center' } }>
					Team Grid — edit members in sidebar →
				</p>
			</div>
		</>
	);
}
