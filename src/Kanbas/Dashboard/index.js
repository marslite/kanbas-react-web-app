
import {Link} from "react-router-dom";
import db from "../Database";
import KanbasNavigation from "../KanbasNavigation";
import "./index.css"
import courseImage from './course-bg.png'
// import { BiSolidHelpCircle } from 'react-icons/bi'; 
// import {PiNotePencilBold} from 'react-icons/bi'
import { PiNotebookDuotone } from "react-icons/pi";



function Dashboard(){
    const courses = db.courses;

    return(
        <div>

            <h1>Dashboard</h1>
            <hr style={{width: "1300px", textAlign: "left", marginLeft:"-231px"}}/>

            <h4>Published Courses</h4>
            <hr style={{width: "900px", textAlign: "left", marginLeft:"-231px"}}/>

            <div className="containter-fluid flex-wrap moved">
                <div className="row spacing">

                 {courses.map((course) => (
                <div className="col white_spacing_up">
                <div className="card" style={{width: '270px'}}>
                    <img className="card-img-top" src={courseImage}  alt="Card image cap"/>
                    <div className="card-body"> 
                    <h5 className="card-title"> {course.name}</h5>
                    <h6> {course.number}</h6>
                    <p className="card-text"> {course.startDate} ~ {course.endDate}.</p>
                    {/* <i className="fa fa-book" aria-hidden="true"></i> */}
                    {/* <RiCreativeCommonsFill className='wd-icon'/> */}
                    <PiNotebookDuotone className='db-icon'/>
                    </div>
                </div>
            </div>
                ))} 
                </div>
            </div>
        </div>
    );
}

export default Dashboard;