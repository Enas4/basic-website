import "./Header.css";

const Header = (props) => {
  return (
    <header className="Header-css">
      <nav>
        <ul className="Header-ul">
          <li className="Header-li">
            <button
              className="Header-button"
              onClick={() => props.changeName("home")}
            >
              Home
            </button>
          </li>
          <li className="Header-li">
            <button
              className="Header-button"
              onClick={() => props.changeName("about")}
            >
              About
            </button>
          </li>
          <li className="Header-li">
            <button
              className="Header-button"
              onClick={() => props.changeName("contact")}
            >
              Contact Us
            </button>
          </li>
          <li className="Header-li">
            <button
              className="Header-button"
              onClick={() => props.changeName("documentation")}
            >
              Documentation
            </button>
          </li>
          <li className="Header-li">
            <button
              className="Header-button"
              onClick={() => props.changeName("termsofuse")}
            >
              Terms of Use
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
