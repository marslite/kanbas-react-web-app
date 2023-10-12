import './index.css'
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { BsFillInboxesFill } from 'react-icons/bs';
import { FaHistory } from 'react-icons/fa';
import { BsFillMusicPlayerFill } from 'react-icons/bs';
import { RiCreativeCommonsFill } from 'react-icons/ri';
import { BiSolidHelpCircle } from 'react-icons/bi'; 
import logo from '../KanbasNavigation/ic_logo.png'


import { useLocation, Link } from "react-router-dom";
function KanbasNavigation(){
    const links = ['Account', 'Dashboard', 'Courses', 'Calendar', 'Inbox','History','Studio', 'Commons','Help'];

    const linkToIconMap = {
        Account: <BiUserCircle className="wd-icon "/>,
        // Account: <FontAwesomeIcon  className="wd-icon" icon={FaUser}/>,
        Dashboard: <RiDashboard3Fill className="wd-icon"/>,
        Courses: <FaBook className="wd-icon"/>,
        Calendar: <BsFillCalendar2WeekFill className="wd-icon"/>,
        Inbox: <BsFillInboxesFill className="wd-icon"/>,
        History: <FaHistory className='wd-icon'/>,
        Studio: <BsFillMusicPlayerFill className='wd-icon'/>,
        Commons: <RiCreativeCommonsFill className='wd-icon'/>,
        Help: <BiSolidHelpCircle className='wd-icon'/>
    }

    const {pathname} = useLocation();

    return(

        <div className="kanbas_container">
        <div className="course_index">
            <a href={`/Kanbas/LOL}`} className= "link_dec">

                <img src={logo}/>
            </a>
    
            {links.map((link,index) => (

                <a key={index} href={`/Kanbas/${link}`} className={`list-group-item ${link === "Dashboard" ? "course_id" : ""}`} >
                    {linkToIconMap[link]}<br/>
                     {link}
                </a>




            ))}

        </div>
    </div>



    )
}

export default KanbasNavigation;