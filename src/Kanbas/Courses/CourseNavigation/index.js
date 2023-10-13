import { useLocation, useParams } from "react-router";

function CourseNavigation(){
    const links = ["Home", "Modules", "Assignments", "Grades"];
    const {courseId} = useParams();
    const {pathname} = useLocation();

    return(
        //Implement the <a> in the same way you did for KanbasNavigation
        <div className="list-group" style={{width:150}}>
            {links.map((link,index) => (
                <a key={index} > </a>
            ))}
        </div>
    );
}