/**
 * BLOCK: speakers-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './styles/style.scss';
import './styles/editor.scss';

import './store.js';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { InspectorControls, PanelColorSettings } = wp.blockEditor;
const { Spinner, RadioControl, PanelBody, PanelRow } = wp.components; //Import Button from wp.components
const { withSelect } = wp.data;

import Select, { components } from 'react-select';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'cgb/block-speakers-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Speakers' ), // Block title.
	icon: 'groups', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Speakers' ),
	],
	attributes: {
		speakers: {
			type: 'array',
			default: [],
		},
		color1: {
			type: 'string',
		},
		color2: {
			type: 'string',
		},
		textColor: {
			type: 'string',
		},
	},

	edit: withSelect( ( select ) => {
		return {
			speakersList: select( 'linux/speakers-block' ).receiveSpeakersList(),
		};
	} )( props => {
		const { setAttributes, className, speakersList, attributes: { speakers, color1, color2, textColor } } = props;

		function onTextColorChange( changes ) {
			setAttributes( {
				textColor: changes,
			} );
		}

		if ( ! speakersList.length ) {
			return (
				<p className={ className } >
					<Spinner />
					{ __( 'Loading Data...' ) }
				</p>
			);
		}

		const onDragEnd = ( result ) => {
			// dropped outside the list
			if ( ! result.destination ) {
				return;
			}

			const items = reorderList(
				speakers,
				result.source.index,
				result.destination.index
			);

			setAttributes( {
				speakers: items,
			} );
		};

		const reorderList = ( list, startIndex, endIndex ) => {
			const newList = list.slice();
			const result = Array.from( newList );
			const [ removed ] = result.splice( startIndex, 1 );

			result.splice( endIndex, 0, removed );

			return result;
		};

		const DragAndDropContainer = ( { data, ...restProps } ) => {
			const getIndex = ( items, comparativeValue ) => {
				return items.findIndex( ( item ) => item.value === comparativeValue );
			};

			return (
				<Draggable
					key={ `item-${ data.value }` }
					index={ getIndex( speakers, data.value ) }
					draggableId={ `item-${ data.value }` }>
					{ ( provided ) => (
						<div
							ref={ provided.innerRef }
							{ ...provided.draggableProps }
							{ ...provided.dragHandleProps }>
							<components.MultiValueContainer { ...restProps } data={ data } />
						</div>
					) }
				</Draggable>
			);
		};

		return [
			<InspectorControls key="speakers-block-panel">
				<PanelColorSettings
					title="Color Settings"
					initialOpen={ true }
					colorSettings={ [
						{
							value: color1,
							onChange: colorValue =>
								setAttributes( {
									color1: colorValue,
								} ),
							label: 'Color 1',
						},
						{
							value: color2,
							onChange: colorValue =>
								setAttributes( {
									color2: colorValue,
								} ),
							label: 'Color 2',
						},
					] }
				>
				</PanelColorSettings>
				<PanelBody><PanelRow>
					<div>
						<RadioControl
							label="Text color:"
							selected={ textColor }
							onChange={ onTextColorChange }
							options={ [
								{ label: 'White', value: 'white' },
								{ label: 'Black', value: 'black' },
							] }
						/>
					</div>
				</PanelRow></PanelBody>
			</InspectorControls>,
			<div key="speakers-block-edit" className={ props.className }>
				<p><strong>Featured Speakers:</strong>
					<DragDropContext onDragEnd={ onDragEnd }>
						<Droppable direction="horizontal" droppableId="droppable">
							{ ( provided ) => (
								<div
									{ ...provided.droppableProps }
									ref={ provided.innerRef }>
									<Select
										styles={ { menu: ( styles ) => ( { ...styles, zIndex: 99 } ) } }
										isMulti
										value={ speakers }
										options={ speakersList }
										components={ { MultiValueContainer: DragAndDropContainer } }
										onChange={ ( value ) => setAttributes( { speakers: value } ) }
									/>
									{ provided.placeholder }
								</div>
							) }
						</Droppable>
					</DragDropContext>
				</p>
			</div>,
		];
	} ),
} );
