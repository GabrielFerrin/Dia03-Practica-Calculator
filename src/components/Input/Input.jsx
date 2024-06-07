const Input = (props) => {
  const { setData } = props;
  const properties = {
    id: props.title === 'percentage-button' ? 'custom-percentage-button' :
      props.title,
    className: props.title === 'percentage-button' ? 'percentage-button' :
      props.title,
    type: 'number',
    value: props.title === 'input-bill' ? props.info.bill :
      props.title === 'input-people' ? props.info.people : props.info.tipPercentage,
    min: props.title === 'input-bill' ? 0 : 1,
    placeholder: props.title === 'percentage-button' ? 'Custom' : null,
  }
  const updateData = (event) => {
    const { id, value } = event.target || {};
    // bill input
    if (id === 'input-bill' && value !== undefined) {
      const bill = value === '' ? 0 : parseFloat(value);
      setData({ bill });
    // custom percentage input
    } else if (id === 'custom-percentage-button' && value !== undefined) {
      const tipPercentage = value === '' ? 5 : parseFloat(value);
      setData({ tipPercentage });
    // number of people input
    } else if (id === 'input-people' && value !== undefined) {
      const people = value === '' ? 1 : parseFloat(value);
      setData({ people });
    }
  }

  return (<><input {...properties} onChange={updateData} /></>);
}

export default Input;
