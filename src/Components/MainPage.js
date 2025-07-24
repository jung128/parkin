import { BrowserRouter } from "react-router-dom";
import Banner from "./Banner";
import ContentsList from "./ContentsList";
import Followbanner from "./Followbanner";
import Footer from "./Footer";
import Header from "./Header";

const MainPage = () => {
    return (
        <div>
            <Followbanner/>
            <Header/>
            <Banner/>
            <ContentsList/>
            <Followbanner/>
            <Footer/>
        </div>
    );
};

export default MainPage;