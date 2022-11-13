import React from "react";

function Card({ candidate, index, updateCandidateStatus, removeCandidate }) {
  return (
    <div className="candidate">
      <table>
        <tbody>
          <tr className="table-body">
            <td className="first-column">
              <img src="https://via.placeholder.com/40" alt="pro-img"></img>
              <span>{candidate.name}</span>
            </td>
            <td>
              <span>{candidate.addedDate}</span>
            </td>
            <td>
              <span className={candidate.status ? "completed" : "pending"}>
                {candidate.status ? "Completed" : "Pending"}
              </span>
            </td>
            <td>
              <div>
                <button
                  onClick={() => updateCandidateStatus(index)}
                  style={{
                    color: "white",
                    backgroundColor: "#6facbe",
                    border: "none",
                  }}
                >
                  EDIT
                </button>{" "}
                <button
                  onClick={() => removeCandidate(index)}
                  style={{
                    color: "white",
                    backgroundColor: "#be846f",
                    border: "none",
                  }}
                >
                  DELETE
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Card;
