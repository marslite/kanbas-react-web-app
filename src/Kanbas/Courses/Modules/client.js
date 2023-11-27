import axios from "axios";
//Using URL instead of COURSES_URL 
const URL = "http://localhost:4000/api/courses";
// const URL = "https://kanbas-node-server-app-zi6l.onrender.com/api/courses";
// const URL = 'https://kanbas-node-server-app-zi6l.onrender.com/api/courses'
// const URL = "https://kanbas-node-server-app-zi6l.onrender.com/api/courses";
const MODULES_URL = "http://localhost:4000/api/modules"
// const MODULES_URL = "https://kanbas-node-server-app-zi6l.onrender.com/api/modules"
// const MODULES_URL = 'https://kanbas-node-server-app-zi6l.onrender.com/api/modules'


export const updateModule = async (module) => {
    const response = await axios.put(`${MODULES_URL}/${module._id}`, module)
    return response.data;
}

export const deleteModule = async (moduleId) => {
    const response = await axios.delete(`${MODULES_URL}/${moduleId}`);
    return response.data;
}


export const createModule = async (courseId, module) => {
    const response = await axios.post(`${URL}/${courseId}/modules`,module);
    return response.data;
}

export const findModulesForCourse = async (courseId) => {
    const response = await axios.get(`${URL}/${courseId}/modules`);
    console.log(response, "Checking here if it works")
    return response.data;
}