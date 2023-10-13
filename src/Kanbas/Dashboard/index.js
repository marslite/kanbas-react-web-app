
import {Link} from "react-router-dom";
import db from "../Database";
import KanbasNavigation from "../KanbasNavigation";
import "./index.css"
import courseImage from './course-bg.png'


function Dashboard(){
    const courses = db.courses;

    return(
        <div>

            <h1>Dashboard</h1>
            <h4>Published Courses</h4>
            <div className="containter-fluid flex-wrap moved">
                <div className="row spacing">

                    <div className="col white_spacing_up">
                        <div className="card" style={{width: '270px'}}>
                            <img className="card-img-top" src={courseImage}  alt="Card image cap"/>
                            <div className="card-body"> 
                            <h5 className="card-title"> CS4550 12631 Web Dev</h5>
                            <h6>CS4550.12631</h6>
                            <p className="card-text">17367_2 Summer 1 2023 .</p>
                            <i className="fa fa-book" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>





                {/* {courses.map((course) => (<a  key={course._id} href={`/Kanbas/Courses/${course._id}`} className="list-group" >
                    {course.name}
                </a>
                ))} */}

                </div>
                
            </div>


        </div>
    );
}

export default Dashboard;