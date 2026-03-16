import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	TextareaControl,
	Button,
	RangeControl,
	SelectControl,
} from '@wordpress/components';

const COLOR_OPTIONS = [
	{ label: 'Green', value: '#25A55F' },
	{ label: 'Dark Green', value: '#1E7A45' },
	{ label: 'Teal', value: '#4FD4A4' },
	{ label: 'Yellow', value: '#F4C542' },
];

const DEFAULT_TESTIMONIAL = {
	name: 'New Customer',
	location: 'Austin, TX',
	rating: 5,
	date: '2026',
	text: 'Customer testimonial text here.',
	initials: 'NC',
	color: '#25A55F',
};

export function Edit( { attributes, setAttributes } ) {
	const { sectionLabel, sectionTitle, testimonials } = attributes;

	const updateTestimonial = ( index, field, value ) => {
		const updated = [ ...( testimonials || [] ) ];
		updated[ index ] = { ...updated[ index ], [ field ]: value };
		setAttributes( { testimonials: updated } );
	};

	const addTestimonial = () =>
		setAttributes( { testimonials: [ ...( testimonials || [] ), { ...DEFAULT_TESTIMONIAL } ] } );

	const removeTestimonial = ( index ) =>
		setAttributes( {
			testimonials: ( testimonials || [] ).filter( ( _, i ) => i !== index ),
		} );

	return (
		<>
			<InspectorControls>
				<PanelBody title="Section Header" initialOpen={ true }>
					<TextControl
						label="Section Label"
						value={ sectionLabel }
						onChange={ ( val ) => setAttributes( { sectionLabel: val } ) }
					/>
					<TextControl
						label="Section Title"
						value={ sectionTitle }
						onChange={ ( val ) => setAttributes( { sectionTitle: val } ) }
					/>
				</PanelBody>

				<PanelBody title={ `Testimonials (${ ( testimonials || [] ).length })` } initialOpen={ false }>
					{ ( testimonials || [] ).map( ( t, index ) => (
						<div
							key={ index }
							style={ { borderBottom: '1px solid #e0e0e0', paddingBottom: 16, marginBottom: 16 } }
						>
							<strong style={ { display: 'block', marginBottom: 8, fontSize: 12 } }>
								Review { index + 1 }: { t.name }
							</strong>
							<TextControl
								label="Name"
								value={ t.name }
								onChange={ ( val ) => updateTestimonial( index, 'name', val ) }
							/>
							<TextControl
								label="Initials (2 letters)"
								value={ t.initials }
								onChange={ ( val ) => updateTestimonial( index, 'initials', val.slice( 0, 2 ).toUpperCase() ) }
							/>
							<TextControl
								label="Location"
								value={ t.location }
								onChange={ ( val ) => updateTestimonial( index, 'location', val ) }
							/>
							<TextControl
								label="Date"
								value={ t.date }
								onChange={ ( val ) => updateTestimonial( index, 'date', val ) }
							/>
							<RangeControl
								label="Rating (stars)"
								value={ t.rating }
								onChange={ ( val ) => updateTestimonial( index, 'rating', val ) }
								min={ 1 }
								max={ 5 }
							/>
							<TextareaControl
								label="Review Text"
								value={ t.text }
								onChange={ ( val ) => updateTestimonial( index, 'text', val ) }
								rows={ 4 }
							/>
							<SelectControl
								label="Avatar Color"
								value={ t.color }
								options={ COLOR_OPTIONS }
								onChange={ ( val ) => updateTestimonial( index, 'color', val ) }
							/>
							<Button isDestructive isSmall onClick={ () => removeTestimonial( index ) }>
								Remove
							</Button>
						</div>
					) ) }
					<Button isPrimary isSmall onClick={ addTestimonial }>
						+ Add Testimonial
					</Button>
				</PanelBody>
			</InspectorControls>

			<div { ...useBlockProps( { style: { background: '#F7F9F8', padding: 24, borderRadius: 8 } } ) }>
				<span style={ { background: '#1E7A45', color: '#fff', borderRadius: 99, padding: '3px 12px', fontSize: 12, fontWeight: 700 } }>
					{ sectionLabel }
				</span>
				<h2 style={ { fontSize: 24, fontWeight: 800, color: '#0B2545', margin: '12px 0 20px' } }>
					{ sectionTitle }
				</h2>
				<div style={ { display: 'flex', gap: 16, overflowX: 'hidden' } }>
					{ ( testimonials || [] ).slice( 0, 3 ).map( ( t, i ) => (
						<div
							key={ i }
							style={ {
								flex: '0 0 calc(33% - 8px)',
								background: '#fff',
								border: '1px solid #E2E8F0',
								borderRadius: 16,
								padding: 20,
							} }
						>
							<div style={ { display: 'flex', gap: 2, marginBottom: 12 } }>
								{ [ ...Array( t.rating ) ].map( ( _, j ) => (
									<span key={ j } style={ { color: '#FBBF24', fontSize: 14 } }>★</span>
								) ) }
							</div>
							<p style={ { fontSize: 12, color: '#4A5568', margin: '0 0 12px', fontStyle: 'italic' } }>
								"{ t.text.slice( 0, 100 ) }…"
							</p>
							<div style={ { display: 'flex', alignItems: 'center', gap: 10 } }>
								<div style={ { width: 36, height: 36, borderRadius: '50%', background: t.color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700 } }>
									{ t.initials }
								</div>
								<div>
									<strong style={ { fontSize: 12, color: '#0B2545' } }>{ t.name }</strong>
									<p style={ { fontSize: 11, color: '#718096', margin: 0 } }>{ t.location } · { t.date }</p>
								</div>
							</div>
						</div>
					) ) }
				</div>
				<p style={ { color: '#aaa', fontSize: 11, marginTop: 12 } }>
					Testimonials Carousel — edit reviews in the sidebar → ({ ( testimonials || [] ).length } total)
				</p>
			</div>
		</>
	);
}
