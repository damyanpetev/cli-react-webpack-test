import React, { Component } from 'react';
import 'jquery';
import 'jquery-ui';

// Ignite UI Required Combined JavaScript Files
import "ignite-ui/js/infragistics.core.js";
import "ignite-ui/js/infragistics.lob.js";

import IgGrid from "igniteui-react/ui/igGrid.js";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [
				{ "ProductID": 1, "Name": "Adjustable Race", "ProductNumber": "AR-5381", "Category": { "ID": 0, "Name": "Food", "Active": true, "Date": "\/Date(1059660800000)\/" } },
				{ "ProductID": 2, "Name": "Bearing Ball", "ProductNumber": "BA-8327", "Category": { "ID": 1, "Name": "Beverages", "Active": true, "Date": "\/Date(1159660800000)\/" } },
				{ "ProductID": 3, "Name": "BB Ball Bearing", "ProductNumber": "BE-2349", "Category": { "ID": 1, "Name": "Beverages", "Active": true, "Date": "\/Date(1259660800000)\/" } },
				{ "ProductID": 4, "Name": "Headset Ball Bearings", "ProductNumber": "BE-2908", "Category": { "ID": 1, "Name": "Beverages", "Active": true, "Date": "\/Date(1359660800000)\/" } },
				{ "ProductID": 316, "Name": "Blade", "ProductNumber": "BL-2036", "Category": { "ID": 1, "Name": "Beverages", "Active": false, "Date": "\/Date(1459660800000)\/" } },
				{ "ProductID": 317, "Name": "LL Crankarm", "ProductNumber": "CA-5965", "Category": { "ID": 1, "Name": "Beverages", "Active": false, "Date": "\/Date(1559660800000)\/" } },
				{ "ProductID": 318, "Name": "ML Crankarm", "ProductNumber": "CA-6738", "Category": { "ID": 1, "Name": "Beverages", "Active": false, "Date": "\/Date(1659660800000)\/" } },
				{ "ProductID": 319, "Name": "HL Crankarm", "ProductNumber": "CA-7457", "Category": { "ID": 2, "Name": "Electronics", "Active": false, "Date": "\/Date(1759660800000)\/" } },
				{ "ProductID": 320, "Name": "Chainring Bolts", "ProductNumber": "CB-2903", "Category": { "ID": 2, "Name": "Electronics", "Active": false, "Date": "\/Date(1859660800000)\/" } }
			]
		};
	}
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<h2>Grid template structure for React</h2>
				</div>
				<IgGrid
					id="grid"
					width="700px"
					dataSource={this.state.products}
					features={[]}
				/>
      </div>
		);
	}
}