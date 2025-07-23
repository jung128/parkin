import "./App.scss";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import ItemPage from "./Components/ItemPage";
import ContentsList from "./Components/ContentsList";
import Followbanner from "./Components/Followbanner";

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <ContentsList />
      <ItemPage/>
      <Followbanner />
      <Footer />
    </div>
  );
};
export default App;