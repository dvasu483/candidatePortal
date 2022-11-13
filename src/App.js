import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Card from "./Card";
import FormCandidate from "./FormCandidate";
import moment from "moment";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [pendingCount, setPendingCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);
  const [candidateList, setCandidateList] = useState([
    {
      name: "Mhd Aarif",
      addedDate: "09/11/2022",
      status: false,
    },
    {
      name: "Vasu",
      addedDate: "09/11/2022",
      status: true,
    },
  ]);

  const addCandidate = (name) => {
    const newCandidateList = [
      ...candidateList,
      { name: name, addedDate: moment().format("DD/MM/YYYY"), status: false },
    ];
    setCandidateList(newCandidateList);
    setShowModal(!showModal);
  };

  const updateCandidateStatus = (index) => {
    const newCandidateList = [...candidateList];
    newCandidateList[index].status = !newCandidateList[index].status;
    setCandidateList(newCandidateList);
  };

  const removeCandidate = (index) => {
    const newCandidateList = [...candidateList];
    newCandidateList.splice(index, 1);
    setCandidateList(newCandidateList);
  };

  const getTwoDigits = (value) => {
    return value.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
  };

  useEffect(() => {
    let count = 0;
    for (let candidate of candidateList) {
      console.log(candidate);
      if (!candidate.status) {
        ++count;
      }
    }
    setPendingCount(getTwoDigits(count));
    setCompletedCount(getTwoDigits(candidateList.length - count));
  }, [candidateList]);

  return (
    <div className="app">
      <header className="app-header">
        <a href="firstLink">Link 1</a>
        <a href="secondLink">Link 2</a>
        <a href="thirdLink">Link 3</a>
        <a href="fourthLink">Link 4</a>
        <a href="fifthLink">Link 5</a>
        <img src="https://via.placeholder.com/40" alt="pro-img"></img>
        <h4>Hi User</h4>
      </header>
      <aside className="aside">
        <ul className="aside-list">
          <label className="logo">Logo</label>
          <li className="aside-list-item active">Home</li>
          <li className="aside-list-item">Manage</li>
          <li className="aside-list-item">Templates</li>
          <li className="aside-list-item">Reports</li>
          <li className="aside-list-item">Settings</li>
        </ul>
      </aside>
      <div className="main-area">
        <div className="title">
          <label>CANDIDATE PORTAL</label>
        </div>
        <div className="greeting">
          <img src="https://via.placeholder.com/40" alt="pro-img"></img>
          <h4>Hi User</h4>
        </div>
        <div className="number-cards">
          <div className="card">
            <div>No. of Candidates</div>
            <div className="value">{getTwoDigits(candidateList.length)}</div>
          </div>
          <div className="card">
            <div>Pending</div>
            <div className="value">{pendingCount}</div>
          </div>
          <div className="card completed">
            <div>Completed</div>
            <div className="value">{completedCount}</div>
          </div>
        </div>
        <div className="info-container">
          <div className="analysis">
            <label>ANALYSIS</label>
            <div className="graph">
              <div
                className="graph-bar"
                style={{
                  background: `linear-gradient(to top, #ecc10c ${
                    (pendingCount / candidateList.length) * 100
                  }%, white ${(pendingCount / candidateList.length) * 100}%)`,
                }}
              ></div>
              <div
                className="graph-bar"
                style={{
                  background: `linear-gradient(to top, #0091fc 100%, white 100%)`,
                }}
              ></div>
              <div
                className="graph-bar"
                style={{
                  background: `linear-gradient(to top, #4ed192 ${
                    (completedCount / candidateList.length) * 100
                  }%, white ${(completedCount / candidateList.length) * 100}%)`,
                }}
              ></div>
            </div>
            <div className="legend-container">
              <div className="legend">
                <span className="blue">No. of Candidates</span>
              </div>
              <div className="legend">
                <span className="green">Completed</span>
              </div>
              <div className="legend">
                <span className="yellow">Pending</span>
              </div>
            </div>
          </div>
          <div className="candidate-list">
            <div className="title-line">
              <label>CANDIDATE LIST</label>
              <button
                style={{
                  color: "white",
                  backgroundColor: "#20c0b0",
                  border: "none",
                }}
                onClick={() => {
                  setShowModal(true);
                }}
              >
                ADD CANDIDATE
              </button>
            </div>
            <div>
              <table>
                <thead>
                  <tr className="table-header">
                    <th>CANDIDATE NAME</th>
                    <th>ADDED DATE</th>
                    <th>STATUS</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div>
              {candidateList.map((candidate, index) => (
                <Card
                  key={index}
                  index={index}
                  candidate={candidate}
                  updateCandidateStatus={updateCandidateStatus}
                  removeCandidate={removeCandidate}
                />
              ))}
            </div>
          </div>
          {showModal && (
            <FormCandidate
              addCandidate={addCandidate}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
