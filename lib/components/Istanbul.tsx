import React from 'react'
import { data } from '../data'

import {
  onMouseEnter,
  onMouseLeave,
  onClick2,
  onHover2
} from './handleFunctions'

type District = {
  d: string
  name: string
}

type ViewBox = {
  top: number
  left: number
  width: number
  height: number
}

type CustomStyle = {
  idleColor: string
  hoverColor: string
}

type StrokeStyle = {
  strokeWidth: string
  strokeColor: string
}

export type TurkeyCityMapsProps = {
  city?: keyof typeof data
  customStyle?: CustomStyle
  strokeStyle?: StrokeStyle
  hidden?: boolean
  viewBox?: ViewBox
  distWrapper?: (element: React.ReactNode, distData: District) => React.ReactNode
  onClick?: (event: { distPath: string | null; name: string }) => void
  onHover?: (event: { distPath: string | null; name: string }) => void
}

type DistrictElement = {
  element: React.ReactNode
  distData: District
}

const parentSvgStyles: React.CSSProperties = {
  width: 'auto',
  margin: '0 auto'
}

const TurkeyCityMaps = ({
  city = 'istanbul',
  customStyle = { idleColor: '#444', hoverColor: '#dc3522' },
  strokeStyle = { strokeWidth: '0.08', strokeColor: 'white' },
  hidden,
  viewBox = { top: 30, left: 75, width: 74, height: 45 },
  distWrapper,
  onClick,
  onHover
}: TurkeyCityMapsProps): React.ReactElement => {
  const svgStyles: React.CSSProperties | undefined = hidden ? { display: 'none' } : undefined

  const distWrapper2 = (): React.ReactNode[] => {
    return getDistrict().map(({ element, distData }) =>
      distWrapper ? distWrapper(element, distData) : element
    )
  }

  const getDistrict = (): DistrictElement[] => {
    return data[city].map((distData, i) => {
      const element = (
        <path
          key={i}
          id={distData.name}
          style={{ stroke: strokeStyle.strokeColor }}
          d={distData.d}
          fill={customStyle.idleColor}
          onMouseEnter={(e) => onMouseEnter(e, customStyle.hoverColor)}
          onMouseLeave={(e) => onMouseLeave(e, customStyle.idleColor)}
          onClick={(e) => onClick2(e, onClick)}
          onMouseOver={(e) => onHover2(e, onHover)}
          strokeWidth={strokeStyle.strokeWidth}
        />
      )
      return { element, distData }
    })
  }

  return (
    <div style={parentSvgStyles}>
      <svg
        style={svgStyles}
        viewBox={`${viewBox.left} ${viewBox.top} ${viewBox.width} ${viewBox.height}`}
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
      >
        <g>{distWrapper2()}</g>
      </svg>
    </div>
  )
}

export default TurkeyCityMaps
