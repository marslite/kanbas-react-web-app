
import {Link} from "react-router-dom";
import db from "../Database";
import KanbasNavigation from "../KanbasNavigation";


function Dashboard(){
    const courses = db.courses;

    return(
        <div>

            <h1>Dashboard</h1>
            <div className="list-group">
                {courses.map((course) => (<a  key={course._id} href={`/Kanbas/Courses/${course._id}`} className="list-group" >
                    {course.name}
                </a>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;