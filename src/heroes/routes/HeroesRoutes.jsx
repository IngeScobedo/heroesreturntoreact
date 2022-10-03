import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui'
<<<<<<< HEAD
<<<<<<< HEAD
import { Dc, Marvel, HeroPage, Search } from "../pages";
=======
import { Dc, Marvel } from "../../heroes";
import { Hero, Search } from '../../heroes';
>>>>>>> Routes and pages with basic styles
=======
import { Dc, Marvel, HeroPage, Search } from "../pages";
>>>>>>> Heroes app completed

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/marvel" element={<Marvel />} />
                <Route path="/dc" element={<Dc />} />
                <Route path="/search" element={<Search />} />
<<<<<<< HEAD
<<<<<<< HEAD
                <Route path="/hero/:heroId" element={<HeroPage />} />
=======
                <Route path="/hero" element={<Hero />} />
>>>>>>> Routes and pages with basic styles
=======
                <Route path="/hero/:heroId" element={<HeroPage />} />
>>>>>>> Heroes app completed
                <Route path={'/'} element={<Navigate to="/marvel" />} />
            </Routes>
        </>
    )
}
