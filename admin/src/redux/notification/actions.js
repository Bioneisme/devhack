const actions = {
  READ_NOTIFICATION_BEGIN: 'READ_NOTIFICATION_BEGIN',
  READ_NOTIFICATION_SUCCESS: 'READ_NOTIFICATION_SUCCESS',
  READ_NOTIFICATION_ERR: 'READ_NOTIFICATION_ERR',

  readNotificationBegin: () => {
    return {
      type: actions.READ_NOTIFICATION_BEGIN,
    };
  },

  readNotificationSuccess: (data) => {
    return {
      type: actions.READ_NOTIFICATION_SUCCESS,
      data,
    };
  },

  readNotificationErr: (err) => {
    return {
      type: actions.READ_NOTIFICATION_ERR,
      err,
    };
  },
};

export default actions;
