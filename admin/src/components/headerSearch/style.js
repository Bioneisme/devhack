import Styled from 'styled-components';

const Div = Styled.div`
    .ant-input{
        border: none;
    }
    .ant-input:focus{
        border: none;
        outline: 0;
        box-shadow: none;
    }
    .certain-category-icon{
        font-size: 16px;
        position: relative;
        bottom: -2px;
        color: ${({ theme, darkMode }) => (darkMode ? `#A8AAB3;` : theme['gray-color'])};
        @media only screen and (max-width: 767px){
            bottom: 0;
        }
        svg{
            margin-top: 4px;
            @media only screen and (max-width: 767px){
                width: 12px;
            }
        }
    }
`;

export { Div };
