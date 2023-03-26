import React from 'react';

import { Layout } from 'antd';

import { Div } from '../style/style.js';
import { LayoutContextProvider } from '../context/context.jsx';

import DashboardLayoutHeader from './DashboardLayoutHeader.jsx';
import DashboardLayoutSidebar from './DashboardLayoutSidebar.jsx';

const DashboardLayout = ({ page }) => {
  const { Content } = Layout;

  return (
    <LayoutContextProvider>
      <Div>
        <Layout className='layout'>
          <DashboardLayoutHeader />

          <Layout>
            <DashboardLayoutSidebar />

            <Layout className='antd-main-layout'>
              <Content>
                { page }
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </Div>
    </LayoutContextProvider>
  )
};

export default DashboardLayout;
