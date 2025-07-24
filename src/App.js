import "./App.scss";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import ContentsList from "./Components/ContentsList";
import Followbanner from "./Components/Followbanner";
import ItemPage from "./Components/ItemPage";

const App = () => {
  return (
    <div>
      <Followbanner />
      <Header />
      <ItemPage/>
      {/* <Header />
      <Banner />
      <ContentsList />
      <ItemPage/>
      <Followbanner />
      <Footer />
    </div>
  );
};
export default App;