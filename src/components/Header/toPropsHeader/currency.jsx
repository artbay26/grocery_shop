const SelectCurrency = (props) => {
    return (
        <select className="actions__currencyList">
            {
                props.currency.map(el =>
                    <option value={el.value} className="actions__currencyItem" key={el.id}>{el.title}</option>
                )
            }       
        </select>  
    )
}

export default SelectCurrency;