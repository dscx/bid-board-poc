import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Controls from "../components/BidBoard/controls"
import Summary from "../components/BidBoard/summary"

class IndexPage extends React.Component {
  state = {
    totalEstimators: 1,
    hoursSpent: 0.5,
    missedBids: 1,
    averageBidValue: 1000,
    hitRate: 1,
  }

  onUpdate = ({ value, key }) => {
    this.setState({ [key]: value })
  }

  getPotentialGrowth = () => {
    const {
      averageBidValue,
      totalEstimators,
      hoursSpent,
      missedBids,
      hitRate,
    } = this.state

    return (
      formatMoney((totalEstimators * hoursSpent * missedBids * averageBidValue) * hitRate)
    )
  }

  render() {
    const {
      averageBidValue,
      totalEstimators,
      hoursSpent,
      missedBids,
      hitRate,
    } = this.state

    return (
      <Layout>
        <SEO title="Home" keywords={[`roi`, `bid board`, `investment`]} />
        <h1>How much can you grow with Bid Board? Check it out. </h1>
        <div
          style={{
            maxWidth: `950px`,
            marginBottom: `1.45rem`,
            boxShadow: "-2px 2px 10px 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Controls
            onUpdate={this.onUpdate}
          />
          <Summary
            totalEstimators={totalEstimators}
            hoursSpent={hoursSpent}
            missedBids={missedBids}
            averageBidValue={averageBidValue}
            hitRate={hitRate}
            potentialGrowth={this.getPotentialGrowth()}
          />
        </div>
      </Layout>
    )
  }
}

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

export default IndexPage
