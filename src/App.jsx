import { useState } from "react";

import Search from "./components/Search";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm);

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Herro Banner" />
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            Without the Hassle
          </h1>
        </header>
        <Search value={searchTerm} onSearch={setSearchTerm} />
        <h1>{searchTerm}</h1>
      </div>
    </main>
  );
};

export default App;
