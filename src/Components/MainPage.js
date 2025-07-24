import Banner from "./Banner";
import ContentsList from "./ContentsList";
import Followbanner from "./Followbanner";
import Footer from "./Footer";
import Header from "./Header";
import ItemPage from "./ItemPage";

const MainPage = () => {
    return (
        <div>
            <Header/>
            <Followbanner/>
            <Header/>
            <ItemPage />
            <Banner/>
            <ContentsList/>
            <Followbanner/>
            <Footer/>

        </div>
    );
};

export default MainPage;