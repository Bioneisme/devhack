import Styled from 'styled-components';

const Card = Styled.div`
    .ant-card{
        border-radius: 15px !important;
    }
    .ant-card .ant-card-body{        
        border-radius: 15px !important;
        color: ${({ theme }) => theme['gray-color']};    
        padding-bottom: 20px !important;
        padding-top: 20px !important;
        transition: .35s;
        h4{
            display: flex;
            align-items: center;
            font-size: 16px;
            margin-bottom: 16px;
            color: ${({ theme }) => theme['dark-color']};
            justify-content: space-between;
            svg{
                color: #5A5F7D !important;
                cursor: move;
            }
            .status-bullet{
                position: relative;
                bottom: 2px;
                min-width: 7px;
                height: 7px;
                display: inline-block;
                border-radius: 50%;
               ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')} : 8px;
               &.personal{
                background: #5F63F2;
               }
               &.work{
                background: #20C997;
               }
               &.social{
                background: #FA8B0C;
               }
               &.important{
                background: #2C99FF;
               }
            }
        }
        .actions{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 18px;
            .star{
                svg,
                i,
                span{
                    color: ${({ theme }) => theme['gray-color']} !important;
                }
                &.active{
                    svg,
                    i,
                    span{
                        color: ${({ theme }) => theme['warning-color']} !important;
                    } 
                } 
            }
            span{
                display: inline-block;
                margin: -5px;
                a {
                    margin: 5px;
                    svg,
                    i,
                    span{
                        color: ${({ theme }) => theme['gray-color']} !important;
                    }
                }
            }
            .ant-dropdown-trigger{
                svg{
                    color: #868EAE;
                }
            }
        }        
    } 
    &.personal .ant-card .ant-card-body{
        background: #5F63F240;
        &:hover{
            background: #5F63F290;
        }
    }
    &.work .ant-card .ant-card-body{
        background: #20C99740;
        &:hover{
            background: #20C99790;
        }
    }
    &.social .ant-card .ant-card-body{
        background: #FA8B0C40;
        &:hover{
            background: #FA8B0C90;
        }
    }
    &.important .ant-card .ant-card-body{
        background: #2C99FF40;
        &:hover{
            background: #2C99FF90;
        }
    }  
`;

export { Card };
