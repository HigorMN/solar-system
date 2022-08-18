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
        <div className="solar">
          <ul>{lis}</ul>
        </div>
      </div>
    );
  }
}

export default SolarSystem;
