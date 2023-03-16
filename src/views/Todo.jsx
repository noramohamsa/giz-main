import {useState} from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";
const Todo = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    var handleNewTask = (ev) => {
        setNewTask(ev.target.value);
    };
    var handleTasks = () => {
        setTasks([...tasks, newTask]);
        setNewTask("");
    };

    return (
        <div>
            <Container className="m-5">
                <Form>
                    <Row>
                        <Col sm={9}>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                            >
                                <Form.Control
                                    autoComplete="off"
                                    type="text"
                                    placeholder="Enter your task"
                                    value={newTask}
                                    onChange={handleNewTask}
                                />
                            </Form.Group>
                        </Col>
                        <Col sm={3}>
                            <Button variant="primary" onClick={handleTasks}>
                                Add task
                            </Button>
                        </Col>
                    </Row>
                </Form>
                {tasks.length === 0 ? (
                    <h2>No tasks here</h2>
                ) : (
                    <ol>
                        {tasks.map((task, index) => (
                            <li key={index}>{task}</li>
                        ))}
                    </ol>
                )}
            </Container>
        </div>
    );
};

export default Todo;
