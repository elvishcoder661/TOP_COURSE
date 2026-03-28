import Card from "./Card";

const Cards = ({ courses, category }) => {

  const getCourses = () => {
    let allCourses = [];

    if (category === "All") {
      Object.values(courses || {}).forEach((coursesCategory) => {
        coursesCategory.forEach((course) => {
          allCourses.push(course);
        });
      });
      return allCourses;
    } 
    else {
      return courses[category] || [];
     }
  };

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          getCourses().map((course, index) => (
            <Card key={index} courses={course} />
          ))
        }
      </div>
    </div>
  );
};

export default Cards;