

const actionsUser = (props) => {
        return (
            <ul className="actions__userList">
                {
                    props.actions.map(el =>
                        <li className="actions__userItem" key={el.id}>
                            <a href='#' className="actions__link">
                            {el.faIcon}
                            </a>
                        </li> 
                    )
                }       
            </ul> 
        )
    }

export default actionsUser;