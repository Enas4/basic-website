import "./Home.css";

const Home = () => {
  return (
    <div className="Home-img-css">
      <img src={require("../Assets/home.jpg")} alt="cannot display" />
      <div className="Home-center-div">
        <p>Home Page</p>
      </div>
    </div>
  );
};

export default Home;
