import "./Header.css";
import StyleButton from "./StyleButton.jsx";
import logo from "./logo.png";
function Header(prop) {
  return (
    <>
      <div id="header">
        <div
          id="logo"
          onClick={() => {
            prop.setlinks([1, 0, 0, 0, 0, 0]);
          }}
        >
          <img src={logo} alt="" />
        </div>
        <div id="buttonslinks">
          <button
            style={{ color: prop.links[1] === 1 ? "#64ffda" : "#ccd6f6" }}
            onClick={() => {
              prop.setlinks([0, 1, 0, 0, 0, 0]);
            }}
          >
            <span>01.</span> About
          </button>
          <button
            style={{ color: prop.links[2] === 1 ? "#64ffda" : "#ccd6f6" }}
            onClick={() => {
              prop.setlinks([0, 0, 1, 0, 0, 0]);
            }}
          >
            <span>02.</span> Skills
          </button>
          <button
            style={{ color: prop.links[3] === 1 ? "#64ffda" : "#ccd6f6" }}
            onClick={() => {
              prop.setlinks([0, 0, 0, 1, 0, 0]);
            }}
          >
            <span>03.</span> Coding
          </button>
          <button
            style={{ color: prop.links[4] === 1 ? "#64ffda" : "#ccd6f6" }}
            onClick={() => {
              prop.setlinks([0, 0, 0, 0, 1, 0]);
            }}
          >
            <span>04.</span> Work
          </button>
          <button
            style={{ color: prop.links[5] === 1 ? "#64ffda" : "#ccd6f6" }}
            onClick={() => {
              prop.setlinks([0, 0, 0, 0, 0, 1]);
            }}
          >
            <span>05.</span> Contact
          </button>
          <StyleButton
            content={
              <a href="Vinay_Kumar_Resume.pdf" download>
                Resume
              </a>
            }
          />
        </div>
        <div id="burger">
          <svg
            onClick={() => {
              if (prop.menuopen === true) {
                prop.setmenu(false);
              } else {
                prop.setmenu(true);
              }
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="hamburger-menu"
          >
            <path d="M5 7h14c.6 0 1-.4 1-1s-.4-1-1-1H5c-.6 0-1 .4-1 1s.4 1 1 1zm0 6h14c.6 0 1-.4 1-1s-.4-1-1-1H5c-.6 0-1 .4-1 1s.4 1 1 1zm0 6h14c.6 0 1-.4 1-1s-.4-1-1-1H5c-.6 0-1 .4-1 1s.4 1 1 1z"></path>
          </svg>
          <div id="newmenu">
            <div id="newbuttonslinks">
              <button
                style={{ color: prop.links[1] === 1 ? "#64ffda" : "#ccd6f6" }}
                onClick={() => {
                  prop.setlinks([0, 1, 0, 0, 0, 0]);
                  prop.setmenu(false);
                }}
              >
                <span>01.</span> About
              </button>
              <button
                style={{ color: prop.links[2] === 1 ? "#64ffda" : "#ccd6f6" }}
                onClick={() => {
                  prop.setlinks([0, 0, 1, 0, 0, 0]);
                  prop.setmenu(false);
                }}
              >
                <span>02.</span> Skills
              </button>
              <button
                style={{ color: prop.links[3] === 1 ? "#64ffda" : "#ccd6f6" }}
                onClick={() => {
                  prop.setlinks([0, 0, 0, 1, 0, 0]);
                  prop.setmenu(false);
                }}
              >
                <span>03.</span> Coding
              </button>
              <button
                style={{ color: prop.links[4] === 1 ? "#64ffda" : "#ccd6f6" }}
                onClick={() => {
                  prop.setlinks([0, 0, 0, 0, 1, 0]);
                  prop.setmenu(false);
                }}
              >
                <span>04.</span> Work
              </button>
              <button
                style={{ color: prop.links[5] === 1 ? "#64ffda" : "#ccd6f6" }}
                onClick={() => {
                  prop.setlinks([0, 0, 0, 0, 0, 1]);
                  prop.setmenu(false);
                }}
              >
                <span>05.</span> Contact
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
        </div>
      </div>
    </>
  );
}
export default Header;
