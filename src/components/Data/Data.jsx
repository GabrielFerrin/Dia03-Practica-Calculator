import Button from "../Button/Button"
import Input from "../Input/Input"

const Data = ({ setData, info }) => {
  return (
    <div className="data-wrapper">
      <h1>Bill</h1>
      <label htmlFor="input-bill">
        <Input title="input-bill" setData={setData} info={info} />
      </label>
      <h2>Select Tip %</h2>
      <ul>
        {buttons.map((button) => (
          <li key={button} id={`percentage-${button}`}>
            <Button
              key={button} text={button} setData={setData}
              className={'percentage-button'}
              selectedButton={info.tipPercentage}
            />
          </li>
        ))}
        <li key="percentage-button">
          <Input title="percentage-button" setData={setData} info={info} />
        </li>
      </ul>
      <h2>Number of People</h2>
      <label htmlFor="input-people">
        <Input title="input-people" setData={setData} info={info} />
      </label>
    </div>
  )
}

export default Data

const buttons = [5, 10, 15, 25, 50]