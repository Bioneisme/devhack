const actions = {
  FORCAST_OVERVIEW_BEGIN: 'FORCAST_OVERVIEW_BEGIN',
  FORCAST_OVERVIEW_SUCCESS: 'FORCAST_OVERVIEW_SUCCESS',
  FORCAST_OVERVIEW_ERR: 'FORCAST_OVERVIEW_ERR',

  YOUTUBE_SUBSCRIBE_BEGIN: 'YOUTUBE_SUBSCRIBE_BEGIN',
  YOUTUBE_SUBSCRIBE_SUCCESS: 'YOUTUBE_SUBSCRIBE_SUCCESS',
  YOUTUBE_SUBSCRIBE_ERR: 'YOUTUBE_SUBSCRIBE_ERR',

  CLOSE_DEAL_BEGIN: 'CLOSE_DEAL_BEGIN',
  CLOSE_DEAL_SUCCESS: 'CLOSE_DEAL_SUCCESS',
  CLOSE_DEAL_ERR: 'CLOSE_DEAL_ERR',

  RECENT_DEAL_BEGIN: 'RECENT_DEAL_BEGIN',
  RECENT_DEAL_SUCCESS: 'RECENT_DEAL_SUCCESS',
  RECENT_DEAL_ERR: 'RECENT_DEAL_ERR',

  SOCIAL_TRAFFIC_BEGIN: 'SOCIAL_TRAFFIC_BEGIN',
  SOCIAL_TRAFFIC_SUCCESS: 'SOCIAL_TRAFFIC_SUCCESS',
  SOCIAL_TRAFFIC_ERR: 'SOCIAL_TRAFFIC_ERR',

  TWITTER_OVERVIEW_BEGIN: 'TWITTER_OVERVIEW_BEGIN',
  TWITTER_OVERVIEW_SUCCESS: 'TWITTER_OVERVIEW_SUCCESS',
  TWITTER_OVERVIEW_ERR: 'TWITTER_OVERVIEW_ERR',

  INSTAGRAM_OVERVIEW_BEGIN: 'INSTAGRAM_OVERVIEW_BEGIN',
  INSTAGRAM_OVERVIEW_SUCCESS: 'INSTAGRAM_OVERVIEW_SUCCESS',
  INSTAGRAM_OVERVIEW_ERR: 'INSTAGRAM_OVERVIEW_ERR',

  LINKDIN_OVERVIEW_BEGIN: 'LINKDIN_OVERVIEW_BEGIN',
  LINKDIN_OVERVIEW_SUCCESS: 'LINKDIN_OVERVIEW_SUCCESS',
  LINKDIN_OVERVIEW_ERR: 'LINKDIN_OVERVIEW_ERR',

  CASH_FLOW_BEGIN: 'CASH_FLOW_BEGIN',
  CASH_FLOW_SUCCESS: 'CASH_FLOW_SUCCESS',
  CASH_FLOW_ERR: 'CASH_FLOW_ERR',

  INCOME_BEGIN: 'INCOME_BEGIN',
  INCOME_SUCCESS: 'INCOME_SUCCESS',
  INCOME_ERR: 'INCOME_ERR',

  PERFORMANCE_BEGIN: 'PERFORMANCE_BEGIN',
  PERFORMANCE_SUCCESS: 'PERFORMANCE_SUCCESS',
  PERFORMANCE_ERR: 'PERFORMANCE_ERR',

  UPDATE_LOADING_BEGIN: 'UPDATE_LOADING_BEGIN',
  UPDATE_LOADING_SUCCESS: 'UPDATE_LOADING_SUCCESS',
  UPDATE_LOADING_ERR: 'UPDATE_LOADING_ERR',

  TRAFFIC_CHANEL_BEGIN: 'TRAFFIC_CHANEL_BEGIN',
  TRAFFIC_CHANEL_SUCCESS: 'TRAFFIC_CHANEL_SUCCESS',
  TRAFFIC_CHANEL_ERR: 'TRAFFIC_CHANEL_ERR',

  DEVICE_BEGIN: 'DEVICE_BEGIN',
  DEVICE_SUCCESS: 'DEVICE_SUCCESS',
  DEVICE_ERR: 'DEVICE_ERR',

  LANDING_PAGE_BEGIN: 'LANDING_PAGE_BEGIN',
  LANDING_PAGE_SUCCESS: 'LANDING_PAGE_SUCCESS',
  LANDING_PAGE_ERR: 'LANDING_PAGE_ERR',

  REGION_BEGIN: 'REGION_BEGIN',
  REGION_SUCCESS: 'REGION_SUCCESS',
  REGION_ERR: 'REGION_ERR',

  GENERATED_BEGIN: 'GENERATED_BEGIN',
  GENERATED_SUCCESS: 'GENERATED_SUCCESS',
  GENERATED_ERR: 'GENERATED_ERR',

  TOP_SALE_BEGIN: 'TOP_SALE_BEGIN',
  TOP_SALE_SUCCESS: 'TOP_SALE_SUCCESS',
  TOP_SALE_ERR: 'TOP_SALE_ERR',

  LOCATION_DATA_BEGIN: 'LOCATION_DATA_BEGIN',
  LOCATION_DATA_SUCCESS: 'LOCATION_DATA_SUCCESS',
  LOCATION_DATA_ERR: 'LOCATION_DATA_ERR',

  locationBegin: () => {
    return {
      type: actions.LOCATION_DATA_BEGIN,
    };
  },

  locationSuccess: (data) => {
    return {
      type: actions.LOCATION_DATA_SUCCESS,
      data,
    };
  },

  locationErr: (err) => {
    return {
      type: actions.LOCATION_DATA_ERR,
      err,
    };
  },

  topSaleBegin: () => {
    return {
      type: actions.TOP_SALE_BEGIN,
    };
  },

  topSaleSuccess: (data) => {
    return {
      type: actions.TOP_SALE_SUCCESS,
      data,
    };
  },

  topSaleErr: (err) => {
    return {
      type: actions.TOP_SALE_ERR,
      err,
    };
  },

  generatedBegin: () => {
    return {
      type: actions.GENERATED_BEGIN,
    };
  },

  generatedSuccess: (data) => {
    return {
      type: actions.GENERATED_SUCCESS,
      data,
    };
  },

  generatedErr: (err) => {
    return {
      type: actions.GENERATED_ERR,
      err,
    };
  },

  regionBegin: () => {
    return {
      type: actions.REGION_BEGIN,
    };
  },

  regionSuccess: (data) => {
    return {
      type: actions.REGION_SUCCESS,
      data,
    };
  },

  regionErr: (err) => {
    return {
      type: actions.REGION_ERR,
      err,
    };
  },

  deviceBegin: () => {
    return {
      type: actions.DEVICE_BEGIN,
    };
  },

  deviceSuccess: (data) => {
    return {
      type: actions.DEVICE_SUCCESS,
      data,
    };
  },

  deviceErr: (err) => {
    return {
      type: actions.DEVICE_ERR,
      err,
    };
  },

  landingPageBegin: () => {
    return {
      type: actions.LANDING_PAGE_BEGIN,
    };
  },

  landingPageSuccess: (data) => {
    return {
      type: actions.LANDING_PAGE_SUCCESS,
      data,
    };
  },

  landingPageErr: (err) => {
    return {
      type: actions.LANDING_PAGE_ERR,
      err,
    };
  },

  trafficChanelBegin: () => {
    return {
      type: actions.TRAFFIC_CHANEL_BEGIN,
    };
  },

  trafficChanelSuccess: (data) => {
    return {
      type: actions.TRAFFIC_CHANEL_SUCCESS,
      data,
    };
  },

  trafficChanelErr: (err) => {
    return {
      type: actions.TRAFFIC_CHANEL_ERR,
      err,
    };
  },

  updateLoadingBegin: () => {
    return {
      type: actions.UPDATE_LOADING_BEGIN,
    };
  },

  updateLoadingSuccess: (data) => {
    return {
      type: actions.UPDATE_LOADING_SUCCESS,
      data,
    };
  },

  updateLoadingErr: (err) => {
    return {
      type: actions.UPDATE_LOADING_ERR,
      err,
    };
  },

  performanceBegin: () => {
    return {
      type: actions.PERFORMANCE_BEGIN,
    };
  },

  performanceSuccess: (data) => {
    return {
      type: actions.PERFORMANCE_SUCCESS,
      data,
    };
  },

  performanceErr: (err) => {
    return {
      type: actions.PERFORMANCE_ERR,
      err,
    };
  },

  incomeBegin: () => {
    return {
      type: actions.INCOME_BEGIN,
    };
  },

  incomeSuccess: (data) => {
    return {
      type: actions.INCOME_SUCCESS,
      data,
    };
  },

  incomeErr: (err) => {
    return {
      type: actions.INCOME_ERR,
      err,
    };
  },

  cashFlowBegin: () => {
    return {
      type: actions.CASH_FLOW_BEGIN,
    };
  },

  cashFlowSuccess: (data) => {
    return {
      type: actions.CASH_FLOW_SUCCESS,
      data,
    };
  },

  cashFlowErr: (err) => {
    return {
      type: actions.CASH_FLOW_ERR,
      err,
    };
  },

  instagramOverviewBegin: () => {
    return {
      type: actions.INSTAGRAM_OVERVIEW_BEGIN,
    };
  },

  instagramOverviewSuccess: (data) => {
    return {
      type: actions.INSTAGRAM_OVERVIEW_SUCCESS,
      data,
    };
  },

  instagramOverviewErr: (err) => {
    return {
      type: actions.INSTAGRAM_OVERVIEW_ERR,
      err,
    };
  },

  linkdinOverviewBegin: () => {
    return {
      type: actions.LINKDIN_OVERVIEW_BEGIN,
    };
  },

  linkdinOverviewSuccess: (data) => {
    return {
      type: actions.LINKDIN_OVERVIEW_SUCCESS,
      data,
    };
  },

  linkdinOverviewErr: (err) => {
    return {
      type: actions.LINKDIN_OVERVIEW_ERR,
      err,
    };
  },

  twitterOverviewBegin: () => {
    return {
      type: actions.TWITTER_OVERVIEW_BEGIN,
    };
  },

  twitterOverviewSuccess: (data) => {
    return {
      type: actions.TWITTER_OVERVIEW_SUCCESS,
      data,
    };
  },

  twitterOverviewErr: (err) => {
    return {
      type: actions.TWITTER_OVERVIEW_ERR,
      err,
    };
  },

  forcastOverviewBegin: () => {
    return {
      type: actions.FORCAST_OVERVIEW_BEGIN,
    };
  },

  forcastOverviewSuccess: (data) => {
    return {
      type: actions.FORCAST_OVERVIEW_SUCCESS,
      data,
    };
  },

  forcastOverviewErr: (err) => {
    return {
      type: actions.FORCAST_OVERVIEW_ERR,
      err,
    };
  },

  socialTrafficBegin: () => {
    return {
      type: actions.SOCIAL_TRAFFIC_BEGIN,
    };
  },

  socialTrafficSuccess: (data) => {
    return {
      type: actions.SOCIAL_TRAFFIC_SUCCESS,
      data,
    };
  },

  socialTrafficErr: (err) => {
    return {
      type: actions.SOCIAL_TRAFFIC_ERR,
      err,
    };
  },

  youtubeSubscribeBegin: () => {
    return {
      type: actions.YOUTUBE_SUBSCRIBE_BEGIN,
    };
  },

  youtubeSubscribeSuccess: (data) => {
    return {
      type: actions.YOUTUBE_SUBSCRIBE_SUCCESS,
      data,
    };
  },

  youtubeSubscribeErr: (err) => {
    return {
      type: actions.YOUTUBE_SUBSCRIBE_ERR,
      err,
    };
  },

  closeDealBegin: () => {
    return {
      type: actions.CLOSE_DEAL_BEGIN,
    };
  },

  closeDealSuccess: (data) => {
    return {
      type: actions.CLOSE_DEAL_SUCCESS,
      data,
    };
  },

  closeDealErr: (err) => {
    return {
      type: actions.CLOSE_DEAL_ERR,
      err,
    };
  },

  recentDealBegin: () => {
    return {
      type: actions.RECENT_DEAL_BEGIN,
    };
  },

  recentDealSuccess: (data) => {
    return {
      type: actions.RECENT_DEAL_SUCCESS,
      data,
    };
  },

  recentDealErr: (err) => {
    return {
      type: actions.RECENT_DEAL_ERR,
      err,
    };
  },
};

export default actions;
