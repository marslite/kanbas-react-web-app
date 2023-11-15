import axios from "axios";
//Using URL instead of COURSES_URL 
const URL = "http://localhost:4000/api/courses";
const MODULES_URL = "http://localhost:4000/api/modules"



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
    return response.data;
}