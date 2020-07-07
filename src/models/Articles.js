export default {
  namespace: "app",

  state: {
    articles: [
      {
        id: 1,
        title: "post 1",
        body: "Quisque cursus, metus vitae pharetra"
      },
      {
        id: 2,
        title: "post 2",
        body: "Quisque cursus, metus vitae pharetra"
      }
    ]
  },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    }
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      // eslint-disable-line
      yield put({ type: "save", payload: payload });
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    }
  }
};
