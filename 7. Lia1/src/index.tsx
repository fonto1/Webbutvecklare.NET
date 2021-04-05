import * as React from "react";
import * as ReactDom from "react-dom";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import rowReducer from "./Redux/Reducers/rowReducer";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import rootReducer from "./Redux/Reducers/rootReducer";

// const store = createStore(rootReducer, applyMiddleware(thunk));

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk)
    // (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    //   (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
