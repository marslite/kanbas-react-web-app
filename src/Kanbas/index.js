import { Route, Routes, Navigate} from "react-router-dom";
// import Nav from "../Nav";
import KanbasNavigation from "./KanbasNavigation/index.js";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import db from "./Database"
import { useEffect, useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";

function Kanbas(){

    // const  [courses, setCourses] = useState(db.courses);
    const  [courses, setCourses] = useState([]);

    // const findAllCourses = async () => {
    //     const response = await axios.get(URL);
    //     setCourses(response.data);
    // }

    // useEffect( () => {
    //     findAllCourses()
    // }, [])

    const URL = "http://localhost:4000/api/courses";
    const findAllCourses = async () => {
      const response = await axios.get(URL);
      setCourses(response.data);
    };
    useEffect(() => {
      findAllCourses();
    }, []);
  


    const [course, setCourse] =  useState({
        name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
    });

    // const addNewCourse = () => {
    //     setCourses([...courses, {...course, _id: new Date().getTime().toString() } ]);
    // };

    const addNewCourse = async () => {
        const response = await axios.post(URL,course);
        // setCourses([...courses, {...course, _id: new Date().getTime().toString() } ]);
        setCourses([ ...courses,{...response.data, _id: new Date().getTime().toString( )}]);
        // setCourse({name:""});
    }

    const deleteCourse = (courseId) => {
        setCourses(courses.filter((course) => course._id !== courseId ));
    }

    const updateCourse = () => {
        setCourses(
            courses.map((c) => {
                if (c._id === course._id ) {
                    return course;
                }else{
                    return c;
                }
            })
        )
    };


    return(
    <Provider store={store}>

    <div className="d-flex page-content" >
        {/* <Nav/> */}
        {/* <h1>Kanbas</h1> <br/> */}
        <KanbasNavigation/>
        {/* <Account/> */}
        <div>
        <Routes>
            <Route  path="/" element={<Navigate to="dashboard"/>} />
            <Route  path="account" element={<h1>Account</h1>} />
            <Route  path="dashboard" element={<Dashboard course = {course} courses={courses} setCourse={setCourse} addNewCourse={addNewCourse} deleteCourse={deleteCourse} updateCourse={updateCourse} />} />
            <Route  path="courses/:courseId/*" element={ <Courses courses={courses}/>} /> 
            
        </Routes>

        </div>


    </div>
    </Provider>
        


    )
}

export default Kanbas;