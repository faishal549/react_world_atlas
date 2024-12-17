import {createBrowserRouter , RouterProvider} from "react-router-dom"
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Country } from "./pages/Country";
import { Home } from "./pages/Home";
import { AppLayout } from "./layout/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";
import "./App.css";
import { CountryDetails } from "./pages/CountryDetails";


const App =()=>{

  const router = createBrowserRouter([
    {
      path:"/",
      element: <AppLayout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "about",
          element: <About/>,
        },
        {
          path: "country",
          element: <Country/>,
        },
        {
          path: "country/:id",
          element: <CountryDetails/>,
        },
        {
          path: "contact",
          element: <Contact/>,
        }

      ]
    },
    
  ])
  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App;