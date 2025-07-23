import "./App.scss";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import ItemPage from "./Components/ItemPage";
import ContentsList from "./Components/ContentsList";

const App = () => {
  return (
    <div>
      <ItemPage/>
      <Header />
      <Banner />
      <ContentsList />
      <Footer />
    </div>
  );
};
export default App;