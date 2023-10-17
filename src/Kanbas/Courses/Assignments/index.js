import {Link, useParams} from "react-router-dom";
import db from "../../Database";


function Assignments(){
    const {courseId} = useParams();
    const assignments = db.assignments;
    const courseAssingments = assignments.filter(
    (assignment) => assignment.course === courseId );

    return(
        <div style={{marginTop: '47px'}}>
            <h2>Assignments for course {courseId}</h2>
            <div className="list-group">
                {courseAssingments.map((assignment) => (
                    <a key={assignment._id} href={`#/kanbas/courses/${courseId}/${assignment._id}`}
                    className="list-group-item"
                    >{assignment.title}</a>
                ))}

            </div>
        </div>
    );

}

export default Assignments;