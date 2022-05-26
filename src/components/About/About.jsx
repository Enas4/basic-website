import "./About.css";

const About = () => {
  return (
    <div className="About-img-css">
      <img src={require("../Assets/about.jpg")} alt="cannot display" />
      <div className="About-center-div">
        <p>About Page</p>
      </div>
    </div>
  );
};

export default About;
