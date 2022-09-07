import { Routes, Route } from "react-router-dom";

import { Login } from "../auth";
import { HeroesRoutes } from "../heroes";
<<<<<<< HEAD
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";
=======
>>>>>>> Routes and pages with basic styles

export const AppRouter = () => {
  return (
    <>
      <Routes>
<<<<<<< HEAD
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
=======
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<HeroesRoutes />} />
>>>>>>> Routes and pages with basic styles
      </Routes>
    </>
  )
}
