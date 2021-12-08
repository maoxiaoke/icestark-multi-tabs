import React from 'react';
import Dashboard from '../../pages/Dashboard';
import Test1 from '../../pages/Test1';
import Test2 from '../../pages/Test2';
import IcestarkApp from '../../components/IcestarkApp';

const headerMenuConfig = [];

const asideMenuConfig = [
  {
    name: '首页',
    key: '1',
    path: '/',
    icon: 'smile',
    exact: true,
    component: Dashboard,
    closeable: false,
  },
  {
    name: '测试一',
    key: '2',
    path: '/test1',
    icon: 'smile',
    exact: false,
    component: Test1,
    closeable: true,
  },
  {
    name: '测试二',
    key: '3',
    path: '/test2',
    icon: 'smile',
    exact: false,
    component: Test2,
    closeable: true,
  },
  {
    name: '测试三',
    key: '4',
    path: '/test3',
    icon: 'smile',
    exact: false,
    component: Dashboard,
    closeable: true,
  },
  {
    name: '微应用测试',
    key: '5',
    path: '/seller/detail',
    icon: 'smile',
    component: () => (<IcestarkApp
      name="seller"
      title="小二"
      basename="seller"
      loadScriptMode="fetch"
      url={[
        'https://iceworks.oss-cn-hangzhou.aliyuncs.com/icestark/child-seller-react/build/js/index.js',
        'https://iceworks.oss-cn-hangzhou.aliyuncs.com/icestark/child-seller-react/build/css/index.css',
      ]}
    />),
    closeable: true,
  },
  {
    name: '微应用测试2',
    key: '6',
    path: '/seller/list',
    icon: 'smile',
    component: () => (<IcestarkApp
      name="seller-list"
      title="小二"
      basename="seller"
      loadScriptMode="fetch"
      url={[
        'https://iceworks.oss-cn-hangzhou.aliyuncs.com/icestark/child-seller-react/build/js/index.js',
        'https://iceworks.oss-cn-hangzhou.aliyuncs.com/icestark/child-seller-react/build/css/index.css',
      ]}
    />),
    closeable: true,
  },
  {
    name: '404',
    key: '404',
    path: '/',
    icon: 'smile',
    exact: false,
    component: () => <div>404</div>,
    closeable: true,
  },
];

export { headerMenuConfig, asideMenuConfig };
