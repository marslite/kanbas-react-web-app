import { useParams } from "react-router";
import db from "../../Kanbas/Database";
import "./index.css"
import { AiOutlineMenu } from "react-icons/ai";

function Courses(){
    const {courseId} = useParams();
    const course = db.courses.find((course) => course._id === courseId);

    return(
        <div>
            
            <h4 className="spaced"> 
            <AiOutlineMenu className='courses-icon'/>
                Course {course.name}
                </h4>
        </div>
    )
}

export default Courses;