import './index.css'
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";


import { useLocation, Link } from "react-router-dom";
function KanbasNavigation(){
    const links = ['Account', 'Dashboard', 'Courses', 'Calendar'];

    const linkToIconMap = {
        Account: <BiUserCircle className="wd-icon fa fa-user fa-2x "/>,
        Dashboard: <RiDashboard3Fill className="wd-icon"/>,
        Courses: <FaBook className="wd-icon"/>,
        Calendar: <BsFillCalendar2WeekFill className="wd-icon"/>,
        Fake: <BsFillCalendar2WeekFill className="wd-icon"/>,
    }

    const {pathname} = useLocation();

    return(

        <div className="kanbas_container">
        <div className="course_index">
            <a href={`/Kanbas/LOL}`} className= "link_dec">
                {/* <i class="fa fa-user fa-2x spacer" aria-hidden="true"></i><br/> */}
                NEU LOGO
            </a>
    
            {links.map((link,index) => (

                <a key={index} href={`/Kanbas/${link}`} className={`list-group-item `} >
                    {linkToIconMap[link]}<br/>
                     {link}
                </a>




            ))}

        </div>
    </div>



        // <div className="list-group  wd-kanbas-navigation" style={{width:150, marginLeft: "-130px", marginTop: "53px", display: "flex",}}>
        //     {links.map((link,index) => (
        //         <Link key={index} 
        //         to={`/Kanbas/${link}`} className={`list-group-item ${pathname.includes(link) && 'active'}`}>
        //             {linkToIconMap[link]} <br/> 

        //         {link}


        //         </Link>
        //     ))}

        // </div>
    )
}

export default KanbasNavigation;