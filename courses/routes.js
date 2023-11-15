import Database from "../Kanbas/Database/index.js"
function CourseRoutes(app) {
    //add /api /rest or /data prefix just to inform devs that this is not a url for human
    //consumption or visiting but just for data delivery
  app.get("/api/courses", (req, res) => {
    const courses = Database.courses;
    res.send(courses);
  });

  app.post("/api/courses", (req, res) => {
    const course = { ...req.body,
      _id: new Date().getTime().toString() };
    Database.courses.push(course);
    res.send(course);
  });

  app.delete("/api/courses/:id", (req, res) => {
    const { id } = req.params;
    Database.courses = Database.courses
      .filter((c) => c._id !== id);
      //
    res.sendStatus(204);
  });


}
export default CourseRoutes;