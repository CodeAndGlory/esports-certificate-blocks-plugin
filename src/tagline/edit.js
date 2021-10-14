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
} from '@wordpress/components';
import MarginControls from '../MarginControls';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const ALLOWED_BLOCKS = [
		'core/image',
		'core/paragraph',
		'core/heading',
		'core/list',
	];

	return (
		<div { ...useBlockProps() }>
			<Card>
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
				<CardHeader>
					<h4>
						<Icon icon="tag" /> Tagline
					</h4>
				</CardHeader>
				<CardBody>
					<h5 className={ 'card-title' }>Seal Text</h5>
					<RichText
						tagName="span"
						value={ attributes.sealText } // Any existing content, either from the database or an attribute default
						allowedFormats={ [ 'core/paragraph' ] } // Allow the content to be made bold or italic, but do not allow other formatting options
						onChange={ ( sealText ) =>
							setAttributes( { sealText } )
						} // Store updated content as a block attribute
						placeholder={ __( 'Seal text here…' ) } // Display this text before any content has been added by the user
					/>
				</CardBody>
				<CardDivider />
				<CardBody>
					<h5 className={ 'card-title' }>Tagline Text</h5>
					<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
				</CardBody>
			</Card>
		</div>
	);
}
