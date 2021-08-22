import React from 'react'
import { withRouter } from 'react-router-dom';
import { adminRoutes } from '../../routes'
import { Layout, Menu } from 'antd';
import { NotificationOutlined } from '@ant-design/icons';

const { Header, Content, Sider } = Layout;
const routes = adminRoutes.filter(route=>route.isShow)

function index(props) {
  return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <h1 style={{color: '#fff'}}>logo</h1>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
            {
              routes.map(route => {
                return (<Menu.Item key={route.path} icon={<NotificationOutlined />} onClick={p=>{props.history.push(p.key)}}>{route.title}</Menu.Item>)
              })
            }
            </Menu>
          </Sider>
          <Layout style={{ margin: '16px' }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                backgroundColor: '#fff'
              }}
            >
              { props.children }
            </Content>
          </Layout>
        </Layout>
      </Layout>
  )
}

export default withRouter(index)
