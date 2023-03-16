import {useState} from "react";

const SayHello = () => {
    var [name, setName] = useState("");
    var [show, setShow] = useState(true);

    var handleInput = (e) => {
        setName(e.target.value);
    };

    var viewName = () => {
        setShow(false);
    };

    return (
        <div>
            {show ? (
                <>
                    <input type="text" onChange={handleInput} />
                    <button onClick={viewName}>Say</button>
                </>
            ) : (
                <h1>Hello {name}</h1>
            )}
        </div>
    );
};

export default SayHello;
