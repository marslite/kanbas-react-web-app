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
                <button className="btn btn-light btn btn-un-pb">
                    Unpublish
                </button>
                <button className="btn btn-light btn-pbs btn-un-pb" style={{"background-color": "green"}}>
                                    {/* <i class="fa fa-check-circle" aria-hidden="true"></i> */}
                                    Published
                                </button><br/><br/>
                                <span className="spaced_tabs">
                                <button className="btn btn-light btn-width flx-add">
                                    {/* <span className="float-right"> */}
                                <TbFileImport className="icon_pos"/>
                                    {/* </span> */}
                                        Import Exisisting Content
                                    </button><br/>
                                    <button className="btn btn-light btn-width flx-add">
                                        {/* <span className="float-right"> */}
                                <BiSolidFileImport className="icon_pos"/>
                                        Import from Commons

                                        {/* </span> */}
                                    </button><br/>
                                    <button className="btn btn-light btn-width flx-add">
                                <IoHelpBuoy className="icon_pos"/>
                                        Choose Home Page
                                    </button><br/>
                                    <button className="btn btn-light btn-width flx-add">
                                <BsClipboardData className="icon_pos"/>
                                        View Course Stream
                                    </button><br/>
                                    <button className="btn btn-light btn-width flx-add">
                                <TfiAnnouncement className="icon_pos"/>
                                        New Announcement
                                    </button><br/>
                                    <button className="btn btn-light btn-width flx-add">
                                    <BsClipboardData className="icon_pos"/>

                                        New Analytics
                                        </button><br/>
                                    <button className="btn btn-light btn-width flx-add" style={{"display": "inline"}}>

                                    <AiOutlineBell className="icon_pos"/>
                                        View Course Notifications
                                        </button><br/>

                                    

                                </span>


                </div>


            </div>

   



        </div>
    );
}

export default Home;