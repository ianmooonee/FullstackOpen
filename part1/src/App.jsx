const Header = ({ course }) => {
  return (
    <h1>
      {course}
    </h1>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part, i) => (
        <p key={i}>
          {part.name} contains {part.exercises} exercises
        </p>
      ))}
    </div>
  );
};

const Total = ({ parts }) => {
    const total = parts.reduce((sum, part) => sum + part.exercises, 0);

    return <p>Number of exercises {total}</p>;
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App;
