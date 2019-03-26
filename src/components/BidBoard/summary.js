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
      backgroundColor: "white",
    }}
  >
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
      }}
    >
      <div style={{ margin: "1rem" }}>
        <p>Productivity</p>
        <p>{`You could save ${hoursSpent} hrs/yr in bidding time. More time means more wins, adding an estimated $${formatMoney(
          potentialGrowth
        )}.`}</p>
      </div>
      <div style={{ margin: "1rem" }}>
        <p>Missed bids</p>
        <p>{`If you don't miss that ${missedBids} bid, with your ${hitRate} hit rate, you could earn an additionl ${hitRatedGrowth}.`}</p>
      </div>
    </div>
    <p style={{ fontSize: 33 }}>{`$${formatMoney(potentialGrowth)}`}</p>
    <p style={{ fontSize: 33 }}>IN POTENTIAL GROWTH</p>
  </div>
)

const formatMoney = (
  amount,
  decimalCount = 2,
  decimal = ".",
  thousands = ","
) => {
  try {
    decimalCount = Math.abs(decimalCount)
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount

    const negativeSign = amount < 0 ? "-" : ""

    let i = parseInt(
      (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
    ).toString()
    let j = i.length > 3 ? i.length % 3 : 0

    return (
      negativeSign +
      (j ? i.substr(0, j) + thousands : "") +
      i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
      (decimalCount
        ? decimal +
          Math.abs(amount - i)
            .toFixed(decimalCount)
            .slice(2)
        : "")
    )
  } catch (e) {
    console.log(e)
  }
}

export default Summary
