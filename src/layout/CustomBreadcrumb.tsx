import { Breadcrumb } from 'antd';

function CustomBreadcrumb() {
  return (
    <Breadcrumb
            style={{ margin: '16px 0' }}
            items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]}
          />
  )
}

export default CustomBreadcrumb