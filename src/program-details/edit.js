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
export default function Edit( { attributes, setAttributes, clientId } ) {
	const ALLOWED_BLOCKS = [ 'esports-certificate-block/program-detail-box' ];

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
						<Icon icon="list-view" /> Program Details
					</h4>
				</CardHeader>
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
										label="Add Program Detail"
										isPrimary
									>
										Add Program Detail
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
