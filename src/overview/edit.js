/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {
	useBlockProps,
	InnerBlocks,
	Inserter,
	RichText,
	InspectorControls,
} from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import {
	Card,
	CardBody,
	CardDivider,
	CardHeader,
	Icon,
	Button,
} from '@wordpress/components';
import UploadMedia from '../uploadMedia';
import MarginControls from '../MarginControls';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { clientId, attributes, setAttributes } ) {
	const ALLOWED_BLOCKS = [ 'esports-certificate-block/overview-box' ];

	const removeBackgroundMedia = () => {
		setAttributes( {
			backgroundMedia: {},
		} );
	};

	const onSelectBackgroundMedia = ( media ) => {
		setAttributes( {
			backgroundMedia: media,
		} );
	};

	return (
		<div { ...useBlockProps() }>
			<InspectorControls>
				<MarginControls
					removeTopMargin={ attributes.removeTopMargin }
					removeBottomMargin={ attributes.removeBottomMargin }
					onTopMarginChange={ ( removeTopMargin ) =>
						setAttributes( { removeTopMargin } )
					}
					onBottomMarginChange={ ( removeBottomMargin ) =>
						setAttributes( { removeBottomMargin } )
					}
				/>
			</InspectorControls>
			<Card>
				<CardHeader>
					<h4>
						<Icon icon="clipboard" /> Overview
					</h4>
				</CardHeader>
				<CardBody>
					<h5 className={ 'card-title' }>Background Image</h5>

					<UploadMedia
						media={ attributes.backgroundMedia }
						onSelect={ onSelectBackgroundMedia }
						removeMedia={ removeBackgroundMedia }
						text={ 'Choose an image to set as the background.' }
						allowedTypes={ [ 'image' ] }
						domain={ 'esports-certificate-blocks-plugin' }
					/>
				</CardBody>
				<CardDivider />
				<CardBody>
					<RichText
						tagName="h2"
						value={ attributes.overviewHeading } // Any existing content, either from the database or an attribute default
						allowedFormats={ [ 'core/heading' ] } // Allow the content to be made bold or italic, but do not allow other formatting options
						onChange={ ( overviewHeading ) =>
							setAttributes( { overviewHeading } )
						} // Store updated content as a block attribute
						placeholder={ __( 'heading here…' ) } // Display this text before any content has been added by the user
					/>
					<RichText
						tagName="div"
						value={ attributes.overviewText } // Any existing content, either from the database or an attribute default
						allowedFormats={ [ 'core/paragraph', 'core/list' ] } // Allow the content to be made bold or italic, but do not allow other formatting options
						onChange={ ( overviewText ) =>
							setAttributes( { overviewText } )
						} // Store updated content as a block attribute
						placeholder={ __( 'text here…' ) } // Display this text before any content has been added by the user
						multiline="p"
					/>
				</CardBody>
				<CardDivider />
				<CardBody>
					<InnerBlocks
						allowedBlocks={ ALLOWED_BLOCKS }
						renderAppender={ () => (
							<Inserter
								rootClientId={ clientId }
								renderToggle={ ( { onToggle, disabled } ) => (
									<Button
										className="btn btn-primary"
										onClick={ onToggle }
										disabled={ disabled }
										label="Add Overview Box"
										isPrimary
									>
										Add Overview Box
									</Button>
								) }
								isAppender
							/>
						) }
					/>
				</CardBody>
			</Card>
		</div>
	);
}
