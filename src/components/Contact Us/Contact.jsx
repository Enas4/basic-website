import "./Contact.css";

const Contact = () => {
  return (
    <div className="Contact-img-css">
      <img src={require("../Assets/contact.jpg")} alt="cannot display" />
      <div className="Contact-center-div">
        <p>Contact Us Page</p>
      </div>
    </div>
  );
};

export default Contact;
