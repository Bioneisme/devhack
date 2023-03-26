import React from 'react';
import styled from 'styled-components';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { Dropdown } from '../../dropdown/dropdown';
import { Button } from '../../buttons/buttons';
import { Checkbox } from '../../checkbox/checkbox';

const CardWrapper = styled.figure`
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  margin-bottom: 0;
  .card-short {
    .card-short__title {
      padding: 25px 25px 0;
    }
    .card-short__content {
      padding: 0 25px;
      p {
        color: ${({ theme }) => theme['gray-color']};
      }
    }
    .card-short__title {
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 18px;
      img {
        max-width: 50px;
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 20px;
      }
    }
    .card-short__bottom {
      border-top: 1px solid ${({ theme }) => theme['border-color-light']};
      padding: 20px 25px 25px;
      .card-short-actions {
        .ant-btn-circle {
          border-radius: 42px;
          ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 16px;
          svg,
          img,
          i {
            color: ${({ theme }) => theme['extra-light-color']};
          }
        }
        .content-action {
          display: flex;
          align-items: center;
          .ant-dropdown-trigger {
            svg,
            img,
            i {
              color: ${({ theme }) => theme['extra-light-color']};
            }
          }
        }
      }
      .card-short-checkbox {
        display: none;
      }
      .content-installed {
        display: none !important;
      }
      .content-not-installed.content-action {
        justify-content: flex-end;
      }
      &.installed {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .content-not-installed {
          display: none;
        }
        .content-installed {
          display: flex !important;
        }
        .card-short-checkbox {
          display: block !important;
          .ant-checkbox-checked {
            &:after {
              border-color: ${({ theme }) => theme['success-color']};
            }
            .ant-checkbox-inner {
              border-color: ${({ theme }) => theme['success-color']};
              background: ${({ theme }) => theme['success-color']};
              &:hover {
                border-color: ${({ theme }) => theme['success-color']};
                background: ${({ theme }) => theme['success-color']};
                color: #fff;
              }
            }
          }
          span {
            color: ${({ theme }) => theme['success-color']};
          }
        }
      }
    }
  }
`;

const SampleCardSeven = ({ item }) => {
  const { installed, content, title, img } = item;
  return (
    <CardWrapper>
      <div className="card-short">
        <h4 className="card-short__title align-v-center">
          <img src={`../../../${img}`} alt="" />
          <span>{title}</span>
        </h4>
        <div className="card-short__content">
          <p>{content}</p>
        </div>
        <div className={installed ? 'card-short__bottom installed' : 'card-short__bottom'}>
          <div className="card-short-checkbox">
            <Checkbox defaultChecked>Installed</Checkbox>
          </div>
          <div className="card-short-actions">
            <div className="content-installed content-action">
              <Button type="primary" size="small" shape="circle" outlined>
                Open
              </Button>
              <div className="more">
                <Dropdown
                  action={['click']}
                  className="wide-dropdwon"
                  content={
                    <>
                      <Link to="#">Edit</Link>
                      <Link to="#">Delete</Link>
                      <Link to="#">View</Link>
                    </>
                  }
                >
                  <Link to="#">
                    <FeatherIcon icon="more-horizontal" />
                  </Link>
                </Dropdown>
              </div>
            </div>
            <div className="content-not-installed content-action">
              <Button type="primary" size="small" shape="circle" raised>
                Install
              </Button>
              <div className="more">
                <Dropdown
                  action={['click']}
                  className="wide-dropdwon"
                  content={
                    <>
                      <Link to="#">Edit</Link>
                      <Link to="#">Delete</Link>
                      <Link to="#">View</Link>
                    </>
                  }
                >
                  <Link to="#">
                    <FeatherIcon icon="more-horizontal" />
                  </Link>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

SampleCardSeven.propTypes = {
  item: propTypes.object,
};

SampleCardSeven.defaultProps = {
  item: {
    id: 1,
    title: 'Adobe CC',
    installed: true,
    content: 'Lorem Ipsum is simply dummy text of the and the typesetting industry.',
    img: 'static/img/icon/adobe.svg',
  },
};

export default SampleCardSeven;
