import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css"
import { AiFillCheckCircle } from "react-icons/ai";
import {FaEllipsisV} from"react-icons/fa"

import {FaEllipsisVertical} from "react-icons/fa6"
import {AiOutlinePlus} from "react-icons/ai"
import {AiOutlineCheckCircle} from "react-icons/ai"

import { useSelector, useDispatch } from "react-redux";
import{addModule, deleteModule, updateModule, setModule, setModules} from "./modulesReducer"

import * as client from "./client"

import { findModulesForCourse, createModule } from "./client";




function ModuleList(){
    const {courseId } = useParams();
    useEffect( ()=> {
        findModulesForCourse(courseId).then((modules) => dispatch(setModules(modules)))
    }, [courseId])
    // const modules = db.modules;
    const modules =  useSelector( (state) => state.modulesReducer.modules);
    const module =  useSelector( (state) => state.modulesReducer.module);
    const dispatch = useDispatch();

    const handleAddModule = () => {
        createModule(courseId, module).then( (module) => {dispatch(addModule(module))} )
    }

    const handleDeleteModule = (moduleId) => {
        client.deleteModule(moduleId).then( (status) => {dispatch(deleteModule(moduleId))})
    }



    // const [modules, setModules] = useState(db.modules);
    // const [module, setModule] = useState({
    //     name: "New Module",
    //     description: "New Description",
    //     course: courseId,
    // });

    //Since we are using modulesReducer we import all these functionalities and we call with dispatch.
    // Because of that we can comment all of the local functions here out.

    // const addModule = (module) => {
    //     setModules([
    //         {...module, _id: new Date().getTime().toString() },
    //         ...modules,
    //     ])
    // }

    // const deleteModule = (moduleId) => {
    //     setModules(modules.filter(
    //         //deletes the module when the condition is false
    //         //and generates a net set of Modules
    //         (module) => module._id !== moduleId
    //     ))
    // }

    // const updateModule = () => {
    //     setModules(
    //         modules.map( (m) => {
    //             if (m._id === module._id){
    //                 return module;
    //             }else{
    //                 return m
    //             }
    //         })
    //     )
    // }


    return(
        <div className="container test">
        <div className="cont-edit">

                            <span class="inliner">
                                <button className="btn btn-light spaced copall">Collapse All</button>
                                <button className="btn btn-light spaced">View Progress </button>
                                <div className="dropdown dropped">
                                    <button class="btn btn-light dropdown-toggle"  type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  <AiOutlineCheckCircle className='check-icon'/>

                                      Publish All
                                    </button>
                                    <ul className="dropdown-menu pos">
                                      <li><a className="dropdown-item" href="#">Action</a></li>
                                      <li><a className="dropdown-item" href="#">Another action</a></li>
                                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                  </div>
                                  <button className="btn btn-danger moduleBtn">
                                    Module
                                  <AiOutlinePlus className='plus-icon'/>
                                    </button>
                                  <button className="btn btn-light spaced">
                                  <FaEllipsisVertical className='db-icon'/>

                                  </button>

                            </span>
                    </div>

        <hr style={{width: "1000px", textAlign: "left", marginLeft:"-220px", marginTop:"3px"}}/>

                    <div className="float-left  a4_br" >
                        {/* <li className="list-group-item"> */}
                            <input className="list-group-item dsp-ln ed_ip"  value={module.name} onChange={(e) => dispatch(setModule({...module, name: e.target.value}))} />
                            {/* <button className="dsp-ln btn btn-secondary btn-cst" onClick={() => dispatch(addModule({...module, course: courseId})) }>Add</button> */}
                            <button className="dsp-ln btn btn-secondary btn-cst" onClick={handleAddModule }>Add</button>
                            <button className="dsp-ln btn btn-secondary btn-dts" onClick={() => dispatch(updateModule(module))}>Update</button>
                            <textarea className="dsp-bl" value={module.description} onChange={(e) => dispatch(setModule({...module, description: e.target.value}))} />
                        {/* </li> */}
                    </div>






            <div className="row">
                <div className="col-12">
                    <ul className="list-group ">
                        {
                            modules.filter((module) => module.course === courseId)
                            .map((module,index) => (
                                <li key={index} className="list-group-item list-group-item-secondary spac">
                                    <div className="flt_edt dsp-ln">
                                    <button className="dlt-edit btn btn-secondary dsp-ln btn-hg" onClick={() => dispatch(setModule(module))}>Update</button>
                                    <button className="dlt-edit btn btn-danger dsp-ln btn-hg" onClick={ () => handleDeleteModule(module._id)}>Delete</button>

                                    </div>
                                    <h3>{module.name}
                                    <div className="float-end">
                                    <AiFillCheckCircle className='icon-edit'/>
                                    <FaEllipsisV className='icon-edit2'/>
                                    </div>
                                    </h3>
                                    <p>{module.description}</p>

                                </li>
                                    
                                
                            ))
                        }

                    </ul>


                </div>

            </div>

        </div>


    );
}

export default ModuleList;
