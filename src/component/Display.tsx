import React from 'react'

interface displayProps {
    list: string[];
  }

const Display = ({list}: displayProps) => {
  return (
    <div>
{list.map((element, index) => {
  return (
    <div key={index}>
      <h2>{element}</h2>
    </div>
  );
})}
</div>
  )
}

export default Display
