import "./App.scss";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import ContentsList from "./Components/ContentsList";
import Followbanner from "./Components/Followbanner";
import ItemPage from "./Components/ItemPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Components/MainPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/itempage" element={<ItemPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;