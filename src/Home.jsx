import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ width: "1320px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>Home page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla possimus ex aut non atque rerum accusamus amet iste rem hic iure blanditiis reprehenderit itaque mollitia eos vel, adipisci error ab deleniti sunt eius quo! Deleniti dignissimos a assumenda error obcaecati fuga, voluptatibus ipsam accusantium sapiente ab repellendus officia, aliquam ipsum sint. Recusandae officiis perspiciatis exercitationem nostrum qui ducimus cumque? Quaerat illum dolores incidunt repellat magnam. Porro, iste doloribus! Aut eligendi vitae officiis ullam ab adipisci. Tempore pariatur delectus reprehenderit atque sit distinctio dignissimos laborum. Nam qui minima vero! Quas inventore maiores quibusdam sapiente fugiat nesciunt ea doloribus expedita veniam deleniti.
        tque rerum accusamus amet iste rem hic iure blanditiis reprehenderit itaque mollitia eos vel, adipisci error ab deleniti sunt eius quo! Deleniti dignissimos a assumenda error obcaecati fuga, voluptatibus ipsam accusantium sapiente ab repellendus officia, aliquam ipsum sint. Recusandae officiis perspiciatis exercitationem nostrum qui ducimus cumque? Quaerat illum dolores incidunt repellat magnam. Porro, iste doloribus! Aut eligendi vitae officiis ullam ab adipisci. Tempore pariatur delectus reprehenderit atque sit distinctio dignissimos laborum. Nam qui minima vero! Quas inventore maiores quibusdam sapiente fugiat nesciunt ea doloribus expedita veniam deleniti.
      </p>
      <ul>
        <li>
          <Link to="/banner">Banner</Link>
        </li>
        <li>
          <Link to="/country">Country</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Home;
