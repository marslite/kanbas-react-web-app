import React from "react";
import { useParams, Link} from "react-router-dom";
import db from "../../Database";
import {FaEllipsisVertical} from "react-icons/fa6"
import {AiOutlinePlus} from "react-icons/ai"
import {AiOutlineCheckCircle} from "react-icons/ai"
import {MdArrowDropDown} from "react-icons/md"
import {BsPlus} from "react-icons/bs"
import {AiFillCheckCircle} from "react-icons/ai"


import "./index.css"
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, deleteAssignment, updateAssignment,setAssignment } from "./assignmentsReducer";


function Assignments(){
    const {courseId} = useParams();
    console.log()

    // const assignments = db.assignments;
    const assignments = useSelector( (state) => state.assignmentsReducer.assignments);
    const assignment = useSelector( (state) => state.assignmentsReducer.assignment);
    const dispatch = useDispatch();

    const courseAssingments = assignments.filter(
    (assignment) => assignment.course === courseId );
    // assignments = updateAssignment(newAss);
    
    const hadleCreate = () => {
        const newAss = setAssignment({...assignment, course: courseId});
        const updateAssignment = [...assignments, newAss];
        dispatch(addAssignment(updateAssignment));

    }
    




    // const handleAddAss = () => {
    //     const newAss = {
    //         title: "New Title",
    //         course: courseId,
    //         _id: new Date().getTime().toString()
    //     };
    //     const updatedAss = [...assignments, newAss];

    //     dispatch(addAssignment(updatedAss));
    // }


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
                                {/* <Link to={`/kanbas/courses/${courseId}/Assignment/new_id`}> */}
                                <Link to={`/kanbas/courses/${courseId}/Assignments/newid`}>
                               
                                {/* <Link to={`/kanbas/courses/${courseId}/Assignments/AssignmentsEditor/index.js?isNewAssignment=true`} > */}

                                <button className="btn btn-danger moduleBtn" >

                                  <AiOutlinePlus className='plus-icon'/>
                                     Assignment
                                    </button>
                                </Link>

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
        //  <Link to={`/kanbas/courses/${courseId}/Assignment/new`} onClick={()=> dispatch(setAssignment({...assignment, course: courseId}))}></Link>
            <a key={assignment._id} href={`#/kanbas/courses/${courseId}/Assignments/${assignment._id}`}
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