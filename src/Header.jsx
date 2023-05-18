import "./Header.css";
import StyleButton from "./StyleButton.jsx";
function Header() {
  return (
    <>
      <div id="header">
        <div id="logo"></div>
        <div id="buttonslinks">
          <button>About</button>
          <button>Skills</button>
          <button>Work</button>
          <button>Contact</button>
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
