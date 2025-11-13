import courseApi from "../api/course.api";

const courseService = {
  getAllCourses: () => courseApi.getAllCourses(),
  getCourseById: (id) => courseApi.getCourseById(id),
  createCourse: (data) => courseApi.createCourse(data),
  updateCourse: (id, data) => courseApi.updateCourse(id, data),
  deleteCourse: (id) => courseApi.deleteCourse(id),
};

export default courseService;