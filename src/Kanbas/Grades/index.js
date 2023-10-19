import { useParams } from "react-router-dom";
import db from "../../Kanbas/Database";


function Grades(){
    const {courseId} = useParams();
    const assignments = db.assignments.filter( (assignment) => assignment.course === courseId ) 
    const enrollments = db.enrollments.filter( (enrollment) => enrollment.course === courseId )


    return(
        <div style={{marginTop: '47px'}}>
            <h4>Gradebook</h4>

            <div className="cont-edit container">
                {/* <span className="inliner">

                </span> */}

                <div className="float-end">
                <button className="btn btn-light"> Import </button>
                <button className="btn btn-light"> Import </button>
                <button className="btn btn-light"> Import </button>
                </div>



            </div>

            <div className="row">
                    <div className="col-12">
                        <div className="wd-grid-row">
                            <div className="wd-grid-col-half-page">
                                <h6>Student Names</h6>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="formc" value={"Search Students"} style={{"width": "426px"}}/> 
                                </div>

                            </div>

                            <div className="wd-grid-col-half-page">
                                <h6>Assignment Names</h6>
                                <input type="text" className="form-control" id="formc" value={"Search Assignments"} style={{"width": "426px"}}/>                                 
                            </div>

                        </div>

                    </div>

                </div> <br/>

                <button className="btn btn-light">
                    Apply Flilters

                </button> <br/> <br/>




            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <th> Student Name</th>
                        {assignments.map((assignment) => (<th>{assignment.title}</th>))}
                    </thead>
                    <tbody>
                        {enrollments.map( (enrollment) => {
                            const user = db.users.find((user) => user._id === enrollment.user);
                            return(
                                <tr>
                                    <td>{user.firstName} {user.lastName}</td>
                                    {assignments.map( (assignment) => {
                                        const grade = db.grades.find(
                                            (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                            return (<td>{grade?.grade || ""}</td>);})}
                               </tr>
                              )})}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Grades;