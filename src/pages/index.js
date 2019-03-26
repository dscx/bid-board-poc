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
      (totalEstimators * hoursSpent * missedBids * averageBidValue) / hitRate
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
            /**
             * this is causing the entire index page to re-render, along with all its children.
             * how should we pass this data to summary then?
             * we couod move summary into the controls thing and try it
             */
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

export default IndexPage
