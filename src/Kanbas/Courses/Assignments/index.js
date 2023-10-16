import {Link, useParams} from "react-router-dom";
import db from "../../Database";


function Assignments(){
    const {courseId} = useParams();
    const assignments = db.assignments;
    // const courseAssingments.filter(

    // )

}