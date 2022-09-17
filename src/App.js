import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home";
import Layout from "./component.js/layout";
import { Provider } from 'react-redux';
import store from './redux/store';
function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Home />
      </Layout>
      </Provider>
  );
}

export default App;
