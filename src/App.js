
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './component/Home/Home';
import Index from './component/Index/Index';
import Main from './component/Layout/Main';
import About from './component/About/About';
import Products from './component/Products/Products';
import Productdetails from './component/Productdetails/Productdetails';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>, children: [
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/index",
          element: <Index></Index>
        },

        {
          path: "/products",
          element: <Products></Products>,
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users');
          },
        },
        {
          path: 'products/user/:productid',
          loader: async ({ params }) => {
            console.log(params.productid);
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.productid}`);
          },
          element: <Productdetails></Productdetails>
        }
      ]
    },
    {
      path: "/about",
      element: <About></About>
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
      <h1>The footer</h1>
    </div>
  );
}

export default App;
