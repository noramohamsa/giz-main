import { useEffect, useRef, useState } from "react";
import Course from "../components/Course";
const ViewCourses = () => {
    var [task, setTask] = useState({
        name: "",
        description: "",
        order: 0,
        date: undefined
    });
    var [coursesDetails, setCoursesDetails] = useState([
        { name: "HTML", description: "Hyper", order: 1, track: "front" },
        { name: "CSS", description: "Cascading", order: 2, track: "front" },
        { name: "JS", description: "Programming", order: 3, track: "front" },
        { name: "PHP", description: "Programming", order: 4, track: "back" },
        { name: "Laravel", description: "framework", order: 5, track: "back" }
    ]);

    var [show, setShow] = useState("front");
    var [courseDate, setCourseDate] = useState("")

    var taskInput = useRef();

    useEffect(() => {
        console.log("Rendered");
    }, []);
    useEffect(() => {
        if (task === { name: "", description: "", order: 0 }) return;
        console.log("Updated");
    }, [task]);

    useEffect(() => {
        return () => {
            console.log("الله يرحمك يا حسن");
        };
    }, []);

    var handleTaskName = (ev) => {
        setTask({ ...task, name: ev.target.value });
    };
    var handleTaskDescription = (ev) => {
        setTask({
            ...task,
            description: ev.target.value,
            order: coursesDetails.length + 1,
            date: new Date()
        });
    };
    var handleShow = (ev) => {
        setShow(ev.target.value);
    };
    var handleCourseDate = (ev) => {
        setCourseDate(ev.target.value);
        console.log(courseDate)
    }
    var addNewTask = () => {
        setCoursesDetails([...coursesDetails, task]);
        setTask({ name: "", description: "", order: 0, date: undefined });
        taskInput.current.focus();
    };

    var handelDelete = (order) => {
        // console.log("nora")
        let newArr = [...coursesDetails]
        newArr = newArr.filter(item => item.order !== order)
        console.log(newArr)
        setCoursesDetails([])
        console.log(coursesDetails)
    }
    return (
        <div className="text-center m-5">
            <input
                type="text"
                value={task.name}
                placeholder="task name"
                onChange={handleTaskName}
                ref={taskInput}
            />
            <input
                type="text"
                value={task.description}
                placeholder="task description"
                onChange={handleTaskDescription}
            />
            <input type="Submit" onClick={addNewTask} />
            <hr />
            <select name="courses" onChange={handleShow} value={show}>
                <option value="front">front</option>
                <option value="back">back</option>
            </select>
            <input type="date" value="courseDate" onChange={handleCourseDate} />
            <hr />

            {coursesDetails.map(
                (course) =>
                    course.track === show && (
                        <Course
                            onDelete={() => handelDelete(course.order)}
                            name={course.name}
                            description={course.description}
                            key={course.order}
                            order={course.order}

                        />
                    )
            )}
        </div>
    );
};

export default ViewCourses;
