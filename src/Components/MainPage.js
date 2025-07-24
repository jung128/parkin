import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from "./Banner";
import ContentsList from "./ContentsList";
import Followbanner from "./Followbanner";
import Footer from "./Footer";
import Header from "./Header";
import ItemPage from "./ItemPage";
import ItemPageTwo from "./ItemPageTwo";
import ItemPageThree from "./ItemPageThree";
import ItemPageFour from "./ItemPageFour";
import ItemPageFive from "./ItemPageFive";

const MainPage = () => {
    return (
        <div>

            <Header />
            <Followbanner />
            <Banner />
            <ContentsList />
                <Routes>
                    <Route path="/itempage" element={<ItemPage/>} />
                    <Route path="/itempagtwo" element={<ItemPageTwo/>} />
                    <Route path="/itempagthree" element={<ItemPageThree/>} />
                    <Route path="/itempagfour" element={<ItemPageFour/>} />
                    <Route path="/itempagefive" element={<ItemPageFive/>} />
                </Routes>
            <Followbanner />
            <Footer />


        </div>
    );
};

export default MainPage;