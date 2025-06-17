import { Breadcrumb } from 'antd';
import { useLocation, useParams, matchRoutes, Link } from 'react-router-dom';
import { routeList } from '@/router';

function CustomBreadcrumb() {
  const location = useLocation();
  const params = useParams();
  const matchedRoutes = matchRoutes(routeList, location) || [];
  // 过滤掉没有面包屑的路由
  const breadcrumbRoutes = matchedRoutes
    .filter(match => match.route.breadcrumb !== undefined)
    .map(match => {
      const route = match.route;
      let breadcrumb: React.ReactNode;

      if (typeof route.breadcrumb === 'function') {
        breadcrumb = route.breadcrumb(params);
      } else {
        breadcrumb = route.breadcrumb;
      }

      return {
        path: match.pathname,
        breadcrumb,
      };
    });
  /**
   * TODO:
   * 1. 路由跟随跳转显示
   * 2. 涉及多级菜单显示
   * 3. 点击多级菜单的每级菜单跳转交互
   */
  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      {breadcrumbRoutes.map((item, index) => (
        <Breadcrumb.Item key={item.path}>
          {index === breadcrumbRoutes.length - 1 ? (
            <span>{item.breadcrumb}</span>
          ) : (
            <Link to={item.path}>{item.breadcrumb}</Link>
          )}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
}

export default CustomBreadcrumb;
