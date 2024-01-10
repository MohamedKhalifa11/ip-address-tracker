import { useEffect, useRef, useState } from "react";
import "./App.css";
import LeafletMap from "./components/Map/Map";
import InfoCard from "./components/InfoCard/InfoCard";
import SearchForm from "./components/SearchForm/SearchForm";
import Swal from "sweetalert2";

function App() {
  // Default API URL for initial data fetch
  const Default_API_URL = "https://ipapi.co/json/";
  const [ipData, setIpData] = useState();
  const isMounted = useRef(true);

  // Function to fetch IP details based on the search term or the default URL
  async function getIpDetails(searchTerm) {
    const targetApiUrl = searchTerm
      ? `https://ipapi.co/${searchTerm}/json`
      : Default_API_URL;
    await fetch(targetApiUrl)
      .then((response) => response.json())
      .then((data) => setIpData(data))
      .catch((error) => {
        console.error("Error when fetching", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to fetch!",
        });
      });
  }

  useEffect(() => {
    // Fetch data only once when the component is mounted
    if (isMounted.current) {
      getIpDetails();
      console.log("Fetched!");
      isMounted.current = false;
    }
  }, []);

  return (
    <div className="App">
      <SearchForm onSearch={getIpDetails} />
      <InfoCard ipInfo={ipData} />
      {ipData && <LeafletMap locationMap={ipData} />}
    </div>
  );
}

export default App;
