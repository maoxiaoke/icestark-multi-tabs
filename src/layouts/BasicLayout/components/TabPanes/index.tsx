import React, { useEffect } from 'react';
import { Tab, Button, Icon } from '@alifd/next';
import store from '@/store';
import { history, withRouter } from 'ice';
import { asideMenuConfig } from '../../menuConfig';
import { checkActive } from '@/utils/index';

const TabPanes = (props) => {
  const { location } = props;
  const { pathname } = location;

  const [panesState, panesDispatchers] = store.useModel('panes');

  useEffect(() => {
    const idx = asideMenuConfig.findIndex((config) => checkActive(window.location.pathname, config));
    if (idx > -1) {
      panesDispatchers.append(asideMenuConfig[idx]);
    }
  }, [pathname]);

  const onChange = (key: string) => {
    const path = panesState.panes.find((pane) => pane.key === key)?.path;
    if (path) {
      history.push(path);
    }
  };

  const close = (targetKey) => {
    if (targetKey === panesState.activeKey) {
      history.push(panesState.panes[0].path);
    }
    panesDispatchers.remove(targetKey);
  };

  return (
    <div>
      <Tab
        shape="wrapped"
        activeKey={panesState.activeKey}
        onChange={onChange}
        onClose={close}
        className="custom-tab"
      >
        {panesState.panes.map((item) => (
          <Tab.Item
            title={item.name}
            key={item.key}
            closeable={item.closeable}
          >
            {item.component()}
          </Tab.Item>
        ))}
      </Tab>
    </div>
  );
};

export default withRouter(TabPanes);
