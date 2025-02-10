import React from 'react'

const TableRow = ({ tableRow }) => {
  return (
    <tr>
      {
        Object.entries(tableRow).map(([key, value], index)=>
          <td key = {index}>
            {typeof value === "object" ? JSON.stringify(value) : value}
          </td>
        )
      }
    </tr>

  )
}

export default TableRow