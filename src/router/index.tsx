import { createBrowserRouter, Navigate } from 'react-router-dom';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { CustomRouteObject } from '@/types/route';
import Home from '@/pages/Home/Home';
import Game from '@/pages/Game';
import Error from '@/pages/404';
import AppLayout from '@/layout/index';
import Counter from '@/pages/Counter';
import Channel from '@/pages/Channel';
import Article from '@/pages/Article';
import ArticleDetail from '@/pages/Article/ArticleDetail';
import Login from '@/pages/Login';
import NotFound from '@/pages/Error/NotFound';
import Bill from '@/pages/Mobile/Bill';
import AddBill from '@/pages/Mobile/AddBill';
import MonthBill from '@/pages/Mobile/MonthBill';
import YearBill from '@/pages/Mobile/YearBill';

import Parent from '@/pages/Nested/Parent';
import FirstChild from '@/pages/Nested/FirstChild';
import SecondChild from '@/pages/Nested/SecondChild';
import SecondChildSon from '@/pages/Nested/SecondChildSon';

const routeList: CustomRouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true, // 默认子路由
        title: '首页',
        breadcrumb: '首页',
        showInMenu: true,
        icon: <UploadOutlined />,
        element: <Home />,
      },
      {
        path: 'game',
        title: '游戏',
        breadcrumb: '游戏',
        showInMenu: false,
        icon: <UploadOutlined />,
        element: <Game />,
      },
      {
        path: 'counter',
        title: '计数器',
        breadcrumb: '计数器',
        showInMenu: true,
        icon: <UploadOutlined />,
        element: <Counter />,
      },
      {
        path: 'channel',
        title: '频道列表',
        breadcrumb: '频道列表',
        showInMenu: true,
        icon: <UploadOutlined />,
        element: <Channel />,
      },
      {
        path: 'article',
        title: '文章列表',
        breadcrumb: '文章列表',
        showInMenu: true,
        icon: <UploadOutlined />,
        element: <Article />,
      },
      {
        path: 'articleDetail/:id',
        title: '文章详情',
        breadcrumb: (params) => `文章详情 ${params.id}`,
        element: <ArticleDetail />,
      },
      {
        path: 'parent',
        title: '父级页面',
        showInMenu: true,
        breadcrumb: '父级页面',
        icon: <UploadOutlined />,
        children: [
          {
            path: 'firstChild',
            title: '一级页面1',
            breadcrumb: '一级页面1',
            showInMenu: true,
            icon: <UploadOutlined />,
            element: <FirstChild />,
          },
          {
            path: 'secondChild',
            title: '一级页面2',
            breadcrumb: '一级页面2',
            showInMenu: true,
            icon: <UploadOutlined />,
            children: [
              {
                path: 'secondChildSon',
                title: '一级页面2-1',
                breadcrumb: '一级页面2-1',
                showInMenu: true,
                icon: <UploadOutlined />,
                element: <SecondChildSon />,
              }
            ]
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    title: '登录',
    element: <Login />,
  },
  {
    path: '/bill',
    title: '账单',
    showInMenu: true,
    icon: <UploadOutlined />,
    element: <Bill />,
    children: [
      {
        index: true,
        element: <Navigate to="year" replace />,
      },
      {
        path: 'year',
        element: <YearBill />,
      },
      {
        path: 'add',
        element: <AddBill />,
      },
      {
        path: 'month',
        element: <MonthBill />,
      },
    ],
  },
];
const routes = createBrowserRouter(routeList as any);
export { routeList };
export default routes;
