//
import bannerImg from "../images/bg.jpg";

//
const Mainbanner = () => {
  return (
    <div>
      <h1>This is banner page design</h1>
      <p>
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima ex doloribus voluptate, iusto at, ab sed eaque tempora placeat soluta nostrum aut laudantium quaerat harum incidunt vero. Odio doloribus distinctio, veritatis optio quos corrupti, numquam molestiae dignissimos eligendi aliquam harum earum? Nemo amet neque dolorum dolores, illo laudantium quam optio unde dicta porro eaque minus, ut deserunt ipsam veniam ducimus, blanditiis aspernatur fugiat voluptatem distinctio quo sit enim libero! Temporibus suscipit tempore placeat, atque, possimus minima sapiente magnam adipisci quo obcaecati dicta. Sequi, voluptatibus ducimus? Delectus perferendis blanditiis molestias illum id suscipit iusto quo repellendus aliquid minus ducimus quas laboriosam voluptatem atque, soluta labore aspernatur, qui minima! Quo corrupti iusto atque ipsum. Veniam quis enim, temporibus iure voluptatum odio magni tempore animi, ea veritatis pariatur unde cum magnam ducimus consectetur explicabo debitis! Corporis nobis exercitationem sed officiis officia ducimus facere veritatis corrupti dignissimos sit tempore beatae et atque nisi, repellendus rerum repudiandae, ea vero totam sint accusamus doloribus. Et, commodi provident voluptatibus nobis natus dolorum corporis ipsum, dicta, deleniti labore atque aut. Sint, in quisquam. Dignissimos excepturi non suscipit aliquam iusto impedit eos vitae nobis atque officia repellendus, optio veritatis possimus at, quidem sint ipsa exercitationem quis quod error doloribus?
      </p>
      <div style={{ height: "150px", overflow: "hidden" }}>
        <img
          style={{ width: "100%", height: "300%", objectFit: "cover" }}
          src={bannerImg}
          alt="banner"
        />
      </div>
    </div>
  );
};

export default Mainbanner;
