
const JSONListItem = ({ item }) => {
    const spanKeyClass = "listItemKey";
    const spanValueClass = "listItemValue";


    return (
        <li className="outLiCompleteListItem">
        {Object.entries(item).map(([key, value], index) => (
            <div key={key}>
                <span className={index === 0 ? "mainKeyListItem" : ""}>{index === 0 ? `${key} [${value}]` : `${key} :` }</span>
                <span>
                    {typeof value ==="object" ? 
                    (
                    <ul className= "innerUl">
                    {Object.entries(value).map(([subKey, subValue], subIndex) => (
                        <li key = {subKey} className={subIndex % 2 === 0 ? "evenInnerUl" : "oddInnerUl"}>
                            <span>{subKey} : </span>
                            <span>{typeof subValue === "object" ? JSON.stringify(subValue) : subValue}</span>
                        </li>  
                    ))}
                    </ul>
                    )
                    : 
                    ( index === 0 ? "" : value )} 
                </span>
            </div>
        ))}
        </li>
    )

}

export default JSONListItem;









