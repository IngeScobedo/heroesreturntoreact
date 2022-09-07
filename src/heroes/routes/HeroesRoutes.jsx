import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui'
<<<<<<< HEAD
import { Dc, Marvel, HeroPage, Search } from "../pages";
=======
import { Dc, Marvel } from "../../heroes";
import { Hero, Search } from '../../heroes';
>>>>>>> Routes and pages with basic styles

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/marvel" element={<Marvel />} />
                <Route path="/dc" element={<Dc />} />
                <Route path="/search" element={<Search />} />
<<<<<<< HEAD
                <Route path="/hero/:heroId" element={<HeroPage />} />
=======
                <Route path="/hero" element={<Hero />} />
>>>>>>> Routes and pages with basic styles
                <Route path={'/'} element={<Navigate to="/marvel" />} />
            </Routes>
        </>
    )
}
