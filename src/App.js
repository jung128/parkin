import "./App.scss";
import ItemPage from "./Components/ItemPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Components/MainPage";
import ItemPageTwo from "./Components/ItemPageTwo";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/itempage" element={<ItemPage/>}/>
          <Route path="/itempagtwo" element={<ItemPageTwo/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;