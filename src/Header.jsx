import "./Header.css";
import StyleButton from "./StyleButton.jsx";
function Header() {
  return (
    <>
      <div id="header">
        <div id="logo"></div>
        <div id="buttonslinks">
          <button>
            <span>01.</span> About
          </button>
          <button>
            <span>02.</span> Skills
          </button>
          <button>
            <span>03.</span> Work
          </button>
          <button>
            <span>04.</span> Contact
          </button>
          <StyleButton
            content={
              <a href="Vinay_Kumar_Resume.pdf" download>
                Resume
              </a>
            }
          />
        </div>
      </div>
    </>
  );
}
export default Header;
