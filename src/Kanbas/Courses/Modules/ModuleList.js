import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css"
import { AiFillCheckCircle } from "react-icons/ai";
import {FaEllipsisV} from"react-icons/fa"

import {FaEllipsisVertical} from "react-icons/fa6"
import {AiOutlinePlus} from "react-icons/ai"
import {AiOutlineCheckCircle} from "react-icons/ai"



function ModuleList(){
    const {courseId } = useParams();
    const modules = db.modules;

    return(
        <div className="container test">

        <div className="cont-edit " >
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




            <div className="row">
                <div className="col-12">
                    <ul className="list-group ">
                        {
                            modules.filter((module) => module.course === courseId)
                            .map((module,index) => (
                                <li key={index} className="list-group-item list-group-item-secondary spac">
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
