import React, { useState } from "react";
import LeftSide from "../components/LeftSide";
import Recommended from "../components/Recommended";
import Search from "../components/Search";
import Trending from "../components/Trending";

const Main = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex m-8">
      <LeftSide />
      <main className="h-screen p-10 items-center">
        <Search setSearchQuery={setSearchQuery} />
        <Trending />
        <Recommended searchQuery={searchQuery} />
      </main>
    </div>
  );
};

export default Main;
