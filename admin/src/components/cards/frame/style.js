import Styled from 'styled-components';
import { Card } from 'antd';

const BtnWraper = theme => `
    .ant-card-head {
      display: flex;
      justify-content: space-evenly;
      .ant-card-head-wrapper{
        width: 100%;
      }
      .ant-tabs.ant-tabs-top.ant-card-head-tabs.ant-tabs-large.ant-tabs-line{
        width: 100%;
        display: block;
      }
      .ant-tabs-nav-scroll {
        display: flex;
        justify-content: flex-end;
      }
      .ant-tabs-ink-bar.ant-tabs-ink-bar-animated {
        display: none !important;
      }
      .ant-tabs-nav .ant-tabs-tab {
        border-radius: 2px;
        height: 30px;
        margin: 0px;
        ${theme.rtl ? 'margin-right' : 'margin-left'}: -1px;
        display: inline-flex;
        align-items: center;
        border: 1px solid ${theme['border-color-base']};
        background: #fff;
        span svg {
          ${theme.rtl ? 'padding-right' : 'padding-left'}: 5px !important;
        }
      }
      .ant-tabs-nav .ant-tabs-tab-active {
        font-weight: 500;
        border: 1px solid ${theme['primary-color']};
        background: ${theme['primary-color']};
        color: #fff;
        border-radius: 2px;
        height: 30px;
        margin: 0px;
        display: inline-flex;
        align-items: center;
      }
      .ant-tabs-bar {
        border: none;
      }
      .ant-tabs-nav-wrap {
        margin-bottom: 0px;
        overflow: hidden;
    }
    }
    .ant-card-head .ant-tabs.ant-tabs-top.ant-card-head-tabs.ant-tabs-large.ant-tabs-line {
      width: 100%;
      display: block;
      justify-content: flex-end;
      height: 73px;
      padding-top: 8px;
  }
`;

const CardFrame = Styled(Card)`
  ${({ isbutton, theme }) => isbutton && BtnWraper(theme)}
  margin-bottom: 25px !important;
  .ant-card-head{
    border-color: #F1F2F6;
  }
  .ant-card-head .ant-card-head-title {
    padding: 18px 0;
  }
  .ant-card-head-title .ant-page-header-heading-title{
    font-weight: 500;
  }
  .ant-card-body{
    padding: ${({ bodypadding }) => (bodypadding ? `${bodypadding} !important` : '25px')};
    table{
      .ant-tag{
        line-height: 18px;
        border: 0 none;
        text-transform: uppercase;
        font-size: 10px;
        color: #fff;
        &.early{
          background: ${({ theme }) => theme['primary-color']};
        }
        &.late{
          background: ${({ theme }) => theme['warning-color']};
        }
        &.complete{
          background: ${({ theme }) => theme['success-color']};
        }
        &.progress{
          background: ${({ theme }) => theme['danger-color']};
        }
      }
    }
  }
  .ant-card.ant-card-bordered {
      border-radius: 5px;
      overflow: hidden;
      border: none;
  }
  .custom-label {
    font-size: 13px;
    color: #868eae;
    display: inline-flex;
    align-items: center;
  }
  .custom-label:not(:last-child) {
    ${({ theme }) => (theme.rtl ? ' margin-left' : ' margin-right')} : 20px;
  }

  .custom-label span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    ${({ theme }) => (theme.rtl ? ' margin-left' : ' margin-right')}: 7px;
  }
  

  .ant-card-extra .ant-dropdown-trigger {
    line-height: 0;
    order: 1;
    ${({ theme }) => (!theme.rtl ? ' margin-left' : ' margin-right')}: 20px !important;
  }

  .growth-downward h1 sub,
  .growth-upward h1 sub {
    font-size: 14px;
    font-weight: 600;
    bottom: 0;
    ${({ theme }) => (!theme.rtl ? ' left' : ' right')}: 5px;
  }
 
`;

export { CardFrame };
