import { useLoaderData } from "react-router-dom";
import Service from "./Service";
const Services = () => {
  const mydata = useLoaderData();
  return (
    <div
      style={{
        display: "grid",
        gap: "5px",
        gridTemplateColumns: "auto auto auto auto",
      }}
    >
      {mydata.map((user, i) => (
        <Service key={i} user={user} />
      ))}
    </div>
  );
};

export default Services;
