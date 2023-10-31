
import {React, useState} from "react";
import {Link} from "react-router-dom";
import db from "../Database";
import KanbasNavigation from "../KanbasNavigation";
import "./index.css"
import courseImage from './course-bg.png'
// import { BiSolidHelpCircle } from 'react-icons/bi'; 
// import {PiNotePencilBold} from 'react-icons/bi'
import { PiNotebookDuotone } from "react-icons/pi";



function Dashboard(){
    // const courses = db.courses;
    const  [courses, setCourses] = useState(db.courses);

    const [course, setCourse] =  useState({
        name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
    });

    const addNewCourse = () => {
        setCourses([...courses, {...course, _id: new Date().getTime()} ]);
    };

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
        <div>

            <h1>Dashboard</h1>
            <hr style={{width: "1300px", textAlign: "left", marginLeft:"-231px"}}/>

            <h4>Published Courses</h4>    
            <hr style={{width: "900px", textAlign: "left", marginLeft:"0px"}}/>

            <div className="mv-on">
                <h5>Course</h5>
                <input value={course.name} className="form-control"  
                onChange={(e) => setCourse({...course, name: e.target.value})}/>
                <input value={course.number} className="form-control" 
                onChange={(e) => setCourse({...course, number: e.target.value})}/>
                <input value={course.startDate} className="form-control" type="date"
                onChange={(e) => setCourse({...course, startDate: e.target.value})} />
                <input value={course.endDate} className="form-control" type="date"
                 onChange={(e) => setCourse({...course, endDate: e.target.value})}/>
            <li className="list-group-item">
                {/* <input  /> */}
                <button className="btn btn-secondary btn-mv" onClick={addNewCourse}>Add</button>
                <button className="btn btn-secondary" onClick={updateCourse}>Edit</button>

            </li>
            </div>

            <div className="containter-fluid flex-wrap moved">
                <div className="row spacing">

                 {courses.map((course) => (

                <div className="col white_spacing_up">
                <div className="card" style={{width: '270px'}}>

                {/* <button className="btn btn-danger btn-mv btn-dlt" onClick={(event) => {
                    event.preventDefault(); deleteCourse(course._id);
                }}>Delete</button> */}
                

                    <img className="card-img-top" src={courseImage}  alt="Card image cap"/>
                    <div className="card-body"> 
                    <Link key={course._id} to={`/kanbas/courses/${course._id}`} className="list-group-item"><h5 className="card-title"> {course.name}</h5></Link>
                    <h6> {course.number} </h6>                    
                    <p className="card-text"> {course.startDate} ~ {course.endDate}.</p>

                    {/* <i className="fa fa-book" aria-hidden="true"></i> */}
                    {/* <RiCreativeCommonsFill className='wd-icon'/> */}
                    <PiNotebookDuotone className='db-icon'/>
                    <div className="float-end">
                    ID: {course._id}
                    </div>
                    </div>
                    <div className="d-flx"> 

                    <button className="btn btn-secondary edit-mv" onClick={(event) => {event.preventDefault(); setCourse(course); console.log(event, "here")}}>Edit</button>
                    <button className="btn btn-danger btn-mv btn-dlt" onClick={(event) => {
                    event.preventDefault(); deleteCourse(course._id);
                }}>Delete</button>

                    </div>
                </div>
            </div>
            // <Link key={course._id} to={`/kanbas/courses/${course._id}`} className="list-group item"> {course.name}</Link>

                ))} 


                </div>
            </div>
        </div>
    );
}

export default Dashboard;