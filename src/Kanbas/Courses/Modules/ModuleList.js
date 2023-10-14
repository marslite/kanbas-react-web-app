import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css"
import { AiFillCheckCircle } from "react-icons/ai";
import {FaEllipsisV} from"react-icons/fa"



function ModuleList(){
    const {courseId } = useParams();
    const modules = db.modules;

    return(
        <div className="container test">
            <div className="row">
                <div className="col-12">
                    <ul className="list-group ">
                        {
                            modules.filter((module) => module.course === courseId)
                            .map((module,index) => (
                                <li key={index} className="list-group-item list-group-item-action">
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
