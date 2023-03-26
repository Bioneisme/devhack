import actions from './actions';

const initialState = {
  forcastData: null,
  foLoading: false,
  youtubeSubscribeData: null,
  yuLoading: false,
  closeDealData: null,
  cdLoading: false,
  recentDealData: null,
  recLoading: false,
  socialTrafficData: null,
  soLoading: false,
  twitterOverviewData: null,
  twLoading: false,
  instagramOverviewData: null,
  inLoading: false,
  linkdinOverviewData: null,
  liLoading: false,
  cashFlowData: null,
  cfLoading: false,
  incomeData: null,
  icLoading: false,
  performanceData: null,
  perLoading: false,
  trafficChanelData: null,
  tcLoading: false,
  deviceData: null,
  dvLoading: false,
  landingPageData: null,
  lpLoading: false,
  regionData: null,
  reLoading: false,
  generatedData: null,
  geLoading: false,
  topSaleData: null,
  tsLoading: false,
  locationData: null,
  loLoading: false,
  error: null,
};

const {
  FORCAST_OVERVIEW_BEGIN,
  FORCAST_OVERVIEW_SUCCESS,
  FORCAST_OVERVIEW_ERR,

  YOUTUBE_SUBSCRIBE_BEGIN,
  YOUTUBE_SUBSCRIBE_SUCCESS,
  YOUTUBE_SUBSCRIBE_ERR,

  CLOSE_DEAL_BEGIN,
  CLOSE_DEAL_SUCCESS,
  CLOSE_DEAL_ERR,

  RECENT_DEAL_BEGIN,
  RECENT_DEAL_SUCCESS,
  RECENT_DEAL_ERR,

  SOCIAL_TRAFFIC_BEGIN,
  SOCIAL_TRAFFIC_SUCCESS,
  SOCIAL_TRAFFIC_ERR,

  TWITTER_OVERVIEW_BEGIN,
  TWITTER_OVERVIEW_SUCCESS,
  TWITTER_OVERVIEW_ERR,

  INSTAGRAM_OVERVIEW_BEGIN,
  INSTAGRAM_OVERVIEW_SUCCESS,
  INSTAGRAM_OVERVIEW_ERR,

  LINKDIN_OVERVIEW_BEGIN,
  LINKDIN_OVERVIEW_SUCCESS,
  LINKDIN_OVERVIEW_ERR,

  CASH_FLOW_BEGIN,
  CASH_FLOW_SUCCESS,
  CASH_FLOW_ERR,

  INCOME_BEGIN,
  INCOME_SUCCESS,
  INCOME_ERR,

  PERFORMANCE_BEGIN,
  PERFORMANCE_SUCCESS,
  PERFORMANCE_ERR,

  UPDATE_LOADING_BEGIN,
  UPDATE_LOADING_SUCCESS,
  UPDATE_LOADING_ERR,

  TRAFFIC_CHANEL_BEGIN,
  TRAFFIC_CHANEL_SUCCESS,
  TRAFFIC_CHANEL_ERR,

  DEVICE_BEGIN,
  DEVICE_SUCCESS,
  DEVICE_ERR,

  LANDING_PAGE_BEGIN,
  LANDING_PAGE_SUCCESS,
  LANDING_PAGE_ERR,

  REGION_BEGIN,
  REGION_SUCCESS,
  REGION_ERR,

  GENERATED_BEGIN,
  GENERATED_SUCCESS,
  GENERATED_ERR,

  TOP_SALE_BEGIN,
  TOP_SALE_SUCCESS,
  TOP_SALE_ERR,

  LOCATION_DATA_BEGIN,
  LOCATION_DATA_SUCCESS,
  LOCATION_DATA_ERR,
} = actions;

const chartContentReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case LOCATION_DATA_BEGIN:
      return {
        ...state,
        loLoading: true,
      };
    case LOCATION_DATA_SUCCESS:
      return {
        ...state,
        locationData: data,
        loLoading: false,
      };
    case LOCATION_DATA_ERR:
      return {
        ...state,
        error: err,
        loLoading: false,
      };

    case TOP_SALE_BEGIN:
      return {
        ...state,
        tsLoading: true,
      };
    case TOP_SALE_SUCCESS:
      return {
        ...state,
        topSaleData: data,
        tsLoading: false,
      };
    case TOP_SALE_ERR:
      return {
        ...state,
        error: err,
        tsLoading: false,
      };

    case GENERATED_BEGIN:
      return {
        ...state,
        geLoading: true,
      };
    case GENERATED_SUCCESS:
      return {
        ...state,
        generatedData: data,
        geLoading: false,
      };
    case GENERATED_ERR:
      return {
        ...state,
        error: err,
        geLoading: false,
      };

    case REGION_BEGIN:
      return {
        ...state,
        reLoading: true,
      };
    case REGION_SUCCESS:
      return {
        ...state,
        regionData: data,
        reLoading: false,
      };
    case REGION_ERR:
      return {
        ...state,
        error: err,
        reLoading: false,
      };

    case DEVICE_BEGIN:
      return {
        ...state,
        dvLoading: true,
      };
    case DEVICE_SUCCESS:
      return {
        ...state,
        deviceData: data,
        dvLoading: false,
      };
    case DEVICE_ERR:
      return {
        ...state,
        error: err,
        dvLoading: false,
      };

    case LANDING_PAGE_BEGIN:
      return {
        ...state,
        lpLoading: true,
      };
    case LANDING_PAGE_SUCCESS:
      return {
        ...state,
        landingPageData: data,
        lpLoading: false,
      };
    case LANDING_PAGE_ERR:
      return {
        ...state,
        error: err,
        lpLoading: false,
      };

    case TRAFFIC_CHANEL_BEGIN:
      return {
        ...state,
        tcLoading: true,
      };
    case TRAFFIC_CHANEL_SUCCESS:
      return {
        ...state,
        trafficChanelData: data,
        tcLoading: false,
      };
    case TRAFFIC_CHANEL_ERR:
      return {
        ...state,
        error: err,
        tcLoading: false,
      };

    case UPDATE_LOADING_BEGIN:
      return {
        ...state,
        perLoading: true,
      };
    case UPDATE_LOADING_SUCCESS:
      return {
        ...state,
        perLoading: false,
      };
    case UPDATE_LOADING_ERR:
      return {
        ...state,
        error: err,
        perLoading: false,
      };

    case PERFORMANCE_BEGIN:
      return {
        ...state,
        perLoading: true,
      };
    case PERFORMANCE_SUCCESS:
      return {
        ...state,
        performanceData: data,
        perLoading: false,
      };
    case PERFORMANCE_ERR:
      return {
        ...state,
        error: err,
        perLoading: false,
      };

    case CASH_FLOW_BEGIN:
      return {
        ...state,
        cfLoading: true,
      };
    case CASH_FLOW_SUCCESS:
      return {
        ...state,
        cashFlowData: data,
        cfLoading: false,
      };
    case CASH_FLOW_ERR:
      return {
        ...state,
        error: err,
        cfLoading: false,
      };

    case INCOME_BEGIN:
      return {
        ...state,
        icLoading: true,
      };
    case INCOME_SUCCESS:
      return {
        ...state,
        incomeData: data,
        icLoading: false,
      };
    case INCOME_ERR:
      return {
        ...state,
        error: err,
        icLoading: false,
      };

    case LINKDIN_OVERVIEW_BEGIN:
      return {
        ...state,
        liLoading: true,
      };
    case LINKDIN_OVERVIEW_SUCCESS:
      return {
        ...state,
        linkdinOverviewData: data,
        liLoading: false,
      };
    case LINKDIN_OVERVIEW_ERR:
      return {
        ...state,
        error: err,
        liLoading: false,
      };

    case INSTAGRAM_OVERVIEW_BEGIN:
      return {
        ...state,
        inLoading: true,
      };
    case INSTAGRAM_OVERVIEW_SUCCESS:
      return {
        ...state,
        instagramOverviewData: data,
        inLoading: false,
      };
    case INSTAGRAM_OVERVIEW_ERR:
      return {
        ...state,
        error: err,
        inLoading: false,
      };

    case TWITTER_OVERVIEW_BEGIN:
      return {
        ...state,
        twLoading: true,
      };
    case TWITTER_OVERVIEW_SUCCESS:
      return {
        ...state,
        twitterOverviewData: data,
        twLoading: false,
      };
    case TWITTER_OVERVIEW_ERR:
      return {
        ...state,
        error: err,
        twLoading: false,
      };

    case FORCAST_OVERVIEW_BEGIN:
      return {
        ...state,
        foLoading: true,
      };
    case FORCAST_OVERVIEW_SUCCESS:
      return {
        ...state,
        forcastData: data,
        foLoading: false,
      };
    case FORCAST_OVERVIEW_ERR:
      return {
        ...state,
        error: err,
        foLoading: false,
      };

    case SOCIAL_TRAFFIC_BEGIN:
      return {
        ...state,
        soLoading: true,
      };
    case SOCIAL_TRAFFIC_SUCCESS:
      return {
        ...state,
        socialTrafficData: data,
        soLoading: false,
      };
    case SOCIAL_TRAFFIC_ERR:
      return {
        ...state,
        error: err,
        soLoading: false,
      };

    case YOUTUBE_SUBSCRIBE_BEGIN:
      return {
        ...state,
        yuLoading: true,
      };
    case YOUTUBE_SUBSCRIBE_SUCCESS:
      return {
        ...state,
        youtubeSubscribeData: data,
        yuLoading: false,
      };
    case YOUTUBE_SUBSCRIBE_ERR:
      return {
        ...state,
        error: err,
        yuLoading: false,
      };

    case CLOSE_DEAL_BEGIN:
      return {
        ...state,
        cdLoading: true,
      };
    case CLOSE_DEAL_SUCCESS:
      return {
        ...state,
        closeDealData: data,
        cdLoading: false,
      };
    case CLOSE_DEAL_ERR:
      return {
        ...state,
        error: err,
        cdLoading: false,
      };

    case RECENT_DEAL_BEGIN:
      return {
        ...state,
        recLoading: true,
      };
    case RECENT_DEAL_SUCCESS:
      return {
        ...state,
        recentDealData: data,
        recLoading: false,
      };
    case RECENT_DEAL_ERR:
      return {
        ...state,
        error: err,
        recLoading: false,
      };

    default:
      return state;
  }
};

export { chartContentReducer };
