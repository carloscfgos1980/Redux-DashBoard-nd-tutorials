const ItemsList = ({ subject, aveFun, aveDifficulty }) => {
    return (
        <div className="item-list">
            {subject && <p>{subject}</p>}
            {aveFun && <p>{aveFun}</p>}
            {aveDifficulty && <p>{aveDifficulty}</p>}
        </div>
    );
}

export default ItemsList;