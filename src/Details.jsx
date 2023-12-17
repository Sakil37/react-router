import { useLoaderData } from "react-router-dom";
//
const Details = () => {
  //
  const detailsdata = useLoaderData();

  //
  return (
    <div>
      {detailsdata.map((item, i) => {
        return (
          <div key={i} style={{ textAlign: "center" }}>
            <h1> Official name: {item.name.common}</h1>
            <h2>Capital: {item.capital[0]}</h2>
            <h3>Population: {item.population}</h3>
            <h3>Region: {item.region}</h3>
            <img src={item.flags.png} alt="flag" />
          </div>
        );
      })}
    </div>
  );
};

export default Details;

{
  /* <div key={i}>
<h1>{item.name.common}</h1>
<h2>{item.capital[0]}</h2>
<h3>{item.population}</h3>
<h3>{item.region}</h3>
<img src={item.flags.png} alt="flag" />
</div> */
}
