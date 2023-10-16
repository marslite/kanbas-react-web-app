import { useLocation, useParams } from "react-router";
import './index.css'

function CourseNavigation(){
    const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People", "Panopto Video"];
    const {courseId} = useParams();
    const {pathname} = useLocation();
    const path = pathname.split('/');
    console.log(path[4], "here");

    return(
        //Implement the <a> in the same way you did for KanbasNavigation
        <div className=" nav_cours" style={{width:150}}>
            {links.map((link,index) => (
                <a key={index}  href={`#/kanbas/courses/${courseId}/${link}`} className={`link_space ${pathname.includes(link) && "ass_id"}`}> {link}</a>
            ))}
        </div>
    );
}

export default CourseNavigation;