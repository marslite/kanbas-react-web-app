
import { useNavigate,useParams, Link } from "react-router-dom";
import db from "../../../Database";
import "../AssignmentsEditor/index.css"
import {FaEllipsisVertical} from "react-icons/fa6"
import { AiFillCheckCircle } from "react-icons/ai";



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
            <div className="container-small">
                
            <div className="float-end">
                <span className="inlnr">
                    <span className="color_text">

                        <AiFillCheckCircle className='green-check'/>

                        Published
                        </span>
                    <button className="btn btn-light">

                        <FaEllipsisVertical className='db-icon'/>
                        </button>
                </span>
            </div>
                
                 </div>
                <hr style={{width: "1000px", textAlign: "left", marginLeft:"-220px", marginTop:"3px"}}/>
            <div className="container-small">

            <input value={assignment.title} className="form-control mb-2"/>

            <div className="row">
                    <div className="col-12">

                    <div className="mb-3 row">
                            <div className="col-sm-10">
                              <textarea  id="textarea1" rows="3" className="form-control">This assignment describes how to install the development environment for creating and working with Web applications we will be developing this semester. We will add newcontent every week, pushing the code to a GitHub source repository, and then deployingthe content to a remote server hosted on Netlify
                            </textarea>
                            </div>
                    </div>

                    <div className="mb-3 row" style={{"marginLeft": "1px"}}>
                            <label for="email1" className="col-sm-1 col-form-label">Points</label><br/>
                            <div className="col-sm-10">
                              <input type="text" className="form-control" id="email1" value="100" style={{"width": "426px"}} />
                            </div>
                    </div>

                    <div className="mb-3 row" style={{"marginLeft": "1px"}}>
                            <label for="email1" className="col-sm-1 col-form-label" style={{"marginRight":"1px"}}>Assignment Group</label><br/>
                            <div className="col-sm-10">
                                <select className="form-select" style={{"width": "426px;"}}>
                                    <option selected>ASSIGNEMENTS</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                 </select>
                          </div>
                    </div>


                    <div className="mb-3 row" >
                        <label for="email1" className="col-sm-1 col-form-label">Display Grade</label><br/>
                        <div className="col-sm-10">
                            <select className="form-select" style={{"width": "426px;"}}>
                                <option selected>Percentage</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                             </select> <br/> 
                             <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="r6"/>
                                <label for="r6" className="form-check-label">Do not count this assignment towards the final grade</label>
                              </div>
                      </div>
                </div>

                <div class="mb-3 row" >
                    <label for="email1" className="col-sm-1 col-form-label">Submission Type</label><br/>
                    <div className="col-sm-10">
                        <div className="form-control" id="email1" value="0" style={{"width": "426px;"}} > <br/>
                            <select className="form-select" style={{"width": "226px;"}}>
                                <option selected>Online</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                             </select> <br/> 

                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
                                <label className="form-check-label" for="flexCheckChecked">
                                  Text Entry
                                </label>
                              </div>


                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
                                <label className="form-check-label" for="flexCheckChecked">
                                  Website URL
                                </label>
                              </div>

                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
                                <label className="form-check-label" for="flexCheckChecked">
                                  Media Recordings
                                </label>
                              </div>

                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" value=""  />
                                <label className="form-check-label" for="flexCheckChecked">
                                  Student Annotation
                                </label>
                              </div>

                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" value=""  />
                                <label className="form-check-label" for="flexCheckChecked">
                                  File Uploads
                                </label>
                              </div>


                            </div>
                  </div>
            </div>


            <div className="mb-3 row" >
                <label for="email1" className="col-sm-1 col-form-label">Assign</label><br/>
                <div className="col-sm-10">
                    <div className="form-control" id="email1" value="0" style={{"width": "426px;"}} >
                        <label for="email1" className="col-sm-2 col-form-label" style={{"display": "inline-block"}}>
                         </label>
                         <h6>Assign to</h6>
                         <div className="form-control">
                             <button className="btn btn-light" id="mbp23">Everyone
                                {/* <i class="fa fa-times" aria-hidden="true"></i> */}

                             </button>
                         </div>
                         

                         <label for="datesub">Due</label>
                        <input type="text" className="form-control" id="datesub" value="Septmber 18, 2023 11.59pm"/ ><br/>


                        <div className="one-grid">
                          <div className="wd-grid-col-half-page">
                            <label for="datesub">Available from</label><br/>
                            <input type="date" className="form-select " id="datesub" value="Septmber 18, 2023 11.59pm" />
                          </div>
                          <div className="wd-grid-col-half-page">
                            <label for="datesub">Until</label><br/>
                            <input type="date" className="form-select " id="datesub" value="Septmber 18, 2023 11.59pm" />
  
                          </div>
                        </div>




                        <button className="btn btn-light nw-d">
                            {/* <i class="fa fa-plus" aria-hidden="true"></i> */}
                            Add
                        </button>

                      </div>
                   </div>
              </div>








                    </div>

            </div>
                
            <Link to={`/kanbas/courses/${courseId}/Assignments`} className="btn btn-danger">
                Cancel
            </Link>
            <button onClick={handleSave} className="btn btn-success me-2">Save</button>
            </div>

        </div>
    // </div>
    );
}

export default AssignmentEditor;