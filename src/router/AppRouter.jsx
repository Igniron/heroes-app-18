import { Route, Routes } from "react-router-dom"

import { LoginPage } from "../auth"
import { HeroesRoutes } from "../heroes"
import { PrivateRoute, PublicRoute } from "./"


export const AppRouter = () => {


  return (
    <>
      <Routes>

        <Route path="login" element={
          <PublicRoute>
            <LoginPage/>
          </PublicRoute>
        }/>

        <Route path="/*" element={
          <PrivateRoute>
            <HeroesRoutes/>
          </PrivateRoute>
        }/>

      </Routes>
    </>
  )
}