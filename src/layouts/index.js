import React from 'react';
import withRouter from 'umi/withRouter';
import Link from 'umi/link';

import { Layout as AntLayout, Menu, Icon, notification } from 'antd';

import './index.less';
import './header.less';

const { Header, Content } = AntLayout;

function Layout({ children, location }) {
  return (
    <AntLayout>
		<Header className = 'appHeader'>
			<div className='appHeader_logo'>JALA</div>
			<div className = 'floatLeft'>
				<span className = 'appHeader_logoText'>年度规划</span>
				<Menu
					className = 'floatRight appHeader_menu'
					selectedKeys={[location.pathname]}
					mode="horizontal"
					theme="dark"
				>
					<Menu.Item key="/plan">
						<Link to="/plan"><Icon type="home" />行动计划/项目</Link>
					</Menu.Item>
					<Menu.Item key="/todo">
						<Link to="/todo"><Icon type="bars" />个人工作计划表</Link>
					</Menu.Item>
				</Menu>
			</div>
		</Header>
	    <Content className= 'appContent'>
	    	{children}
	    </Content>
    </AntLayout>
  );
}

export default withRouter(Layout);