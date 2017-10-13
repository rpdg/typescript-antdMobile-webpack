import * as React from 'react';


import {Popover, Icon, NavBar} from 'antd-mobile';


const Item = Popover.Item;
const customIcon: Function = src => <img src={src} className="am-icon am-icon-xs" alt="icon"/>;


export interface viewState {
	visible: boolean;
	selected: string;
}



export class AppNavBar extends React.Component<any, any> {


	public state: viewState = {
		visible: false,
		selected: '',
	};

	onSelect(opt) {
		// console.log(opt.props.value);
		this.setState({
			visible: true,
			selected: opt.props.value,
		});
	}

	handleVisibleChange(visible) {
		this.setState({
			visible,
		});
	}

	render() {
		let offsetX = -10; // just for pc demo
		if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
			offsetX = -26;
		}
		return (<div>
			<NavBar iconName={false}
			        mode="light"
			        rightContent={
				        <Popover mask
				                 overlayClassName="fortest"
				                 overlayStyle={{color: 'currentColor'}}
				                 visible={this.state.visible}
				                 overlay={[
					                 (<Item key="4" value="scan"
					                        icon={customIcon('https://gw.alipayobjects.com/zos/rmsportal/tOtXhkIWzwotgGSeptou.svg')}
					                        data-seed="logId">Scan</Item>),
					                 (<Item key="5" value="special"
					                        icon={customIcon('https://gw.alipayobjects.com/zos/rmsportal/PKAgAqZWJVNwKsAJSmXd.svg')}
					                        style={{whiteSpace: 'nowrap'}}>My Qrcode</Item>),
					                 (<Item key="6" value="button ct"
					                        icon={customIcon('https://gw.alipayobjects.com/zos/rmsportal/uQIYTFeRrjPELImDRrPt.svg')}>
						                 <span style={{marginRight: 5}}>Help</span>
					                 </Item>),
				                 ]}
				                 align={{
					                 overflow: {adjustY: 0, adjustX: 0},
					                 offset: [offsetX, 15],
				                 }}
				                 onVisibleChange={this.handleVisibleChange}
				                 onSelect={this.onSelect}
				        >
					        <div style={{
						        height: '100%',
						        padding: '0 15px',
						        marginRight: '-15px',
						        display: 'flex',
						        alignItems: 'center',
					        }}
					        >
						        <Icon type="ellipsis"/>
					        </div>
				        </Popover>
			        }
			>
				NavBar
			</NavBar>
		</div>);
	}
}
