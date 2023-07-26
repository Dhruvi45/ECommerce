import React from "react";
import {
  NavBar,
  Banner,
  CategoryCard,
  TrendingCard,
} from "./HomePageComponents";
function HomePage() {
  return (
    <div>
      <NavBar />
      <Banner />
      <CategoryCard />
      <TrendingCard />
    </div>
  );
}

export { HomePage };
