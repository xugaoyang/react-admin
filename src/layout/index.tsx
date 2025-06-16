import { Outlet } from 'react-router-dom';
import { Layout, theme, Breadcrumb } from 'antd';
import reactLogo from '@/assets/react.svg';
import AppHeader from './AppHeader';
import MenuWithRoute from './Menu';
import { useSelector } from 'react-redux';
import Setting from './Setting';

const { Sider, Content } = Layout;

function AppLayout() {
  const { isCollapse, styleSetting } = useSelector(
    (state: any) => state.setting,
  );
  const {
    token: { borderRadiusLG, colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="w-full h-full" style={{
      overflowY: 'auto'
    }}>
      {styleSetting.layoutStyle === 'withoutSide' ? (
        <AppHeader />
      ) : (
        <Sider
          trigger={null}
          collapsible
          collapsed={isCollapse}
          className="sticky left-0 top-0"
          style={{ background: styleSetting.sideColor }}
        >
          <div className="h-[64px] flex justify-center items-center">
            <img src={reactLogo} alt="" />
          </div>
          <MenuWithRoute />
        </Sider>
      )}
      <Layout>
        {styleSetting.layoutStyle !== 'withoutSide' && <AppHeader />}
        <Content
          style={{
            margin: '16px',
          }}
        >
          <Breadcrumb
            style={{ margin: '16px 0' }}
            items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]}
          />
          <div
            style={{
              background: colorBgContainer,
              minHeight: 280,
              padding: 24,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
      <Setting></Setting>
    </Layout>
  );
}

export default AppLayout;
