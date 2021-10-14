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
	const ALLOWED_BLOCKS = [ 'esports-certificate-block/career-choice' ];

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
						<Icon icon="index-card" /> Career Choices
					</h4>
				</CardHeader>
				<CardBody className={ 'career-choices-heading' }>
					<RichText
						tagName="h2"
						value={ attributes.heading } // Any existing content, either from the database or an attribute default
						onChange={ ( heading ) => setAttributes( { heading } ) } // Store updated content as a block attribute
						placeholder={ __( 'heading here…' ) } // Display this text before any content has been added by the user
					/>
				</CardBody>
				<CardDivider />
				<CardBody className={ 'career-choices-text' }>
					<RichText
						tagName="div"
						value={ attributes.text } // Any existing content, either from the database or an attribute default
						onChange={ ( text ) => setAttributes( { text } ) } // Store updated content as a block attribute
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
										label="Add Career Choice"
										isPrimary
									>
										Add Career Choice
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
