import {
    createBrowserRouter,
   
  } from "react-router-dom";
import  Main  from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/Home/Home/About/About";
import PopularMenu from "../pages/Home/PopularMenu/PopularMenu";
import Category from "../pages/Home/Category/Category";
import Featured from "../pages/Home/Featured/Featured";
import Faq from "../pages/Home/FAQ/Faq";
import Form from "../pages/Home/Home/Form/Form";
import Testimonial from "../pages/Home/Testimonials/Testimonial";
  export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element: <Home></Home>
        },
        {
          path:'about',
          element:<About></About>
        },
        {
          path:'menu',
          element:<PopularMenu></PopularMenu>
        },
        {
          path:'order',
          element:<Category></Category>
        },
        {
          path:'Featured',
          element:<Featured></Featured>
        },
        {
          path:'Faq',
          element:<Faq></Faq>
        },
        {
          path:'massage',
          element:<Form></Form>
        },
        {
          path:'Review',
          element:<Testimonial></Testimonial>
        },
      ]
    },
  ]);