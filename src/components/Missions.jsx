import React from 'react';
import MissionCard from './MissionCard';
import Title from './Title';
import missions from '../data/missions';

const lista = missions.map(({ name, year, country, destination }) => (
  <li key={ name }>
    <MissionCard
      name={ name }
      year={ year }
      country={ country }
      destination={ destination }
    />
  </li>
));

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <ul>{lista}</ul>
      </div>
    );
  }
}

export default Missions;
