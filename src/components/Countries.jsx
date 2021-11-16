import Country from './Country';

export default function Countries({ children: countries = [] }) {
  return (
    <div className="border p-2">
      <h2 className="text-center font-semibold">{countries.length} país(es)</h2>

      {countries.map(country => {
        return <Country key={country.id}>{country}</Country>;
      })}
    </div>
  );
}
