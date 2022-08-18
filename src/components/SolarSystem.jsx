import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

const lis = planets.map(({ name, image }) => (
  <li key={ name }>
    <PlanetCard planetName={ name } planetImage={ image } />
  </li>
));

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <ul className="solar">{lis}</ul>
      </div>
    );
  }
}

export default SolarSystem;
