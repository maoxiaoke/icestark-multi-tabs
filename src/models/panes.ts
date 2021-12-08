import { asideMenuConfig } from '../layouts/BasicLayout/menuConfig';

export default {
  state: {
    panes: asideMenuConfig.slice(0, 1),
    activeKey: asideMenuConfig[0].key,
  },
  reducers: {
    append(prevState, payload) {
      const opened = prevState.panes.some((pane) => pane.key === payload.key);
      return {
        ...prevState,
        panes: opened ? prevState.panes : prevState.panes.concat(payload),
        activeKey: payload.key,
      };
    },
    remove(prevState, key) {
      return {
        ...prevState,
        panes: prevState.panes.filter((pane) => pane.key !== key),
      };
    },
    updateKey(preState, key) {
      return {
        ...preState,
        activeKey: key,
      };
    },
  },
};
