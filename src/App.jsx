import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./Components/DaisyNav/DaisyNav";
import Navbar from "./Components/Navbar/Navbar";
import PricingOption from "./Components/PricingOption/PricingOption";
import ResultChart from "./Components/ResultsChart/ResultChart";

const pricingPromise = fetch("pricingData.json").then((res) => res.json());

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

        <ResultChart></ResultChart>
      </main>
    </>
  );
}

export default App;
