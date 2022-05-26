import "./Documentation.css";

const Documentation = () => {
  return (
    <div className="Documentation-img-css">
      <img src={require("../Assets/doc.jpg")} alt="cannot display" />
      <div className="Documentation-center-div">
        <p>Documentation Page</p>
      </div>
    </div>
  );
};

export default Documentation;
