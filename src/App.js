import "./App.scss";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import ContentsList from "./Components/ContentsList";

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <ContentsList />
      <Footer />
    </div>
  );
};
export default App;