import React from "react"

const Summary = ({
  hoursSpent,
  potentialGrowth,
  missedBids,
  hitRate,
  hitRatedGrowth,
}) => (
  <div
    style={{
      margin: `0 auto`,
      padding: `1.45rem 1.0875rem`,
      backgroundColor: "rebeccapurple",
    }}
  >
    <div
      style={{
        display: "flex",
      }}
    >
      <div style={{ margin: "1rem" }}>
        <p style={{ fontSize: 22 }}>Productivity</p>
        <p>{`You could save ${hoursSpent} hrs/yr in bidding time. More time means more wins, adding an estimated $${potentialGrowth}.`}</p>
      </div>
      <div style={{ margin: "1rem" }}>
        <p style={{ fontSize: 22 }}>Missed bids</p>
        <p>{`If you don't miss that ${missedBids} bid, with your ${hitRate} hit rate, you could earn an additionl $${hitRatedGrowth}.`}</p>
      </div>
    </div>
    <p style={{ fontSize: 42 }}>{`$${potentialGrowth}`}</p>
    <p style={{ fontSize: 25 }}>IN POTENTIAL GROWTH</p>
  </div>
)

export default Summary
