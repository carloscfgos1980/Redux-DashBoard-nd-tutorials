import ItemsList from "./ItemsList";

const List = ({ uniqueNames }) => {


    return (
        <div className="list">
            <h3>List</h3>
            <ul className="name-list">
                {uniqueNames.map((name, index) => (
                    <ItemsList key={index} name={name} />
                )
                )}
            </ul>
        </div>
    );
}

export default List;