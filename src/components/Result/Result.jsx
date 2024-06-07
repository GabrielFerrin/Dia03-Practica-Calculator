import Amount from "../Amount/Amount"
import Button from "../Button/Button"

const Result = ({ info, setData }) => {
  return (
    <div className="result-wrapper">
      <div className="result-txt">
        <Amount title="tip-amount" value={info.tipAmount} />
        <Amount title="total-amount" value={info.totalAmount} />
      </div>
      <Button text="RESET" className="reset-button" setData={setData}
        info={info} />
    </div>
  )
}

export default Result
