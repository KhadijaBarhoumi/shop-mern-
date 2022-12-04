import Router from "./routes";
import "./App.css";
import { getAllProducts } from "./redux/Actions/ProductAction";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllClient } from "./redux/Actions/ClientAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllClient());
  }, []);
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
