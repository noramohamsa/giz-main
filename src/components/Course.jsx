const Course = ({name, description,onDelete,order}) => {
    return (
        <div className="m-4">
            <h2>{name}</h2>
            <p>{description}</p>
            <button className="btn btn-danger" 
            onClick={() => onDelete(order)}>Delete</button>
            <hr />
        </div>
    );
};

export default Course;
