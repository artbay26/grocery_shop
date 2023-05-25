const SelectLanguage = (props) => {
    return (
        <select className="actions__languageList">
            {
                props.languages.map(el =>
                    <option value="english" className="actions__languageItem" key={el.id}>{el.title}</option>
                )
            }       
        </select>  
    )
}

export default SelectLanguage;