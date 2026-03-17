import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./Components/DaisyNav/DaisyNav";
import Navbar from "./Components/Navbar/Navbar";
import PricingOption from "./Components/PricingOption/PricingOption";
import ResultChart from "./Components/ResultsChart/ResultChart";
import axios from "axios";
import MarksChart from "./Components/MarksChart/MarksChart";

const pricingPromise = fetch("pricingData.json").then((res) => res.json());
const marksPromise = axios.get("marksData.json");

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}
      </header>

      <main>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <PricingOption pricingPromise={pricingPromise}></PricingOption>
        </Suspense>

        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <MarksChart key={marksPromise.id} marksPromise={marksPromise}></MarksChart>
        </Suspense>

        <ResultChart></ResultChart>
      </main>
    </>
  );
}

export default App;
