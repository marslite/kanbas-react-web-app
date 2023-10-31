import { useParams, Navigate, Route, Routes } from "react-router";
import db from "../../Kanbas/Database";
import "./index.css"
import { AiOutlineMenu } from "react-icons/ai";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import { Breadcrumb } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentsEditor";
// import Grades from "./Grades";
import Grades from "../../Kanbas/Grades"


function Courses({courses}){
    const {courseId} = useParams();
    const {pathname} = useLocation();
    const course = courses.find((course) => course._id === courseId);
    const path = pathname.split('/');
    console.log(path[4], "here");


    return(
        <div>
            <div className="styled">
            <AiOutlineMenu className='courses-icon'/>

            {/* <Breadcrumb className="styled">
            <ol className="breadcrumb " id="home_url">
                <li className="breadcrumb-item spacing_nav "><a href="#">{course.name}</a></li>
                <li className="breadcrumb-item active spacing_nav" aria-current="page">{path[4]}</li>
                </ol>

            </Breadcrumb> */}

            <nav style={{"--bs-breadcrumb-divider": "'>'"}} aria-label="breadcrumb" className="styled">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">{course.name}</a></li>
                <li className="breadcrumb-item active" aria-current="page">{path[4]}</li>
              </ol>
            </nav>





            <hr style={{width: "1300px", textAlign: "left", marginLeft:"-220px", marginTop:"3px"}}/>
            </div>

            <CourseNavigation/>

            <div>
                <div className="overflow-y-scroll position-fixed bottom-0 end-0" style={{left: "320px", top: "50px",}}>
                    <Routes>
                        //Routing needs fixing
                        <Route path="/" element={<Navigate  to="Home" />} />
                        <Route path="Home" element={<Home/> } />
                        <Route path="Modules" element={<Modules/>} />
                        <Route path="Assignments" element={<Assignments/>} />
                        <Route  path="Assignments/:assignmentId" element={<AssignmentEditor/>}/>
                        <Route path="Grades" element={<Grades/>} />
                    </Routes>

                </div>
            </div>
        </div>
    )
}

export default Courses;