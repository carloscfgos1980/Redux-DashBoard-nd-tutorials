import ItemsList from "./ItemsList";

const List = ({ uniqueSubjects }) => {


    return (
        <div className="list">
            <h3>List</h3>
            <ul className="subject-list">
                {uniqueSubjects.map((subject, index) => (
                    <ItemsList key={index} subject={subject} />
                )
                )}
            </ul>
        </div>
    );
}

export default List;