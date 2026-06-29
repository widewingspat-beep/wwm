/* eslint-disable @next/next/no-css-tags */
import React from 'react';
import { RootLayout } from '@payloadcms/next/layouts';
import config from '../../payload.config';
import { importMap } from './cms/importMap';
import { serverFunction } from './serverFunction';
import '@payloadcms/next/css';
import './custom.scss';

type Args = { children: React.ReactNode };

const Layout = ({ children }: Args) => (
  <RootLayout
    config={config}
    importMap={importMap}
    serverFunction={serverFunction}
  >
    {children}
  </RootLayout>
);

export default Layout;
