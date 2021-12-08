import * as pathToRegexp from 'path-to-regexp';

interface MenuConfig {
  path: string;
  exact?: boolean;
  strict?: boolean;
  sensitive?: boolean;
}

function genPath2RegExp(path: string, regExpOptions: pathToRegexp.RegExpOptions) {
  const keys = [];
  const regexp = pathToRegexp(path, keys, regExpOptions);
  return { regexp, keys };
}

function checkActive(pathname: string, menuConfig: MenuConfig) {
  const { path, exact = false, strict = false, sensitive = false } = menuConfig;
  const { regexp } = genPath2RegExp(path, {
    strict,
    sensitive,
    end: exact,
  });

  const match = regexp.exec(pathname);

  if (!match) {
    return false;
  }
  return true;
}

export {
  genPath2RegExp,
  checkActive,
};
