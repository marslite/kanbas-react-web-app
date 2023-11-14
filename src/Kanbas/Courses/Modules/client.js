import axios from "axios";

const URL = "http://localhost:4000/api/courses";

export const findModulesForCourse = async (courseId) => {
    const response = await axios.get(`${URL}/${courseId}/modules`);
    return response.data;
}