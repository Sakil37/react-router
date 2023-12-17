import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Mainbanner from "./Mainbanner";
import Services from "./Services";
import Details from "./Details";

//
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/banner",
          element: <Mainbanner />,
        },

        {
          path: "/country",
          element: <Services />,
          loader: async () => {
            return await fetch("https://restcountries.com/v3.1/all");
          },
        },
        {
          path: "/details/:code",
          element: <Details />,
          loader: async ({ params }) =>
            await fetch(`https://restcountries.com/v3.1/alpha/${params.code}
            `),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
