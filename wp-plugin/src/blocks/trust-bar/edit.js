import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	Button,
	SelectControl,
	ToggleControl,
} from '@wordpress/components';

const COLOR_OPTIONS = [
	{ label: 'Green', value: '#25A55F' },
	{ label: 'Teal', value: '#4FD4A4' },
	{ label: 'Yellow', value: '#F4C542' },
	{ label: 'Red', value: '#BE2026' },
];

const ICON_OPTIONS = [
	{ label: 'Clock', value: 'Clock' },
	{ label: 'ThumbsUp', value: 'ThumbsUp' },
	{ label: 'Star', value: 'Star' },
	{ label: 'Shield', value: 'Shield' },
	{ label: 'Award', value: 'Award' },
];

const DEFAULT_STAT = { iconName: 'Shield', value: 10, suffix: '+', label: 'New Stat', color: '#25A55F', decimal: false };

export function Edit( { attributes, setAttributes } ) {
	const { stats } = attributes;

	const updateStat = ( index, field, value ) => {
		const updated = [ ...( stats || [] ) ];
		updated[ index ] = { ...updated[ index ], [ field ]: value };
		setAttributes( { stats: updated } );
	};

	const addStat = () =>
		setAttributes( { stats: [ ...( stats || [] ), { ...DEFAULT_STAT } ] } );

	const removeStat = ( index ) =>
		setAttributes( { stats: ( stats || [] ).filter( ( _, i ) => i !== index ) } );

	return (
		<>
			<InspectorControls>
				<PanelBody title={ `Stats (${ ( stats || [] ).length })` } initialOpen={ true }>
					{ ( stats || [] ).map( ( stat, index ) => (
						<div
							key={ index }
							style={ { borderBottom: '1px solid #e0e0e0', paddingBottom: 16, marginBottom: 16 } }
						>
							<strong style={ { display: 'block', marginBottom: 8, fontSize: 12 } }>
								Stat { index + 1 }: { stat.label }
							</strong>
							<SelectControl
								label="Icon"
								value={ stat.iconName }
								options={ ICON_OPTIONS }
								onChange={ ( val ) => updateStat( index, 'iconName', val ) }
							/>
							<TextControl
								label="Numeric Value"
								type="number"
								value={ String( stat.value ) }
								onChange={ ( val ) => updateStat( index, 'value', parseFloat( val ) || 0 ) }
							/>
							<TextControl
								label="Suffix (e.g. +, %, /7)"
								value={ stat.suffix }
								onChange={ ( val ) => updateStat( index, 'suffix', val ) }
							/>
							<TextControl
								label="Label"
								value={ stat.label }
								onChange={ ( val ) => updateStat( index, 'label', val ) }
							/>
							<SelectControl
								label="Color"
								value={ stat.color }
								options={ COLOR_OPTIONS }
								onChange={ ( val ) => updateStat( index, 'color', val ) }
							/>
							<ToggleControl
								label="Show decimal (e.g. 4.9)"
								checked={ !! stat.decimal }
								onChange={ ( val ) => updateStat( index, 'decimal', val ) }
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

			<div { ...useBlockProps( { style: { background: '#0B2545', padding: 24, borderRadius: 8 } } ) }>
				<div style={ { display: 'grid', gridTemplateColumns: `repeat(${ Math.min( ( stats || [] ).length, 5 ) }, 1fr)`, gap: 16 } }>
					{ ( stats || [] ).map( ( stat, i ) => (
						<div key={ i } style={ { textAlign: 'center' } }>
							<div style={ { width: 48, height: 48, borderRadius: 12, background: `${ stat.color }25`, border: `1px solid ${ stat.color }35`, margin: '0 auto 8px', display: 'flex', alignItems: 'center', justifyContent: 'center' } }>
								<span style={ { color: stat.color, fontSize: 18 } }>★</span>
							</div>
							<div style={ { color: stat.color, fontSize: 28, fontWeight: 800, lineHeight: 1 } }>
								{ stat.decimal ? stat.value.toFixed( 1 ) : Math.floor( stat.value ) }{ stat.suffix }
							</div>
							<div style={ { color: 'rgba(255,255,255,0.6)', fontSize: 12, marginTop: 4 } }>{ stat.label }</div>
						</div>
					) ) }
				</div>
				<p style={ { color: 'rgba(255,255,255,0.3)', fontSize: 11, marginTop: 16 } }>
					Trust Bar — edit stats in the sidebar →
				</p>
			</div>
		</>
	);
}
