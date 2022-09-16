import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home";
import Layout from "./component.js/layout";

function App() {
  return (
    <div>
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
