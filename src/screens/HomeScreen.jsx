import NavBar from "../components/NavBar";
import Header from "../components/homecomponent/Header";
import RSB from "../components/homecomponent/RSB";
import HeroImage from "../components/homecomponent/HeroImage";
import Benefits from "../components/homecomponent/Benefits";
import Reviews from "../components/homecomponent/Reviews";
import Cities from "../components/homecomponent/Cities";
import Footer from "../components/Footer";
import BrandsAvailable from "../components/homecomponent/BrandsAvailable";
import ServiceProvider from "../components/homecomponent/ServiceProvider";
import { FaWhatsapp } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import NewRSB from "../components/NewRSB";
import { useEffect } from "react";
import useTrackEvent from "../hooks/useTrackEvent";
import ChatBot from "../components/Chatbot/ChatBot";
import { useParams } from "react-router-dom";
import ChatBotButton from "../components/Chatbot/ChatBotButton";
const HomeScreen = ({ title }) => {

  const {city} =useParams();
  const trackEvent = useTrackEvent();
  const handleWhatsappClicks = (label) => {
    trackEvent("Whatsapp Icon", "Icon Clicks", label);
  };

  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta
          name="description"
          content=" Rent self-drive cars easily with Zymo. Compare prices, book in minutes, and enjoy affordable, hassle-free car rentals."
        />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content=" Rent self-drive cars easily with Zymo. Compare prices, book in minutes, and enjoy affordable, hassle-free car rentals."
        />
        <link rel="canonical" href={`https://zymo.app/self-drive-car-rentals/${city}`} />
        </Helmet>
      <NavBar />
      <div className="container flex flex-col w-full mx-auto">
        <div className="container">
          <Header />
          <NewRSB urlcity={city}/>
          <HeroImage />
          {/* <RSB /> */}
          <Benefits />
          <BrandsAvailable />
          <ServiceProvider />
          <Reviews />
          <Cities />
        </div>
        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/919987933348"
          className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleWhatsappClicks("Whatsapp Icon")}
        >
          <FaWhatsapp className="text-3xl" />
        </a>

        
        <div>
                    <ChatBotButton />
                </div> 
      </div>
      <Footer />
    </>
  );
};

export default HomeScreen;
