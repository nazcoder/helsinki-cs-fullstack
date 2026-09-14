const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
};
function Course({ course }) {
  let sum = 0;
  course.parts.forEach((ex) => {
    sum = sum + ex.exercises;
  });
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <p>total of {sum} exercises</p>
    </div>
  );
}

export default Course;
