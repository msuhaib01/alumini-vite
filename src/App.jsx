import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Caro from "./Caro/Caro";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main">
      <div className="navbar">
        <div className="nav_left">LOGO</div>
        <div className="nav_right">
          <a>Home</a>
          <a>Nust</a>
          <a>Alumni</a>
        </div>
      </div>
      <div className="carosel">
        <Caro />
      </div>
      <div className="content">
        <div className="homecoming_intro">
          <h1>HOMECOMING INTRODUCTION</h1>
          <div className="row">
            <div className="imageText">
              <p>
                Alumni Homecoming, a bridge between shared history and future
                possibilities. This occasion lets our Alumnis share their
                journeys, all of them starting at the very same hallways we
                crowd today, to how they have reached unique and remarkable
                peaks. NUSTs legacy lives through its Alumni, and its essential
                the new faces at this institute are granted a chance to learn
                through their experiences and get a hold of valuable knowledge.
                Homecoming not only gives you a chance at networking, but allows
                you to create memories with your batchmates and families, with
                planned sports activities and social night taking center stage.
              </p>
            </div>
            <div className="tempImage">INSERT IMAGE HERE</div>
          </div>
        </div>
        <div className="why_you_should">
          <h1>Why you should come to Homecoming'23.</h1>
          <div className="row">
            <div className="imageText">
              <p>
                Alumni Homecoming'23, where our distinguished grads return to
                their home-away-from-home, sharing pearls of wisdom with the
                newest additions to the NUST family. It's not merely an event;
                it's a heartwarming family reunion taking a trip down the memory
                lane, infused with a burst of inspiration! NUST Homecoming 23 is
                a celebration of fresh opportunities and forging meaningful
                connections. Don't let this chance slip away—be part of an
                unforgettable experience!{" "}
              </p>
            </div>
          </div>
        </div>
        <button>REGISTER HERE.</button>

        <div className="event_details">
          <h1>EVENT PLAN</h1>
          <div>
            <div className="eventDetailRow">
              <div className="eventDetailsContainer">
                <img className="eventImage" />
                <h2>Sports Gala</h2>
                <p>
                  A perfect chance for the alumni to spend a wholesome day with
                  their families! With multiple activities and friendly sports
                  competitions lined up, a congenial environment has been
                  designed for the alumni and their families.
                </p>
              </div>
              <div className="eventDetailsContainer">
                <img className="eventImage" />
                <h2>NustFest</h2>
                <p>
                  Filled with fun and games, the Carnival Night is going to be a
                  perfect chance to loosen up, create everlasting memories with
                  friends and relive the NUST experience.
                </p>
              </div>
            </div>
            <div className="eventDetailRow">
              <div className="eventDetailsContainer">
                <img className="eventImage" />
                <h2>Alumni Summit</h2>
                <p>
                  Featuring a panel discussion that will replenish your
                  intuitive juice and various networking zones, the summit is a
                  place where you can connect and collaborate with leaders from
                  all around the globe.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="howToRegister">
          <h1>Registration and Payment Instructions</h1>
          <p>
            Dear alumni, You are probably wondering about how you can register
            for the upcoming alumni. Don’t worry. NUST Alumni Homecoming has got
            your back. The process is really simple. To make it more feasible
            for you, we have listed 8 easy steps, following which you will be
            able to register yourself:
          </p>
        </div>
        <div className="youtube">
          <iframe
            width="536"
            height="522"
            src="https://www.youtube.com/embed/7nL05WFoBJk"
            title="you are finally here"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default App;
