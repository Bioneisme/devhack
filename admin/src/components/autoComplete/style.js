import Styled from 'styled-components';
import { AutoComplete } from 'antd';

const AutoCompleteStyled = Styled(AutoComplete)`
    display: block !important;
    .ant-select-selection-placeholder{
        padding: 0 20px !important;
        text-align: ${({ theme }) => (theme.rtl ? 'right' : 'left')};
        ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 2px !important;
    }
    .ant-select-selector{
        display: flex;
        align-items: center;
        height: 37px !important;
        padding: 0 !important;
        border-color: #E3E6EF !important;
        .ant-select-selection-search{
            .ant-input-affix-wrapper{
                padding: 0 20px;
            }
            .ant-input-suffix{
                svg,
                i{
                    color: ${({ theme }) => theme['extra-light-color']};
                }
            }
        }
    }
    .ant-select-selector input{
        height: 33px !important;
        ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 0 !important;
    }
    .ant-select-selection-search{
        ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 20px;
        width: auto !important;
        @media only screen and (max-width: 575px){
            width: 100% !important;
        }
    }
    .ant-select-selection-search textarea.ant-input{
        padding: 12px 20px;
    }
    .ant-input-affix-wrapper{
        padding: 0 20px;
    }
    .ant-input-affix-wrapper input{
        height: 38px !important;
    }
    .ant-input-affix-wrapper .ant-input-suffix .search-btn{
        height: 38px;
        border-radius: ${({ theme }) => (theme.rtl ? '4px 0 0 4px' : '0 4px 4px 0')};
        svg,
        i{
            color: #fff;
        }
    }
`;

export { AutoCompleteStyled };
