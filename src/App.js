import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Campaigns from "./components/Campaigns";
import Favorites from "./components/Favorites";
import MobileAppBanner from "./components/MobileAppBanner";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <Campaigns />
      <div className='container mx-auto grid gap-y-6'>
        <Favorites />
        <MobileAppBanner />
        <Cards />
      </div>
      <Footer />
    </>
  );
}

export default App;
