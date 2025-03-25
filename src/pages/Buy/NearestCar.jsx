import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Filter from "../../components/buycomponent/Filter";
import Cards from "../../components/buycomponent/Cards";
import SearchBar from "../../components/buycomponent/SearchBar";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { ArrowLeft } from "lucide-react";
import { collection, getDocs } from "firebase/firestore";
import { webDB } from "../../utils/firebase";

const NearestCar = () => {
  const navigate = useNavigate();

  const [filteredCars, setFilteredCars] = useState("Electric");
  const [allCars, setAllCars] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchCarsData = async () => {
      try {
        const carsCollectionRef = collection(webDB, "BuySectionCars");
        const querySnapshot = await getDocs(carsCollectionRef);

        const cars = querySnapshot.docs.map((doc) => doc.data());
        setAllCars(cars);
        setSearchResults(cars);  // Store all cars in searchResults
      } catch (err) {
        console.error("Error fetching cars data:", err);
      }
    };

    fetchCarsData();
  }, []);

  // Update filtered cars and search results whenever the filter or search changes
  useEffect(() => {
    const filtered = allCars.filter((car) => car.type === filteredCars);
    setSearchResults(filtered);
  }, [filteredCars, allCars]);

  return (
    <>
      <NavBar />
      <div className="head-container flex flex-col sm:flex-row justify-between items-center bg-darkGrey text-white p-4">
        <button
          onClick={() => navigate("/")}
          className="text-white m-5 cursor-pointer"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        <h1 className="text-white text-3xl font-bold pl-5">Nearest Car</h1>

        <div className="mt-3 sm:mt-0 sm:ml-4 flex justify-end w-full sm:w-auto">
          <SearchBar setSearchResults={setSearchResults} />
        </div>
      </div>
      <Filter setFilterCar={setFilteredCars} />

      {searchResults.length > 0 ? (
        <Cards cars={searchResults} />
      ) : (
        <div className="flex justify-center items-center h-[60vh] p-4 bg-darkGrey">
          <p className="text-white text-xl font-semibold">No cars at the moment. Please try another filter</p>
        </div>
      )}

      <Footer />
    </>
  );
};

export default NearestCar;
