import axios from "axios";
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

function Kanbas(){

    // const  [courses, setCourses] = useState(db.courses);
    const  [courses, setCourses] = useState([]);
    // const URL = "http://localhost:4000/api/courses";
    const URL = "https://kanbas-node-server-app-zi6l.onrender.com/api/courses"

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

  


    const addNewCourse = async () => {
        const response = await axios.post(URL,course);
        setCourses([ ...courses,{...response.data, _id: new Date().getTime().toString( )}]);
    }




    const deleteCourse = async (id) => {
        const response = await axios.delete(`${URL}/${id}`);
        setCourses(courses.filter((course) => course._id !== id ))
    }




    const updateCourse  = async () => {
        console.log(course, "Check here");
        const response = await axios.put(`${URL}/${course._id}`,course)

        setCourses( 
            courses.map( (c) => {
                if (c._id === course._id){
                    //If it finds the right course by the id then put course in c
                    //So c = course (which contains the updated course data)
                    // console.log(course, "New Check")
                    return course;
                }else{
                    return c;
                }
            })
        
        );


    }



    
  


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