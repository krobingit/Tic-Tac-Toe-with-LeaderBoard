import React from 'react';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';

export function LeaderBoard({XPoints,OPoints}) {

  return (
    <div className="LeaderBoard">
      <h2 className="leadertext"><LeaderboardIcon style={{ fontSize: "3rem", marginRight: "1rem" }} />LeaderBoard</h2>
      <div>
     <table>
      <thead>
          <tr>
            <td style={{ color: "green" }}>X</td>
            <td style={{ color: "red" }}>O</td>
          </tr>
      </thead>
      <tfoot>
          <tr>
       <td style={{ color: "green" }}>{XPoints}</td>
       <td style={{ color: "red" }}>{OPoints}</td>
          </tr>
</tfoot>
        </table>
      </div>
    </div>
  );
}