import React, { useEffect, useRef } from 'react';
import { createMicroApp, unmountMicroApp } from '@ice/stark';

function IcestarkApp(appConfig) {
  const ref = useRef(null);

  useEffect(() => {
    createMicroApp({
      ...appConfig,
      container: ref.current,
    }, undefined, {
      shouldAssetsRemove: () => false,
    });
    return () => {
      unmountMicroApp(appConfig.name);
    };
  }, []);

  return (
    <div ref={ref} />
  );
}

export default IcestarkApp;
