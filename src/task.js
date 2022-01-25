import React, { useState } from "react";
import logo from "./gtpl.jpg";
import "./App.css";
import done from "./first.png";

function App() {
  const [step, setStep] = useState(1);
  const [Name, setName] = useState("");
  const [Cardnum, setCardNum] = useState("");
  const [CardValidation, setCardValidation] = useState(false);
  const [Boxtype, setBoxType] = useState("");
  const [StartDate, setStartDate] = useState(new Date());
  const [EndDate, setEndDate] = useState(new Date());
  const [FinalDate, setFinalDate] = useState("");
  const [NumOp, setNumOp] = useState(0);

  const StartDateHandler = (e) => {
    setStartDate(e.target.value);
  };

  const EndDateHandler = (e) => {
    setEndDate(e.target.value);
  };

  const nextStepHander = () => {
    setStep(step + 1);
  };

  const submitStepHander = () => {
    setStep(step + 1);

    let x = new Date(StartDate).getTime();
    let y = new Date(EndDate).getTime();
    // console.log('x', x);
    // console.log('y', y);

    let diff = y - x;
    let result = 1000 * 3600 * 24;

    setFinalDate(diff / result);
    // console.log('diff', diff);
    // console.log('result', result);
    // console.log('FinalDate', FinalDate);
    // console.log('StartDate', StartDate);
    // console.log('EndDate', EndDate);
  };

  const backStepHander = () => {
    setStep(step - 1);
  };

  const Option_Handler = (e) => {
    let item = e.target.value;
    setBoxType(item);
    if (item == "NORMAL") {
      return setNumOp(10);
    } else if (item == "HD") {
      return setNumOp(15);
    } else if (item == "HD+") {
      return setNumOp(20);
    } else {
      return setNumOp(0);
    }
  };

  const CardHandler = (e) => {
    let item = e.target.value;
    if (item.length < 7) {
      setCardValidation(true);
    } else {
      setCardValidation(false);
    }
    setCardNum(e.target.value);
  };
  const getRenderPages = () => {
    switch (step) {
      case 1:
        return (
          <div className="App">
            <img src={logo} alt="logo" className="img" />
            <h1 className="header">Welcome to GTPL Site</h1>
            <button
              className="OnLight"
              onClick={() => {
                nextStepHander();
              }}
            >
              Next
            </button>
          </div>
        );
      case 2:
        return (
          <div className="App">
            <h2 className="header">Profile Id</h2>
            <input
              type="text"
              placeholder="Enter Full Name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
              type="number"
              placeholder="Enter Card Number"
              value={Cardnum}
              onChange={(e) => {
                CardHandler(e);
              }}
            />
            <br />
            {CardValidation ? (
              <p style={{ color: "red", fontSize: "15px" }}>
                Valid Number Please
              </p>
            ) : (
              ""
            )}
            <button
              className="OnLight"
              onClick={() => {
                nextStepHander();
              }}
            >
              Next
            </button>
            <button
              className="OnBack"
              onClick={() => {
                backStepHander();
              }}
            >
              Back
            </button>
          </div>
        );
      case 3:
        return (
          <div className="App">
            <h2 className="header">Select Your Box</h2>
            <label>
              GTPL Box:
              <select
                onChange={(e) => {
                  Option_Handler(e);
                }}
              >
                <option>--select--</option>
                <option value="HD+">ULTRA HD</option>
                <option value="HD">HD</option>
                <option value="NORMAL">NORMAL</option>
              </select>
            </label>
            <br />
            <br />
            <button
              className="OnLight"
              onClick={() => {
                nextStepHander();
              }}
            >
              Next
            </button>
            <button
              className="OnBack"
              onClick={() => {
                backStepHander();
              }}
            >
              Back
            </button>
          </div>
        );
      case 4:
        return (
          <div className="App">
            Start Date:
            <input
              type="date"
              value={StartDate}
              onChange={(e) => {
                StartDateHandler(e);
              }}
            />
            <br />
            <br />
            End Date:
            <input
              type="date"
              value={EndDate}
              onChange={(e) => {
                EndDateHandler(e);
              }}
            />
            <br />
            <br />
            <button
              className="OnSubmit"
              onClick={() => {
                submitStepHander();
              }}
            >
              submit
            </button>
            <button
              className="OnBack"
              onClick={() => {
                backStepHander();
              }}
            >
              Back
            </button>
          </div>
        );
      case 5:
        return (
          <div className="App1">
            <div>
              <p>Name: {Name.toUpperCase()}</p>
              <p>Number: {Cardnum}</p>
              <p>Plan: {Boxtype}</p>
              <p>Price: {FinalDate * NumOp} </p>
              <img src={done} alt="done" className="smile" />
              <p className="header">Recharge Done...</p>
            </div>
          </div>
        );

      default:
        return <div className="header">404 : page not found</div>;
    }
  };

  return (
    <div className="fullWidth">
      <div className="content">{getRenderPages()}</div>
    </div>
  );
}

export default App;
