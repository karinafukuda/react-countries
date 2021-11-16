import Item from './Item';

export default function Country({ children: country = null }) {
  if (!country) {
    return <div>Impossível renderizar o país</div>;
  }

  const demographicDensity = country.population / country.area;
  const { flag, name, capital, region, population, area } = country;

  return (
    <div className="border p-2 m-2 flex flex-row items-center space-x-2">
      <img className="w-48" src={flag} alt={`${name}'s flag`} />

      <ul>
        <li>
          <Item label="Name: ">{name}</Item>
        </li>
        <li>
          <Item label="Capital: ">{capital}</Item>
        </li>
        <li>
          <Item label="Region: ">{region}</Item>
        </li>
        <li>
          <Item label="Population: ">{population}</Item>
        </li>
        <li>
          <Item label="Area: ">{area}</Item>
        </li>
        <li>
          <Item label="Demographic density: ">{demographicDensity}</Item>
        </li>
      </ul>
    </div>
  );
}

// return (
//  <div className="border p-2 m-2 flex flex-row items-center space-x-2">
//    <img className="w-48" src={flagCountry} alt={`${country.name}'s flag`} />

//    <ul>
//      <li>
//        <Item label="Name: ">{country.name}</Item>
//      </li>
//      <li>{country.capital}</li>
//      <li>{country.region}</li>
//      <li>{country.population}</li>
//      <li>{country.area}</li>
//      <li>{demographicDensity}</li>
//    </ul>
//  </div>
// );
// }acima refatorado
