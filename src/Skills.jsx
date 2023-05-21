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
              <img src={html} alt="" />
            </div>
          </section>
          <section>
            <div>
              <img src={css} alt="" />
            </div>
          </section>
          <section>
            <div>
              <img style={{ transform: "scale(0.9)" }} src={bootstrap} alt="" />
            </div>
          </section>
          <section>
            <div>
              <img src={js} alt="" />
            </div>
          </section>
          <section>
            <div>
              <img src={git} alt="" />
            </div>
          </section>
          <section>
            <div>
              <img src={github} alt="" />
            </div>
          </section>
          <section>
            <div>
              <img src={photoshop} alt="" />
            </div>
          </section>
          <section>
            <div>
              <img src={react} alt="" />
            </div>
          </section>
          <section>
            <div>
              <img src={redux} alt="" />
            </div>
          </section>
          <section>
            <div>
              <img src={node} alt="" />
            </div>
          </section>
          <section>
            <div>
              <img src={firebase} alt="" />
            </div>
          </section>
          <section>
            <div>
              <img src={blockchain} alt="" />
            </div>
          </section>
          <section>
            <div>
              <img src={metamask} alt="" />
            </div>
          </section>
          <section>
            <div>
              <img src={ethereum} alt="" />
            </div>
          </section>
          <section>
            <div>
              <img src={cplus} alt="" />
            </div>
          </section>
          <section>
            <div>
              <img src={c} alt="" />
            </div>
          </section>
          <section>
            <div>
              <img src={java} alt="" />
            </div>
          </section>
          <section>
            <div>
              <img src={wordpress} alt="" />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
export default Skills;
