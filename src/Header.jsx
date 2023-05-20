import "./Header.css";
import StyleButton from "./StyleButton.jsx";
function Header(prop) {
  return (
    <>
      <div id="header">
        <div
          id="logo"
          onClick={() => {
            prop.setlinks([1, 0, 0, 0, 0, 0]);
          }}
        ></div>
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
      </div>
    </>
  );
}
export default Header;
