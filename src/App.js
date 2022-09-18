import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home";
import Layout from "./component.js/layout";
import { Provider } from "react-redux";
import store from "./redux/store";

import { BrowserRouter as Router, Routes, Route, Link, useRoutes } from "react-router-dom";
import TollList from "./pages/tollList";
function App() {

  return (
    <Provider store={store}>
      <Layout>
        <Router>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/toll_list"><TollList /></Route>
        </Router>
      </Layout>
    </Provider>
  );
}

export default App;
