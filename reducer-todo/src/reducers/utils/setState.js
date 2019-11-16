const setState = key => (state, action) => ({
  ...state,
  [key]: action.payload,
});

export default setState;
