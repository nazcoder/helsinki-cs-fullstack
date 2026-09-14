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
  const total = course.parts.reduce((total, part) => total + part.exercises, 0);
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <p>total of {total} exercises</p>
    </div>
  );
}

export default Course;
