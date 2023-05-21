import "./SocialRight.css";
function SocialRight(prop) {
  return (
    <div
      id="socialright"
      className={prop.links[0] === 1 ? "socialrighttilt" : ""}
    >
      <a href="mailto:vkumar8192449@gmail.com" rel="noreferrer" target="_blank">
        Vkumar8192449@gmail.com
      </a>
      <div className={prop.links[0] === 1 ? "stick" : "sticktilt"}></div>
    </div>
  );
}
export default SocialRight;
