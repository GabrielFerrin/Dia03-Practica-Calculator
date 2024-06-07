import { useState } from 'react'

const Amount = ({ title, value }) => {
  const properties = {
    title: title === 'tip-amount' ? 'Tip Amount' : 'Total',
  }
  return (
    <>
      <div className={title}>
        <div><h2>{properties.title}</h2><p>/ person</p></div>
        <h3>$<span id={title}>{parseFloat(value).toFixed(2)}</span></h3>
      </div>
    </>
  )
}

export default Amount
