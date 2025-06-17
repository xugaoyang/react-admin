import { RouteObject } from "react-router-dom";

export type CustomRouteObject = RouteObject & {
  title?: string; // 页面标题
  name?: string;
  icon?: string | React.ReactNode; // 页面图标，支持字符串和react节点
  breadcrumb?: string | React.ReactNode | ((params: Record<string, string | undefined>) => React.ReactNode); // 面包屑展示名称，支持字符串、函数和react节点
  showInMenu?: boolean; // 是否在菜单展示
  children?: CustomRouteObject[];
}
export interface BreadcrumbItem {
  name: string
  path: string
  icon?: string
}
