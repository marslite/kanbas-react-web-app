import ModuleList from "../Modules/ModuleList";
import "./index.css"
import {TbFileImport} from "react-icons/tb";
import {BiSolidFileImport} from "react-icons/bi";
import {IoHelpBuoy} from "react-icons/io5"
import {BsClipboardData} from "react-icons/bs"
import {TfiAnnouncement} from "react-icons/tfi"
import { AiOutlineBell } from "react-icons/ai";





function Home(){

    return(
        <div>

            {/* <h2>Status</h2> */}

            <div className="row">
                <div className="col-md-9">
                <h2 className="home_s">Home</h2>
                     <ModuleList/>
                </div>
                <div className="col-md-3">
                <h3 className="home_s">Status</h3>
                <button className="btn btn-light btn">
                    Unpublish
                </button>
                <button className="btn btn-light btn-pbs" style={{"background-color": "green"}}>
                                    <i class="fa fa-check-circle" aria-hidden="true"></i>
                                    Published
                                </button><br/><br/>
                                <span className="spaced_tabs">
                                <button className="btn btn-light btn-width">
                                <TbFileImport className=""/>
                                        Import Exisisting Content
                                    </button><br/>
                                    <button className="btn btn-light btn-width">
                                <BiSolidFileImport className=""/>
                                        Import from Commons
                                    </button><br/>
                                    <button className="btn btn-light btn-width">
                                <IoHelpBuoy className=""/>
                                        Choose Home Page
                                    </button><br/>
                                    <button className="btn btn-light btn-width">
                                <BsClipboardData className=""/>
                                        View Course Stream
                                    </button><br/>
                                    <button className="btn btn-light btn-width">
                                <TfiAnnouncement className=""/>
                                        New Announcement
                                    </button><br/>
                                    <button className="btn btn-light btn-width">
                                    <BsClipboardData className=""/>

                                        New Analytics
                                        </button><br/>
                                    <button className="btn btn-light btn-width" style={{"display": "inline"}}>

                                    <AiOutlineBell className=""/>
                                        View Course Notifications
                                        </button><br/>

                                    

                                </span>


                </div>


            </div>

   



        </div>
    );
}

export default Home;