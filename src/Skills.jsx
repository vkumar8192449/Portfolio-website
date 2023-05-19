import "./Skills.css";
import react from "./Logos/react.png";
import wordpress from "./Logos/wordpress.png";
import redux from "./Logos/redux.png";
import node from "./Logos/nodejs.png";
import metamask from "./Logos/metamask.png";
import js from "./Logos/javascript.png";
import java from "./Logos/java.png";
import html from "./Logos/html5.png";
import github from "./Logos/github.png";
import git from "./Logos/git.png";
import firebase from "./Logos/firebase.png";
import ethereum from "./Logos/ethereum.png";
import css from "./Logos/css.png";
import c from "./Logos/c.png";
import cplus from "./Logos/c (1).png";
import bootstrap from "./Logos/bootstrap.png";
import blockchain from "./Logos/blockchain.png";
import photoshop from "./Logos/adobe-photoshop.png";
function Skills() {
  function clicked(e) {
    e.style.filter = "blur(0px)";
  }
  return (
    <>
      <div id="skillscontainer">
        <h1>
          <div>
            <span style={{ color: "#4cc3ad", fontSize: "24px" }}>02.</span>{" "}
            Skills
          </div>
          <span className="lineskill"></span>
        </h1>
        <div id="stack">
          <section>
            <div>
              <img onClick={(e) => clicked(e.target)} src={html} alt="" />
            </div>
          </section>
          <section>
            <div>
              <img onClick={(e) => clicked(e.target)} src={css} alt="" />
            </div>
          </section>
          <section>
            <div>
              <img
                onClick={(e) => clicked(e.target)}
                style={{ transform: "scale(0.9)" }}
                src={bootstrap}
                alt=""
              />
            </div>
          </section>
          <section>
            <div>
              <img onClick={(e) => clicked(e.target)} src={js} alt="" />
            </div>
          </section>
          <section>
            <div>
              <img onClick={(e) => clicked(e.target)} src={git} alt="" />
            </div>
          </section>
          <section>
            <div>
              <img onClick={(e) => clicked(e.target)} src={github} alt="" />
            </div>
          </section>
          <section>
            <div>
              <img onClick={(e) => clicked(e.target)} src={photoshop} alt="" />
            </div>
          </section>
          <section>
            <div>
              <img onClick={(e) => clicked(e.target)} src={react} alt="" />
            </div>
          </section>
          <section>
            <div>
              <img onClick={(e) => clicked(e.target)} src={redux} alt="" />
            </div>
          </section>
          <section>
            <div>
              <img onClick={(e) => clicked(e.target)} src={node} alt="" />
            </div>
          </section>
          <section>
            <div>
              <img onClick={(e) => clicked(e.target)} src={firebase} alt="" />
            </div>
          </section>
          <section>
            <div>
              <img onClick={(e) => clicked(e.target)} src={blockchain} alt="" />
            </div>
          </section>
          <section>
            <div>
              <img onClick={(e) => clicked(e.target)} src={metamask} alt="" />
            </div>
          </section>
          <section>
            <div>
              <img onClick={(e) => clicked(e.target)} src={ethereum} alt="" />
            </div>
          </section>
          <section>
            <div>
              <img onClick={(e) => clicked(e.target)} src={cplus} alt="" />
            </div>
          </section>
          <section>
            <div>
              <img onClick={(e) => clicked(e.target)} src={c} alt="" />
            </div>
          </section>
          <section>
            <div>
              <img onClick={(e) => clicked(e.target)} src={java} alt="" />
            </div>
          </section>
          <section>
            <div>
              <img onClick={(e) => clicked(e.target)} src={wordpress} alt="" />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
export default Skills;
