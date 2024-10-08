import { CITIES } from '../../const';

type LocationItemProps = {
  city: string;
};

function LocationItem({ city }: LocationItemProps) {
  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="#">
        <span>{city}</span>
      </a>
    </li>
  );
}

function LocationList(): JSX.Element {
  const cityList = CITIES.map((city) => <LocationItem key={city} city={city}/>);
  return (
    <ul className="locations__list tabs__list">
      {cityList}
    </ul>
  );
}

export default LocationList;
