import { Outlet } from 'react-router-dom';
import { Layout, theme } from 'antd';
import logo from '@/assets/logo.png';
import AppHeader from './AppHeader';
import MenuWithRoute from './Menu';
import { useSelector } from 'react-redux';
import Setting from './Setting';
import CustomBreadcrumb from './CustomBreadcrumb';

const { Sider, Content } = Layout;

function AppLayout() {
  const { isCollapse, styleSetting } = useSelector(
    (state: any) => state.setting,
  );
  const {
    token: { borderRadiusLG, colorBgContainer },
  } = theme.useToken();

  return (
    <Layout
      className="w-full h-full"
      style={{
        overflowY: 'auto',
      }}
    >
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
            <img className="w-[50px]" src={logo} alt="" />
            {!isCollapse && <span className="font-bold">admin system</span>}
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
          <CustomBreadcrumb />
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
