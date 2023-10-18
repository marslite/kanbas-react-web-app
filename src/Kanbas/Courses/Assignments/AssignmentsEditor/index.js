
import { useNavigate,useParams, Link } from "react-router-dom";
import db from "../../../Database";
import "../AssignmentsEditor/index.css"

function AssignmentEditor(){
    const {assignmentId} = useParams();
    const assignment = db.assignments.find(
        (assignment)=> assignment._id === assignmentId
    );

    const {courseId} = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("TBD for later assignments");
        navigate(`/kanbas/courses/${courseId}/Assignments`);
    };


    return(
        <div className="bodySpace">
            <h2>Assignment Name</h2>
            <input value={assignment.title} className="form-control mb-2"/>
            <Link to={`/kanbas/courses/${courseId}/Assignments`} className="btn btn-danger">
                Cancel
            </Link>
            <button onClick={handleSave} className="btn btn-success me-2">Save</button>

        </div>
    );
}

export default AssignmentEditor;