import { useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { setMenuDefaultKey } from '@/store/modules/setting';
import {routeList} from '@/router'

function MenuWithRoute() {
  const location = useLocation();
  const { menuDefaultKey, styleSetting } = useSelector(
    (state: any) => state.setting,
  );
  const dispatch = useDispatch();
  const { layoutStyle } = styleSetting;
  const currentMode = useMemo(() => {
    return layoutStyle === 'withSide' ? 'inline' : 'horizontal';
  }, [layoutStyle]);

  // TODO:优化菜单，从route获取生成;

  const items = [
    {
      key: '/',
      label: <Link to="/">home</Link>,
      icon: <UploadOutlined />,
    },
    {
      key: '/counter',
      label: <Link to="/counter">counter</Link>,
      icon: <UserOutlined />,
    },
    {
      key: '/channel',
      label: <Link to="/channel">channel</Link>,
      icon: <VideoCameraOutlined />,
    },
    {
      key: '/article',
      label: <Link to="/article">article</Link>,
      icon: <MailOutlined />,
    },
    {
      key: '/bill',
      label: <Link to="/bill">mobile-demo</Link>,
      icon: <MailOutlined />,
    },
    {
      key: '/parent',
      label: 'parent',
      icon: <MailOutlined />,
      children: [
        {
          key: '/parent/firstChild',
          label: <Link to="parent/firstChild">firstChild</Link>,
          icon: <MailOutlined />,
        },
        {
          key: '/parent/secondChild',
          label: 'secondChild',
          icon: <MailOutlined />,
          children: [
            {
              key: '/parent/secondChild/secondChildSon',
              label: <Link to="/parent/secondChild/secondChildSon">secondChildSon</Link>,
              icon: <MailOutlined />,
            }
          ]
        }
      ]
    },

  ];

  // TODO:1.找展示在菜单中的路由;2.组合成menu对应的类型数据


  useEffect(() => {
    const currentPath = location.pathname;
    dispatch(setMenuDefaultKey(currentPath));
  }, [location.pathname, dispatch]);

  const onClick = (e: any) => {
    console.log('点击菜单', e);
    dispatch(setMenuDefaultKey(e.key));
  };

  return (
    // TODO:菜单悬浮高亮色，选中背景色，菜单文字颜色，选中文字颜色
    <Menu
      style={{ background: styleSetting.sideColor }}
      mode={currentMode}
      selectedKeys={[menuDefaultKey]}
      items={items}
      onClick={onClick}
    />
  )
}

export default MenuWithRoute;
