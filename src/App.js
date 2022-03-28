import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Campaigns from "./components/Campaigns";
import Favorites from "./components/Favorites";
import MobileAppBanner from "./components/MobileAppBanner";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import { useWindowWidth } from '@react-hook/window-size';

function App() {

  const windowWidth = useWindowWidth();

  return (
    <>
      <Header />
      { windowWidth <= 768 && <Campaigns />}
      <Hero />
      <Categories />
      { windowWidth > 768 && <Campaigns />}
      <div className='container mx-auto grid gap-y-6 pt-8'>
        <Favorites />
        <MobileAppBanner />
        <Cards />
      </div>
      <Footer />
    </>
  );
}

export default App;
