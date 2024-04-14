import { useEffect } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import MainData from "./Pages/MainData";
import { useDispatch, useSelector } from "react-redux";
import { searchData } from "./Redux/Actions/WeatherActions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchData("tunis"));
  }, []);
  const data = useSelector((state) => state);
  return (
    <div className="App">
      {data ? (
        <>
          <MainData /> <Footer />
        </>
      ) : null}
    </div>
  );
}

export default App;
