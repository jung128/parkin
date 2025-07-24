import Banner from "./Banner";
import ContentsList from "./ContentsList";
import Followbanner from "./Followbanner";
import Footer from "./Footer";
import Header from "./Header";
import ItemPage from "./ItemPage";
import ItemPageFour from "./ItemPageFour";

const MainPage = () => {
    return (
        <div>
            <Header/>
            <Followbanner/>
            <ItemPage />
            <Banner/>
            <ContentsList/>
            <Footer/>
            <ItemPageFour/>
        </div>
    );
};

export default MainPage;