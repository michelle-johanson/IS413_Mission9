import './App.css';

const famMembers = [
  { name: 'Mom', talents: 'organizing', age: 44 },
  { name: 'Dad', talents: 'helping me with homework', age: 49 },
  { name: 'Allison', talents: 'animation, coding, math', age: 20 },
  { name: 'Izzy', talents: 'teaching, making friends, cleaning', age: 18 },
];

function Welcome() {
  const helloWorld = 'Hello, World!';

  return <h1>You had me at "{helloWorld}"</h1>;
}

function FamMember({
  name,
  talents,
  age,
}: {
  name: string;
  talents: string;
  age: number;
}) {
  return (
    <>
      <img />
      <h3>{name}</h3>
      <p>Talents: {talents}</p>
      <p>Age: {age}</p>
    </>
  );
}

function FamList() {
  return (
    <>
      {famMembers.map((famMember) => (
        <FamMember {...famMember} />
      ))}
    </>
  );
}

function App() {
  return (
    <>
      <Welcome />
      <FamList />
    </>
  );
}

export default App;
