import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	Button,
} from '@wordpress/components';

const DEFAULT_ITEM = { iconName: 'Phone', title: 'New Item', line1: 'Detail 1', line2: 'Detail 2', href: '', color: '#25A55F' };

export function Edit( { attributes, setAttributes } ) {
	const { items } = attributes;

	const updateItem = ( index, field, value ) => {
		const updated = [ ...( items || [] ) ];
		updated[ index ] = { ...updated[ index ], [ field ]: value };
		setAttributes( { items: updated } );
	};

	const addItem = () =>
		setAttributes( { items: [ ...( items || [] ), { ...DEFAULT_ITEM } ] } );

	const removeItem = ( index ) =>
		setAttributes( { items: ( items || [] ).filter( ( _, i ) => i !== index ) } );

	return (
		<>
			<InspectorControls>
				<PanelBody title={ `Contact Info Items (${ ( items || [] ).length })` } initialOpen={ true }>
					{ ( items || [] ).map( ( item, index ) => (
						<div
							key={ index }
							style={ { borderBottom: '1px solid #e0e0e0', paddingBottom: 12, marginBottom: 12 } }
						>
							<strong style={ { display: 'block', marginBottom: 6, fontSize: 12 } }>
								Item { index + 1 }
							</strong>
							<TextControl
								label="Icon Name (Lucide)"
								value={ item.iconName }
								onChange={ ( val ) => updateItem( index, 'iconName', val ) }
							/>
							<TextControl
								label="Title"
								value={ item.title }
								onChange={ ( val ) => updateItem( index, 'title', val ) }
							/>
							<TextControl
								label="Line 1 (main detail)"
								value={ item.line1 }
								onChange={ ( val ) => updateItem( index, 'line1', val ) }
							/>
							<TextControl
								label="Line 2 (secondary detail)"
								value={ item.line2 }
								onChange={ ( val ) => updateItem( index, 'line2', val ) }
							/>
							<TextControl
								label="Link href (optional)"
								value={ item.href }
								onChange={ ( val ) => updateItem( index, 'href', val ) }
							/>
							<TextControl
								label="Color (hex)"
								value={ item.color }
								onChange={ ( val ) => updateItem( index, 'color', val ) }
							/>
							<Button isDestructive isSmall onClick={ () => removeItem( index ) }>
								Remove
							</Button>
						</div>
					) ) }
					<Button isPrimary isSmall onClick={ addItem }>+ Add Item</Button>
				</PanelBody>
			</InspectorControls>

			<div { ...useBlockProps( { style: { background: '#fff', padding: 24, borderRadius: 8, border: '1px solid #E2E8F0' } } ) }>
				<div style={ { display: 'grid', gridTemplateColumns: `repeat(${ Math.min( ( items || [] ).length, 4 ) }, 1fr)`, gap: 16 } }>
					{ ( items || [] ).map( ( item, i ) => (
						<div key={ i } style={ { display: 'flex', gap: 10, alignItems: 'flex-start' } }>
							<div style={ { width: 36, height: 36, borderRadius: 8, background: `${ item.color }15`, border: `1px solid ${ item.color }30`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 } }>
								<span style={ { color: item.color, fontSize: 14 } }>{ item.iconName[ 0 ] }</span>
							</div>
							<div>
								<div style={ { color: '#718096', fontSize: 9, textTransform: 'uppercase', letterSpacing: 1, fontWeight: 600, marginBottom: 2 } }>{ item.title }</div>
								<div style={ { color: '#0B2545', fontSize: 12, fontWeight: 700 } }>{ item.line1 }</div>
								<div style={ { color: '#A0AEC0', fontSize: 10 } }>{ item.line2 }</div>
							</div>
						</div>
					) ) }
				</div>
				<p style={ { color: '#aaa', fontSize: 11, marginTop: 12 } }>
					Contact Info Bar — { ( items || [] ).length } items, edit in sidebar →
				</p>
			</div>
		</>
	);
}
