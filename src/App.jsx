import { useEffect, useState } from "react";

const Card = ({ title }) => {
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    console.log(`${title} has been liked: ${liked}`);
  }, [liked, title]);

  useEffect(() => {
    console.log("CARD RENDERED");
  }, []);

  const handleChangeLike = () => {
    setLiked((prevState) => !prevState);
  };

  const handleIncreaseCount = () => {
    setCount((prevState) => prevState + 1);
  };

  return (
    <div className="card" onClick={handleIncreaseCount}>
      <h2>
        {title} <br /> {count}
      </h2>
      <button onClick={handleChangeLike}>{liked ? "🩷" : "🤍"}</button>
    </div>
  );
};

const App = () => {
  return (
    <div className="card-container">
      <Card title="Start Wars" />
      <Card title="Avatar" />
      <Card title="The Lion King" />
    </div>
  );
};

export default App;
