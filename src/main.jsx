import ReactDOM from "react-dom/client";
import "./index.css";
import MyRoutes from "./Route.jsx";
import { GlobalContextProvider } from "./components/CreateContext.jsx";
import { Provider } from "react-redux";
import store from "./components/redux/store.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <GlobalContextProvider>
      <MyRoutes />
    </GlobalContextProvider>
  </Provider>
);
