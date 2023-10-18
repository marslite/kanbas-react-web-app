import {Link, useParams} from "react-router-dom";
import db from "../../Database";
import {FaEllipsisVertical} from "react-icons/fa6"
import {AiOutlinePlus} from "react-icons/ai"
import {AiOutlineCheckCircle} from "react-icons/ai"
import {MdArrowDropDown} from "react-icons/md"
import {BsPlus} from "react-icons/bs"
import {AiFillCheckCircle} from "react-icons/ai"


import "./index.css"


function Assignments(){
    const {courseId} = useParams();
    const assignments = db.assignments;
    const courseAssingments = assignments.filter(
    (assignment) => assignment.course === courseId );

    return(
        <div style={{marginTop: '47px'}} className="container ">
            <h2>Assignments for course {courseId}</h2>
            <div className="cont-edit container">
                            <span className="inliner">
                            <form className="d-flex " role="search">
                            <input className="form-control me-2 sp2" type="search" placeholder="Search for Assignments" aria-label="Search"/>
                          </form>
                                <button className="btn btn-light spaced">
                                <AiOutlinePlus className='plus-icon'/>
                                    Group 
                                </button>

                                  <button className="btn btn-danger moduleBtn">
                                  <AiOutlinePlus className='plus-icon'/>
                                     Assignment
                                    </button>
                                  <button className="btn btn-light spaced">
                                  <FaEllipsisVertical className='db-icon'/>

                                  </button>

                            </span>



                    </div>

                    <hr style={{width: "1000px", textAlign: "left", marginLeft:"-220px", marginTop:"3px"}}/>





  


        <div className="row">
                <div className="col-12">

            <li className="list-group-item list-group-item-secondary assid ">
            <FaEllipsisVertical className='db-icon'/>
            <FaEllipsisVertical className='db-icon double_Ellipsis'/>
            <MdArrowDropDown className='db-icon'/>

                    ASSIGNMENTS
                    <div className="float-end">
                    <button className="btn btn-light rou" >40% of Total</button>
            <BsPlus className='db-icon'/>
            <FaEllipsisVertical className='db-icon'/>
                </div>
            </li>   

            <div className="list-group">
            {courseAssingments.map((assignment) => (
            <a key={assignment._id} href={`#/kanbas/courses/${courseId}/${assignment._id}`}
            className="list-group-item"
            >

                <FaEllipsisVertical className='db-icon mvIcon'/>


                {assignment.title}
                <div className="float-end">
                <AiFillCheckCircle className='db-icon'/>
                <FaEllipsisVertical className='db-icon'/>


                </div>

                
                </a>
                    ))}
                </div>
            </div>
        </div>



            {/* <div className="list-group">


                {courseAssingments.map((assignment) => (
                    <a key={assignment._id} href={`#/kanbas/courses/${courseId}/${assignment._id}`}
                    className="list-group-item"
                    >{assignment.title}</a>
                ))}

            </div> */}
        </div>
    );

}

export default Assignments;