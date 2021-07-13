import React from 'react'

import * as All from 'turkey-district-maps-3'
import Select from './components/Select'
import { Tooltip } from 'antd'
import 'antd/dist/antd.css'
import { useState } from 'react'

const styles = {
  maxWidth: '800px',
  margin: '0 auto'
}

const props = {
  distWrapper: (distComponent, distData) => (
    <Tooltip title={distData.name} key={distData.name}>
      {distComponent}
    </Tooltip>
  ),
  onClick: ({ name }) => {
    console.log(name + " is just clicked!")
  },
  /* onHover: ({ name }) => {
    console.log("Cursor is over on " + name + "!")
  }, */
  /* customStyle: {
    idleColor: 'red',
    hoverColor: 'gray'
  }, */
  /* strokeStyle: {
    strokeWidth: '.09',
    strokeColor: 'red'
  } */
}

const App = () => {
  const [selectedCity, setCity] = useState('istanbul')

  return (
    <>
      <br />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Select setCity={setCity} />
      </div>
      <br />
      <br />
      <div style={styles}>
        {Object.values(All) &&
          Object.values(All)
            .filter(
              (city) => city.name.toLowerCase() === selectedCity.toLowerCase()
            )
            .map(function (el, i) {
              return <div key={i}>{el({ ...props })}</div>
            })}
      </div>
    </>
  )
}

export default App
