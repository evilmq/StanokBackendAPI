import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "/src/css/mainPage.css";
import MainPage from "./mainPage/indexMainPage";
import GalleryApp from "./gallery/GalleryApp";
import ContactsIndexPage from "./contacts/contactsIndexPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
  },
  {
    path: "/gallery",
    element: <GalleryApp/>
},
{
    path: "/contacts",
    element: <ContactsIndexPage />
}

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
