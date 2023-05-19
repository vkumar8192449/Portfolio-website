import "./Coding.css";
import leetcode from "./Coding icons/leetcode.png";
import codeforces from "./Coding icons/code-forces.png";
import gfg from "./Coding icons/gfg.png";
import hackerrank from "./Coding icons/hackerrank.png";
import share from "./Coding icons/share.png";
function Coding() {
  return (
    <>
      <div id="codingcontainer">
        <h1>
          <div>
            <span style={{ color: "#4cc3ad", fontSize: "24px" }}>03.</span>{" "}
            Coding
          </div>
          <span className="lineskill"></span>
        </h1>
        <div id="codingplatforms">
          <div>
            <a
              href="https://leetcode.com/vkumar8192449/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="shareicon" src={share} alt="" />
            </a>
            <img className="codeplat" src={leetcode} alt="" />
            <h3>LeetCode</h3>
            <p>
              135+ Questions with a Max Streak of 107 Days and Total 125+ Active
              Days
            </p>
          </div>
          <div>
            <a
              href="https://codeforces.com/profile/vkumar8192449"
              target="_blank"
              rel="noreferrer"
            >
              <img className="shareicon" src={share} alt="" />
            </a>
            <img className="codeplat" src={codeforces} alt="" />
            <h3>CodeForces</h3>
            <p>
              220+ Questions with a Max Streak of 54 Days and with Max Contest
              Rating of 905*
            </p>
          </div>
          <div>
            <a
              href="https://auth.geeksforgeeks.org/user/vkumar8192449/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="shareicon" src={share} alt="" />
            </a>
            <img className="codeplat" src={gfg} alt="" />
            <h3>GeeksforGeeks</h3>
            <p>Institute Rank of 1690*</p>
          </div>
          <div>
            <a
              href="https://www.hackerrank.com/vkumar8192449"
              target="_blank"
              rel="noreferrer"
            >
              <img className="shareicon" src={share} alt="" />
            </a>
            <img className="codeplat" src={hackerrank} alt="" />
            <h3>HackerRank</h3>
            <p>⭐⭐⭐⭐⭐ in Problem Solving</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Coding;
