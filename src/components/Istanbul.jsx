import React from 'react'
import { data } from '../data.js'

import {
  onMouseEnter,
  onMouseLeave,
  onClick2,
  onHover2
} from './handleFunctions'

const parentSvgStyles = {
  width: 'auto',
  margin: '0 auto'
}

const TurkeyCityMaps = ({
  city,
  customStyle: { idleColor, hoverColor },
  strokeStyle: { strokeWidth, strokeColor },
  hidden,
  viewBox: { top, left, width, height },
  distWrapper,
  onClick,
  onHover
}) => {
  const distWrapper2 = () => {
    return getDistrict().map(({ element, distData }) =>
      distWrapper ? distWrapper(element, distData) : element
    )
  }

  const getDistrict = () => {
    return data[`${city}`].map((distData, i) => {
      let element = (
        <path
          key={i}
          id={distData.name}
          style={{ stroke: `${strokeColor}` }}
          d={distData.d}
          fill={idleColor}
          onMouseEnter={(e) => onMouseEnter(e, hoverColor)}
          onMouseLeave={(e) => onMouseLeave(e, idleColor)}
          onClick={(e) => onClick2(e, onClick)}
          onMouseOver={(e) => onHover2(e, onHover)}
          strokeWidth={`${strokeWidth}`}
        />
      )
      return { element, distData }
    })
  }

  return (
    <div style={parentSvgStyles}>
      <svg
        hidden={hidden}
        viewBox={`${left} ${top} ${width} ${height}`}
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
      >
        <g>{distWrapper2()}</g>
      </svg>
    </div>
  )
}

TurkeyCityMaps.defaultProps = {
  city: 'istanbul',
  customStyle: {
    idleColor: '#444',
    hoverColor: '#dc3522'
  },
  strokeStyle: { strokeWidth: '0.08', strokeColor: 'white' },
  viewBox: { top: 30, left: 75, width: 74, height: 45 }
}

export default TurkeyCityMaps
