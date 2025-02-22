# Turkey District Maps React Component

> A SVG district maps of Turkey cities for React JS applications.

[![NPM](https://img.shields.io/npm/v/turkey-district-maps-3.svg)](https://www.npmjs.com/package/turkey-district-maps-3) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Made with React](https://img.shields.io/badge/React-17-blue?logo=react&logoColor=white)](https://www.npmjs.com/package/react)

## 🌏  Open in the Cloud 

Click any of the buttons below to start a new development environment to demo or contribute to the codebase without having to install anything on your machine:

[![Open in VS Code](https://img.shields.io/badge/Open%20in-VS%20Code-blue?logo=visualstudiocode)](https://vscode.dev/github/ritzykey/turkey-district-map)
[![Edit example-turkey-district-maps](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/example-turkey-district-maps-9qcxyk)

## Install

```bash
npm install turkey-district-maps-3
```

## Usage

```jsx
import { Istanbul, Ankara } from 'turkey-district-maps-3'

const App = () => (
  <>
    <Istanbul />
    <Ankara />
  </>
)
```

### Handling events

On click example:

```jsx
<Istanbul onClick={({ name }) => console.log(name + ' is just clicked!')} />
```

On mouse over example:

```jsx
<Istanbul
  onHover={({ name }) => console.log('Cursor is over on ' + name + '!')}
/>
```

### District component wrapping

```jsx
<Istanbul
  distWrapper={(distComponent, distData) => (
    <Tooltip title={distData.name} key={distData.name}>
      {distComponent}
    </Tooltip>
  )}
/>
```

This is generally used for [Antd](https://ant.design/components/tooltip/) style _Tooltip_.

## API

### Types

| Type              | Description                                                                          |
| :---------------- | :----------------------------------------------------------------------------------- |
| _distDataType_    | { **name**: _string_, **distPath**: _string_ }                                       |
| _viewBoxType_     | { **top**: _number_, **left**: _number_, **width**: _number_, **height**: _number_ } |
| _customStyleType_ | { **idleColor**: _string_, **hoverColor**: _string_ }                                |
| _strokeStyleType_ | { **strokeWidth**: _string_, **strokeColor**: _string_ }                             |

### props

| Property    | Description                                                | Type                                                                                 | Default                                                              |
| :---------- | :--------------------------------------------------------- | :----------------------------------------------------------------------------------- | :------------------------------------------------------------------- |
| distWrapper | District DOMs are wrapped by provided component.           | ( **cityComponent**: _JSX.Element_, **distData** : _distDataType_ ) => _JSX.Element_ | _Unwrapped district_                                                 |
| onClick     | Event when a district clicked on the map.                  | ( **district** : _distDataType_ ) => _void_                                          | -                                                                    |
| onHover     | Event when a district hovered on the map.                  | ( **district** : _distDataType_ ) => _void_                                          | -                                                                    |
| customStyle | Stylizing the component.                                   | _customStyleType_                                                                    | { **idleColor**: _#444_, **hoverColor**: _#dc3522_ }                 |
| strokeStyle | Stylizing the component.                                   | _strokeStyleType_                                                                    | { **strokeWidth**: _0.08_, **strokeColor**: _white_ }                |
| viewBox     | Position and dimension information of the map (svg) layout | _viewBoxType_                                                                        | { **top**: _30_, **left**: _75_, **width**: _74_, **height**: _45_ } |
| hidden      | Defines the visibility of the component                    | _boolean_                                                                            | _false_                                                              |

## Development

Local development is broken into two parts (ideally using two tabs).

First, run rollup to watch your `src/` module and automatically recompile it into `dist/` whenever you make changes.

```bash
npm start # runs rollup with watch flag
```

The second part will be running the `example/` create-react-app that's linked to the local version of your module.

```bash
# (in another tab)
cd example
npm start # runs create-react-app dev server
```

## License

MIT © [ritzykey](https://github.com/ritzykey)
