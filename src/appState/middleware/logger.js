export default store => next => action => {

  try {
    console.log("__STATE__", store.getState());
    next(action);
  }

  catch(err) {
    err.action = action;
    console.log("__ACTION__", action);
    console.log("__ERROR__", err)
  }
}
