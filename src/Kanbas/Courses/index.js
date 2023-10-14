import { useParams, Navigate, Route, Routes } from "react-router";
import db from "../../Kanbas/Database";
import "./index.css"
import { AiOutlineMenu } from "react-icons/ai";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";


function Courses(){
    const {courseId} = useParams();
    const course = db.courses.find((course) => course._id === courseId);
    // const here = console.log("inside MODULES");

    return(
        <div>
            
            <h4 className="spaced"> 
            <AiOutlineMenu className='courses-icon'/>
                Course {course.name}
                {/* <hr style="width:1300px;text-align:left;margin-left: -231px;">  */}
                <hr style={{width: "1300px", textAlign: "left", marginLeft:"-231px"}}/>

                </h4>
            <CourseNavigation/>

            <div>
                <div className="overflow-y-scroll position-fixed bottom-0 end-0" style={{left: "320px", top: "50px",}}>
                    <Routes>
                        //Routing need fixing
                        <Route path="/" element={<Navigate  to="Home" />} />
                        <Route path="Home" element={<h1>Home </h1> } />
                        <Route path="Modules" element={<Modules/>} />
                        <Route path="Assignments" element={<h1>Assignments</h1>} />
                        <Route  path="Assignments/:assignmentId" element={<h1>Assignments Editor</h1>}/>
                        <Route path="Grades" element={<h1>Grades</h1>} />
                    </Routes>

                </div>
            </div>
        </div>
    )
}

export default Courses;