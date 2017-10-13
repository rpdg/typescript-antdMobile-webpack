import * as React from 'react';
import * as ReactDOM from 'react-dom';


import {AppNavBar} from "./components/AppNavBar";

import {AppTab} from './components/AppTab';


export class Index extends React.Component<any, any> {

	render() {
		return (
			<div>
				<AppNavBar/>
				<AppTab/>
			</div>
		);
	}
}


ReactDOM.render(<Index/>, document.getElementById('example'));