import React from 'react';
import {
	Panel,
	PanelBody,
	PanelRow,
	ToggleControl,
} from '@wordpress/components';

class MarginControls extends React.Component {
	static defaultProps = {
		open: true,
	};

	constructor( props ) {
		super( props );

		// This binding is necessary to make `this` work in the callback
		this.onTopMarginChange = this.onTopMarginChange.bind( this );
		this.onBottomMarginChange = this.onBottomMarginChange.bind( this );
	}

	onTopMarginChange( value ) {
		this.props.onTopMarginChange( value );
	}

	onBottomMarginChange( value ) {
		this.props.onBottomMarginChange( value );
	}

	render() {
		return (
			<Panel>
				<PanelBody
					title="Top & Bottom Margin Settings"
					initialOpen={ this.props.open }
				>
					<PanelRow>
						<ToggleControl
							label="Remove top margin."
							help={
								this.props.removeTopMargin
									? 'Top margin removed.'
									: 'Has top margin.'
							}
							checked={ this.props.removeTopMargin }
							onChange={ this.onTopMarginChange }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label="Remove bottom margin."
							help={
								this.props.removeBottomMargin
									? 'Bottom margin removed.'
									: 'Has bottom margin.'
							}
							checked={ this.props.removeBottomMargin }
							onChange={ this.onBottomMarginChange }
						/>
					</PanelRow>
				</PanelBody>
			</Panel>
		);
	}
}

export default MarginControls;
