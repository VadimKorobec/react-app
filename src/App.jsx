import { useState } from "react";

const Card = ({ title }) => {
  const [liked, setLiked] = useState(false);
  console.log(liked);

  const handleChangeLike = () => {
    setLiked((prevState) => !prevState);
  };

  return (
    <div className="card">
      <h2>{title}</h2>
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
