import { Routes, Route } from "react-router-dom";

import { Login } from "../auth";
import { HeroesRoutes } from "../heroes";
<<<<<<< HEAD
<<<<<<< HEAD
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";
=======
>>>>>>> Routes and pages with basic styles
=======
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";
>>>>>>> save last path and handle public and private routes

export const AppRouter = () => {
  return (
    <>
      <Routes>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> save last path and handle public and private routes
        <Route path="login/*" element={
          <PublicRouter>
            <Routes>
              <Route path={'/*'} element={<Login />} />
            </Routes>
          </PublicRouter>
        } />
        <Route path="/*" element={
          <PrivateRouter>
            <HeroesRoutes />
          </PrivateRouter>
        } />
<<<<<<< HEAD
=======
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<HeroesRoutes />} />
>>>>>>> Routes and pages with basic styles
=======
>>>>>>> save last path and handle public and private routes
      </Routes>
    </>
  )
}
