import { Select as Select2 } from 'antd'
import { useEffect, useState } from 'react'
import * as all from 'turkey-district-maps-3'
import React from 'react'

const { Option } = Select2

/* function onBlur() {
  console.log("blur");
} */

/* function onFocus() {
  console.log("focus");
} */

/* function onSearch(val) {
  console.log("search:", val);
} */

const Select = ({ setCity }) => {
  const [cities, setCities] = useState([])

  useEffect(() => {
    setCities(Object.keys(all).sort((a, b) => a.localeCompare(b, 'tr')))
  }, [])

  function onChange(value) {
    setCity(value)
  }

  return (
    <Select2
      showSearch
      style={{ width: 200 }}
      placeholder='Select a person'
      optionFilterProp='children'
      onChange={onChange}
      defaultValue='ISTANBUL'
      /* onFocus={onFocus}
      onBlur={onBlur}
      onSearch={onSearch} */
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {cities &&
        cities.map((name, i) => (
          <Option key={i} value={name}>
            {name.toUpperCase()}
          </Option>
        ))}
    </Select2>
  )
}

export default Select
