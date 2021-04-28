import React from "react";
import "./Home.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import CountryRankings from "../../components/CountryRankings/CountryRankings";
import Hero from "../../components/Hero/Hero";

function Home() {
  return (
    <div>
      <Hero></Hero>
      <section className="container py-1 px-3 rounded bg-light-grey">
        <CountryRankings />
      </section>
    </div>
  );
}

export default Home;
