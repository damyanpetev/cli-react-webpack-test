import React, { Component } from 'react';
import 'jquery';
import 'jquery-ui';

// Ignite UI Required Combined JavaScript Files
import "ignite-ui/js/infragistics.core.js";
import "ignite-ui/js/infragistics.lob.js";

import IgCombo from "igniteui-react/ui/igCombo.js";

export default class Combo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			platforms: [
				{ Name: "jQuery/HTML5/ASP.NET MVC Controls" },
				{ Name: "ASP.NET Controls" },
				{ Name: "Windows Forms Controls" },
				{ Name: "WPF Controls" },
				{ Name: "Android Native mobile controls" },
				{ Name: "iOS Controls" },
				{ Name: "SharePlus" },
				{ Name: "ReportPlus" },
				{ Name: "Indigo Studio" }
			]
		};
	}
	render() {
		return (
			<div className="Combo">
				<div className="Combo-header">
					<h2>Combo template for React</h2>
				</div>
				<IgCombo
					id="combo"
					width={300}
					dataSource={this.state.platforms}
					textKey="Name"
					valueKey="Name"
					multiSelection={{
						enabled: true,
						showCheckboxes: true
					}}
					dropDownOrientation="bottom"
				/>
			</div>
		);
	}
}
