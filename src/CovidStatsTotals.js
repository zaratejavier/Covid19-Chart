import React from "react"

export default function CovidStatsTotals({ covidData }) {

  function formData() {
    return covidData.map(country => {
      return (
        <div style={styles.container}>
          <h1>{country.country}</h1>
          <div style={styles.statsContainer}>
            <div style={styles.statConter}> 
              <div style={styles.statHeader}>Total Cases</div>
              <div style={styles.statValue}>{country.cases.total}</div>
            </div>

            <div style={styles.statConter}> 
              <div style={styles.statHeader}>Total Deaths</div>
              <div style={styles.statValue}>{country.deaths.total}</div>
            </div> 

            <div style={styles.statConter}> 
              <div style={styles.statHeader}>Total Test</div>
              <div style={styles.statValue}>{country.tests.total}</div>
            </div>

          </div>
        </div>
      )
    })
  }

  return (
    <div style={styles.listContainer}>
      {formData()}
    </div>
  )
}

const styles = {
  listContainer: {
    margin: `10px 50px`,
    display: 'grid',
    gridTemplateColumns: "1fr 1fr 1fr",
    gridGap: "10px"
  },
  container: {
    border: `1px solid`,
    // width: '300px'
  },
  statsContainer: {
    display: "flex",
    justifyContent: "space-around"
  },
  statConter: {

  }
}