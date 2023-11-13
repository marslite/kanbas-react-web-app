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
// import {PiNotebookDuotone} from 'react-icons/bi';
import logo from '../KanbasNavigation/ic_logo.png'


import { useLocation, Link } from "react-router-dom";
function KanbasNavigation(){
    const links = ['account', 'dashboard', 'courses', 'calendar', 'inbox','history','studio', 'commons','help'];

    const linkToIconMap = {
        account: <BiUserCircle className="wd-icon "/>,
        // Account: <FontAwesomeIcon  className="wd-icon" icon={FaUser}/>,
        dashboard: <RiDashboard3Fill className="wd-icon"/>,
        courses: <FaBook className="wd-icon"/>,
        calendar: <BsFillCalendar2WeekFill className="wd-icon"/>,
        inbox: <BsFillInboxesFill className="wd-icon"/>,
        history: <FaHistory className='wd-icon'/>,
        studio: <BsFillMusicPlayerFill className='wd-icon'/>,
        commons: <RiCreativeCommonsFill className='wd-icon'/>,
        help: <BiSolidHelpCircle className='wd-icon'/>
    }

    const {pathname} = useLocation();
    // console.log(pathname.split('/'));
    const path = pathname.split('/');
    console.log(path[2]);
    return(

        <div className="kanbas_container">
        <div className="course_index">
            <a href={`#/kanbas/test`} className= "link_dec">

                <img src={logo}/>
            </a>
    
            {links.map((link,index) => (

                <a key={index} href={`#/kanbas/${link}`} className={`list-group-item ${path[2] === link ? "course_id" : ""}`} >
                    {linkToIconMap[link]}<br/>
                     {link}
                </a>




            ))}

        </div>
    </div>



    )
}

export default KanbasNavigation;