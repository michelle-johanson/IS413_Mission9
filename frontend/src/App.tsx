import './App.css';
import data from './CollegeBasketballTeams.json';

function Header() {
  return (
    <>
      <h1>March Madness 2025</h1>
      <p>Browse all NCAA Basketball teams</p>
    </>
  );
}

function TeamCard({
  school,
  name,
  city,
  state,
}: {
  school: string;
  name: string;
  city: string;
  state: string;
}) {
  return (
    <>
      <h3>{school}</h3>
      <p>{name}</p>
      <p>
        {city}, {state}
      </p>
    </>
  );
}

function TeamList() {
  return (
    <>
      {data.teams.map((team) => (
        <TeamCard
          key={team.tid}
          school={team.school}
          name={team.name}
          city={team.city}
          state={team.state}
        />
      ))}
    </>
  );
}

function App() {
  return (
    <>
      <Header />
      <TeamList />
    </>
  );
}

export default App;
