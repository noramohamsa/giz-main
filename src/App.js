import "./assets/css/App.css";
import SiteNav from "./layout/siteNav";
import Home from "./views/Home";
import Todo from "./views/Todo";
import About from "./views/About";
import {Routes, Route} from "react-router-dom";
import Error from "./views/Error404";
import ViewCourses from "./views/ViewCourses";
import SayHello from "./components/SayHello";
// import Course from "./components/Course";
import {useState} from "react";

function App() {
    var [show, setShow] = useState(true);
    return (
        <div>
            <SayHello />
            {/* <Courses /> */}

            <SiteNav />

            <Routes>
                <Route path="" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="todo" element={<Todo />} />
                <Route
                    path="view_courses"
                    element={
                        <>
                            <button
                                className="btn btn-primary m-4"
                                onClick={() => setShow(!show)}
                            >
                                {show ? "Hide" : "Show"}
                            </button>
                            {show && <ViewCourses />}
                        </>
                    }
                />
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    );
}

export default App;
