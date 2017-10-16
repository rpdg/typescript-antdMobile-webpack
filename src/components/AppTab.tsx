import * as React from 'react';

import { Tabs, WhiteSpace, Badge } from 'antd-mobile';


export class  AppTab extends  React.Component<any, any>  {

	 tabs = [
		{ title: <Badge text={'3'}>First Tab</Badge> },
		{ title: <Badge text={'今日(20)'}>Second Tab</Badge> },
		{ title: <Badge dot>Third Tab</Badge> },
	];


	render(){
		return (
				<Tabs tabs={this.tabs}
				      initialPage={1}
				      onChange={(tab, index) => { console.log('onChange', index, tab); }}
				      onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
				>
					<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
						Content of First Tab
					</div>
					<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
						Content of Second Tab
					</div>
					<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
						Content of Third Tab
					</div>
				</Tabs>
		);
	}
}
