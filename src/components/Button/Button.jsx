const Button = (props) => {
  const { className, text, selectedButton, setData } = props;
  const buttonClassName = className + (text == selectedButton ? ' active' : '');
  const customId = className === 'reset-button' ? 'custom-reset-button' : null;
  const percentage = className === 'reset-button' ? '' : '%';
  const handleClick = (event) => {
    const { value } = event.target;
    value !== 'RESET' ? setData({ tipPercentage: parseInt(value) }) :
      setData({
        bill: 0, tipAmount: 0, totalAmount: 0, tipPercentage: 5,
        custom: '', people: 1
      });
  };
  let disabled = false;
  if (className === 'reset-button') {
    let { people, bill, tipPercentage } = props.info;
    disabled = (!people || !bill || !tipPercentage);
    } else {
    disabled = false;
  }
  // console.log('people', people, 'bill', bill, 'tipPercentage', tipPercentage)
  return (
    <>
      <button className={buttonClassName} type="button" value={text}
        id={customId} onClick={handleClick} disabled={disabled}>
        {text + percentage}
      </button>
    </>
  );
};

export default Button
