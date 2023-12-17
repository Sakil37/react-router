import { useNavigate } from "react-router-dom";

const Service = ({ user }) => {
  //
  const Navigate = useNavigate();
  let handeldetails = (code) => {
    Navigate(`/details/${code}`);
  };

  let { name, capital, area, cca2, flags } = user;
  //
  return (
    <div
      style={{
        textAlign: "center",
        border: "1px solid black",
        padding: "10px 10px",
      }}
    >
      <h1>{name.common}</h1>
      <h3>{capital}</h3>
      <h4>{area}</h4>
      <div style={{ height: "120px", overflow: "hidden" }}>
        <img
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={flags.png}
          alt="flag"
        />
      </div>
      <button style={{marginTop:"10px"}} onClick={() => handeldetails(cca2)}>details</button>
    </div>
  );
};

export default Service;
