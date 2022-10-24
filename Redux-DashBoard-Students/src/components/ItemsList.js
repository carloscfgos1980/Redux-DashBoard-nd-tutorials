const ItemsList = ({ name, aveFun, aveDifficulty }) => {
    return (
        <div className="item-list">
            {name && <p>{name}</p>}
            {aveFun && <p>{aveFun}</p>}
            {aveDifficulty && <p>{aveDifficulty}</p>}
        </div>
    );
}

export default ItemsList;