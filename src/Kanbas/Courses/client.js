


export const URL = "http://localhost:4000/api/courses";

export const fetchCourses = async () => {
    const response = await axios.get(`${URL}`);
    return response.data;

}


export const findAllCourses = async () => {
    const response = await axios.get(URL);
    return response.data;

  };


//   useEffect(() => {
//     findAllCourses();
//   }, []);



  export const addNewCourse = async () => {
    const response = await axios.post(URL,course);
    return response.data;

}



export const deleteCourse = async (id) => {
    const response = await axios.delete(`${URL}/${id}`);
    return response.data;

}




export const updateCourse  = async () => {
    console.log(course, "Check here");
    const response = await axios.put(`${URL}/${course._id}`,course)
    return response.data;

}