import Styled from 'styled-components';

const InfoWraper = Styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 16px 0;        
    .head-example{
        text-decoration: none;
        color: ${({ theme }) => theme['text-color-secondary']};
        box-shadow: none;
        padding: 0px 8px;
        ${({ darkMode }) => (darkMode ? `color: #A8AAB3;` : '')};
    }
    .message .ant-badge-dot{
        background: green
    }
    .ant-badge{
        .ant-badge-dot{
            ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 50% !important;
        }
    }
    .flag-select{
        padding-bottom: 0;
        .flag-select__option{
            margin: 0;
            img{
                top: 0;
            }
        }
        .flag-select__btn{
            line-height: 0;
            padding-right: 0;
            cursor: pointer;
        }
        .flag-select__btn:after{
            content: none;
        }
        .flag-select__options{
            width: 120px;
            padding-top: 0;
            margin: 0;
            right: 0;
            top: 30px;
            display: block;
            .flag-select__option{
                line-height: normal;
                display: block;
                padding: 5px 10px;
                span{
                    width: auto !important;
                    height: auto !important;
                    display: block;
                }
            }
        }
    }
    .message, .notification, .settings, .support, .flag-select, .nav-author{
        display: flex;
        span, a{
            display: block;
            line-height: normal;
            margin: 0 3px;
        }
    }
    .nav-author{
        a.ant-dropdown-trigger{
            img{
                max-width: 20px;
            }
        }
    }

    .flag-select {
        ul{
            width: 170px !important;
            padding: 12px 0;
            background: #fff;
            border: 0 none;
            box-shadow: 0 5px 30px ${({ theme }) => theme['gray-solid']}15;
            li{
                &:first-child{
                    margin-top: 12px;
                }
                &:hover{
                    background: ${({ theme }) => theme['primary-color']}05;
                }
                span{
                    display: flex !important;
                    align-items: center;
                    padding: 2px 10px;
                    img{
                        border-radius: 50%;
                    }
                    span{
                        font-weight: 500;
                        color: ${({ theme }) => theme['gray-color']};
                        padding: 0;
                        margin-left: 10px;
                    }
                }
            }
        }
    }
`;

const SettingDropdwon = Styled.div`
    .setting-dropdwon{
        max-width: 700px;
        padding: 4px 0;
        .setting-dropdwon__single{
            align-items: flex-start;
            padding: 16px 20px;
            margin-bottom: 0;
            position: relative;
            &:after{
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                box-shadow: 0 5px 20px ${({ theme }) => theme['gray-solid']}15;
                z-index: 1;
                content: '';
                opacity: 0;
                visibility: hidden;
            }
            &:hover{
                &:after{
                    opacity: 1;
                    visibility: visible;
                }
            }
            h1{
                font-size: 15px;
                font-weight: 500;
                margin: -4px 0 2px;
            }
            p{
                margin-bottom: 0;
                color: ${({ theme }) => theme['gray-solid']};
            }
            img{
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 16px;
                transform: ${({ theme }) => (theme.rtl ? 'rotatey(180deg)' : 'rotatey(0deg)')};
            }
            figcaption{
                text-align: ${({ theme }) => (!theme.rtl ? 'left' : 'right')}
            }
        }
    }
`;

const NestedDropdwon = Styled.div`
    .support-dropdwon{
        padding: 10px 15px;
        text-align: ${({ theme }) => (!theme.rtl ? 'left' : 'right')};
        ul{
            &:not(:last-child){
                margin-bottom: 16px;
            }
            h1{
                font-size: 14px;
                font-weight: 400;
                color: ${({ theme }) => theme['light-color']};
            }
            li{
                a{
                    font-weight: 500;
                    padding: 4px 16px;
                    color: ${({ theme }) => theme['dark-color']};
                    &:hover{
                        background: #fff;
                        color: ${({ theme }) => theme['primary-color']};
                    }
                }
            }
        }
    }
`;

const UserDropDwon = Styled.div`
    .user-dropdwon{
        max-width: 280px;
        .user-dropdwon__info{
            display: flex;
            align-items: flex-start;
            padding: 20px 25px;
            border-radius: 8px;
            margin-bottom: 12px;
            background: ${({ theme }) => theme['bg-color-normal']};
            img{
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 15px;
            }
            figcaption{
                h1{
                    font-size: 14px;
                    margin-bottom: 2px;
                    color:  ${({ theme }) => theme['dark-color']};
                }
                p{
                    margin-bottom: 0px;
                    font-size: 13px;
                    color: ${({ theme }) => theme['gray-solid']};
                }
            }
        }
        .user-dropdwon__links{
            a{
                width: calc(100% + 30px);
                left: -15px;
                right: -15px;
                display: inline-flex;
                align-items: center;
                padding: 10px 12px;
                font-size: 14px;
                transition: .3s;
                color: ${({ theme }) => theme['light-color']};
                &:hover{
                    background: ${({ theme }) => theme['primary-color']}05;
                    color: ${({ theme }) => theme['primary-color']};
                    ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 22px;
                }
                svg{
                    width: 16px;
                    transform: ${({ theme }) => (theme.rtl ? 'rotateY(180deg)' : 'rotateY(0deg)')};
                    ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 14px;
                }
            }
        }
        .user-dropdwon__bottomAction{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 13px;
            font-weight: 500;
            text-align: center;
            position: relative;
            width: calc(100% + 30px);
            left: -15px;
            right: -15px;
            height: calc(100% + 15px);
            bottom: -15px;
            border-radius: 0 0 6px 6px;
            padding: 15px 0;
            background: ${({ theme }) => theme['bg-color-light']};
            color: ${({ theme }) => theme['light-light']};
            svg{
                width: 15px;
                height: 15px;
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 8px;
            }
        }
    }
`;

const AntdTopDropdwon = Styled.div`
    .antd-top-dropdwon__title .title-text {        
        ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 10px;
    }
    .antd-top-dropdwon__content figcaption .antd-top-dropdwonText {
        min-width: 216px;
        ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 15px;
    }
    .antd-top-dropdwon__content .notification-icon {
        width: 39.2px;
        height: 32px;
        ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 15px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .antd-top-dropdwon__content .notification-icon.bg-primary {
        background: #5F63F215;
        color: #5F63F2;
    }
    .antd-top-dropdwon__content .notification-icon.bg-secondary {
        background: #FF69A515;
        color: #FF69A5;
    }
    .antd-top-dropdwon__content .notification-icon svg {
        width: 18px;
        height: 18px;
    }
    .antd-top-dropdwon__content .notification-content {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }  

    .antd-top-dropdwon__content figcaption span {
        ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 0;
    }

    .notification-text h1 {
        font-size: 14px;
        font-weight: 400;
        color: #5A5F7D;
        margin-bottom: 4px;
    }

    .notification-text h1 span {
        color: #5F63F2;
        font-weight: 500;
        ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 0;
    }

    .notification-text p {
        font-size: 12px;
        color: #ADB4D2;
        margin-bottom: 0;
        text-align: ${({ theme }) => (!theme.rtl ? 'left' : 'right')}
    }
`;

const NavAuth = Styled.span`
    i, svg, img {
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 8px;
    }
`;

export { InfoWraper, SettingDropdwon, NestedDropdwon, UserDropDwon, AntdTopDropdwon, NavAuth };
