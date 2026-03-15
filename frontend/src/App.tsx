import './App.css';
import data from './CollegeBasketballTeams.json';

function Header() {
  return (
    <div className="header">
      <h1>March Madness 2025</h1>
      <p>Browse all NCAA Basketball teams</p>
    </div>
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
    <div className="team-card">
      <h3>{school}</h3>
      <p className="mascot">{name}</p>
      <p className="location">
        {city}, {state}
      </p>
    </div>
  );
}

function TeamList() {
  return (
    <div className="team-list">
      {data.teams.map((team) => (
        <TeamCard
          key={team.tid}
          school={team.school}
          name={team.name}
          city={team.city}
          state={team.state}
        />
      ))}
    </div>
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
