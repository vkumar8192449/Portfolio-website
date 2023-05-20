import "./Work.css";
import food from "./work/foodorder.png";
import notes from "./work/notes.png";
import year from "./work/year.png";
import shareicon from "./work/share.png";
import github from "./work/github.png";
function Work() {
  return (
    <>
      <div id="workcontainer">
        <h1>
          <div>
            <span style={{ color: "#4cc3ad", fontSize: "24px" }}>04.</span> Some
            Things I’ve Built
          </div>
          <span className="lineskill"></span>
        </h1>
        <div id="projects">
          <div className="pro1">
            <img src={food} alt="" />
            <div>
              <p>Featured Project</p>
              <h2>Food Ordering App</h2>
              <p>
                A React-based web application that allows users to order meals
                online. The app integrates Firebase Realtime Database. The meal
                data is fetched from the Firebase Realtime Database. When a user
                decides to place an order, the app securely stores the order
                details in the Firebase Realtime Database.
              </p>
              <p>
                React &nbsp; Firebase &nbsp; Javascript &nbsp; CSS &nbsp; HTML
              </p>
              <a
                href="https://github.com/vkumar8192449/food-ordering-app"
                target="_blank"
                rel="noreferrer"
              >
                <img className="worklinksize" src={github} alt="" />
              </a>
              <a
                href="https://food-ordering-app-243e5.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="worklinksize" src={shareicon} alt="" />
              </a>
            </div>
          </div>
          <div className="pro1">
            <img src={notes} alt="" />
            <div>
              <p>Featured Project</p>
              <h2>Notes Making App</h2>
              <p>
                Allows users to write and store their notes conveniently. Users
                can easily create, edit, and delete notes. The app leverages
                browser local storage to securely store the notes on the user's
                device. The app allows users to mark notes as important, helping
                them prioritize and organize their thoughts.
              </p>
              <p>Javascript &nbsp; CSS &nbsp; HTML</p>
              <a
                href="https://github.com/vkumar8192449/Notes-Making.github.io"
                target="_blank"
                rel="noreferrer"
              >
                <img className="worklinksize" src={github} alt="" />
              </a>
              <a
                href="https://vkumar8192449.github.io/Notes-Making.github.io/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="worklinksize" src={shareicon} alt="" />
              </a>
            </div>
          </div>
          <div className="pro1">
            <img src={year} alt="" />
            <div>
              <p>Featured Project</p>
              <h2>New Year Countdown</h2>
              <p>
                This web application provides a dynamic and engaging countdown
                to the upcoming New Year's celebration. By leveraging
                JavaScript's Date object, the application calculates the
                remaining time until New Year's Day.
              </p>
              <p>Javascript &nbsp; CSS &nbsp; HTML</p>
              <a
                href="https://github.com/vkumar8192449/New-Year-Countdown"
                target="_blank"
                rel="noreferrer"
              >
                <img className="worklinksize" src={github} alt="" />
              </a>
              <a
                href="https://vkumar8192449.github.io/New-Year-Countdown/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="worklinksize" src={shareicon} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Work;
