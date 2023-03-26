import Styled from 'styled-components';

const Figure2 = Styled.figure`
    position: relative;
    padding: 20px 0px 30px;
    margin-bottom: 0;
    img {
        position: absolute;
        bottom : -15px;
        right : 0;
        ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 0;
    }
    figcaption{
        h2{
            font-size: 30px;
            font-weight: 600;
            color: #fff;
            margin-bottom: 14px;
        }
        p{
            font-size: 15px;
            opacity: .7;
            color: #fff;
        }
        button{
            margin-top: 26px;
            color: ${({ theme }) => theme['primary-color']} !important;
            &:focus{
                background-color: #fff !important;
            }
            &.ant-btn-lg{
                height: 44px;
                font-size: 15px;
                font-weight: 500;
            }
        }
    }
`;

const Figure3 = Styled.figure`
    position: relative;    
    min-height: 180px;
    margin-bottom: 0;
    padding: 18px 0 0;
    &.theme-wide{
        padding: 0;
        min-height: 100%;
        width: 100%;
        figcaption{
            h2{
                font-size: 24px;
                font-weight: 600;
                margin-bottom: 12px;
            }
            p{
                margin-bottom: 18px;
            }
        }
    }
    &.theme-3{
        padding: 0px 0 30px;
        img{
            bottom: -55px;
        }
        figcaption{  
            h2{
                margin-bottom: 10px;
            }
            p{
                margin-bottom: 18px;
            }
        }
    }
    h2{
        font-size: 30px;
        font-weight: 600;
        color: #fff;
        margin-bottom: 25px;
    }
    p{
        color: #fff;
        opacity: .7;
    }
    img {
        position: absolute;
        bottom: -65px;
        ${({ theme }) => (theme.rtl ? 'left' : 'right')}: -25px;
        @media only screen and (max-width: 1599px){
            max-width: 150px;
        }
    }
    button{
        color: ${({ theme }) => theme['primary-color']} !important;
        &:focus{
            background-color: #fff !important;
        }
        &.ant-btn-lg{
            height: 44px;
            font-size: 15px;
            font-weight: 500;
        }
    }
`;

const Figure6 = Styled.figure`
    position: relative;  
    margin-bottom: 0;
    direction: ${({ theme }) => (theme.rtl ? 'rtl' : 'ltr')};
    figcaption{
        h2{
            font-size: 22px;
            font-weight: 600;
            color: #FF4D4F;
            margin: 15px 0 18px;
        }
    }
    
`;

const Figure7 = Styled.figure`
    display: flex;  
    margin-bottom: 0;
    align-items: center;
    @media only screen and (max-width: 575px){
        flex-direction: column;
    }
    img{
        @media only screen and (max-width: 575px){
            margin-bottom: 15px;
        }
    }
    figcaption{
        @media only screen and (max-width: 575px){
            text-align: center;
            margin-left: 0px;
        }
    }
`;

const BannerWrapper = Styled.figure`
    .ant-card{
        margin-bottom: 70px !important;
        @media only screen and (max-width: 1199px){
            margin-bottom: 50px !important;
        }
        @media only screen and (max-width: 991px){
            margin-bottom: 30px !important;
        }
    }
`;

const BannerNormal = Styled.div`
    .ant-card{
        margin-bottom: 70px !important;
        box-shadow: 0 5px 20px ${({ theme }) => theme['dark-color']}15;
        @media only screen and (max-width: 1199px){
            margin-bottom: 50px !important;
        }
        @media only screen and (max-width: 991px){
            margin-bottom: 30px !important;
        }
    }
    .ant-card-body{
        padding: 35px 30px 46px !important;
    }
    h2{
        font-size: 30px;
        font-weight: 600;
        margin-bottom: 12px;
        color: ${({ theme }) => theme['dark-color']};
    }
    p{
        font-size: 15px;
        font-weight: 400;
        margin-bottom: 18px;
        line-height: 1.667;
        color: ${({ theme }) => theme['gray-color']};
    }
    .ant-btn{
        height: 38px;
    }
    &.theme-wide{
        .ant-card-body{
            padding: 50px 25px 50px 0 !important;
            padding: ${({ theme }) => (theme.rtl ? '50px 25px 50px 25px' : '50px 25px 50px 0')}!important;
        }
        figcaption{
            ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 18px;
            h2{
                font-size: 23px;
                font-weight: 600;
                margin-bottom: 8px;
            }
            .ant-btn-lg{
                padding: 0 16.24px;
                font-size: 15px;
                height: 44px;
            }
        }
    }
`;

const BannerCarouselWrap = Styled.div`
    margin-bottom: 70px;
    border-radius: 10px;
    padding: 60px 0 105px;
    background-color: ${({ theme }) => theme['primary-color']};
    @media only screen and (max-width: 1199px){
        margin-bottom: 50px !important;
    }
    @media only screen and (max-width: 991px){
        margin-bottom: 30px !important;
    }
    .ant-carousel{
        .slick-dots{
            &.slick-dots-bottom{
                bottom: -35px;
            }
            li{
                width: auto;
                &.slick-active{
                    width: auto;
                }
                button{
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                }
            }
        }
    }
    .banner-signle{
        display: flex !important;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .banner-single__content{
            margin-top: 28px;
            text-align: center;
            h3{
                font-size: 24px;
                font-weight: 600; 
                color: #fff;
                margin-bottom: 8px;
            }
            p{
                font-size: 15px;
                color: #fff;
                &:last-child{
                    margin-bottom: 0;
                }
            }
        }
    }
`;

const BannerLongWrap = Styled.div`
    margin-bottom: 70px;
    @media only screen and (max-width: 1199px){
        margin-bottom: 50px !important;
    }
    @media only screen and (max-width: 991px){
        margin-bottom: 30px !important;
    }
    .banner-long-inner{
        padding: 30px 0;
        text-align: center;
        border-radius: 10px;
        background-color: #fff;
        h2{
            font-size: 22px;
            font-weight: 600;
            margin-bottom: 28px;
        }
    }
`;

const BannerCardWrap = Styled.div`
    position: relative
    margin-bottom: 
    @media only screen and (max-width: 1199px){
        margin-bottom: 50px !important;
    }
    @media only screen and (max-width: 991px){
        margin-bottom: 30px !important;
    }
    h2{
        font-size: 30px;
        font-weight: 600;
        color: #fff;
        margin-bottom: 20px;
    }
    .banner-card-inner{
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center bottom;
        min-height: 450px;
        padding: 38px 40px 40px 40px;
        border-radius: 10px;
        @media only screen and (max-width: 575px){
            padding: 28px 30px 30px 30px;
        }
        &.theme-2{
            h2{
                margin-bottom: 18px;
            }
            p{
                font-size: 15px;
                color: #fff;
                opacity: .70;
                max-width: 290px;
                margin-bottom: 20px;
            }
            img{
                max-width: 285px;
            }
        }
        button{
            height: 44px;
            font-size: 15px;
            font-weight: 500;
            color: ${({ theme }) => theme['primary-color']} !important;
        }
        img{
            position: absolute;
            bottom: 0;
            max-width: 460px;
            ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 0;
        }
    }
`;

const BannerCtaWrap = Styled.div`
    border-radius: 10px;
    margin-bottom: 30px;
    .banner-cta{
        min-height: 224px;
        justify-content: flex-end;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: left;
        border-radius: 10px;
        @media only screen and (max-width: 575px){
            background-position: center;
        }
        .banner-cta__content{
            text-align: center;
            margin-top: -8px;
            padding: ${({ theme }) => (theme.rtl ? '30px 0px 30px 30px' : '30px 30px 30px 0px')};
            h2{
                font-size: 30px;
                font-weight: 600;
            }
            button{
                margin-top: 10px;
                height: 44px;
            }
        }
        &.theme-2{
            justify-content: flex-start;
            background-position: right;
            @media only screen and (max-width: 575px){
                background-position: center;
            }
            .banner-cta__content{
                padding: ${({ theme }) => (theme.rtl ? '30px 30px 30px 0px' : '30px 0px 30px 30px')};
                text-align: ${({ theme }) => (theme.rtl ? 'right' : 'left')}
                h2{
                    margin-bottom: 10px;
                }
                p{
                    font-size: 15px;
                    opacity: .70;
                }
            } 
        }
    }
`;

export {
  Figure2,
  Figure3,
  Figure6,
  Figure7,
  BannerWrapper,
  BannerNormal,
  BannerCarouselWrap,
  BannerLongWrap,
  BannerCardWrap,
  BannerCtaWrap,
};
