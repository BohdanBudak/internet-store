import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomeListCards from "../pages/Home/HomeListCards";
import FavouritesListCards from "../pages/Favourites/FavouritesListCards";
import CartListCards from "../pages/Cart/CartListCards";
import {routes} from '../constants/constRouters';
import Page404 from "../pages/Page404/Page404";
import Header from "../components/Header/Header";

export default function AppRoutes () {

    return (
        <>
            <Header/>
            <Routes>
                <Route exact path={routes.home.href} element={ <HomeListCards/>}/>
                <Route exact path={routes.cart.href} element={<CartListCards/>}/>
                <Route exact path={routes.favourites.href} element={<FavouritesListCards/>}/>
                <Route exact path='*' element={<Page404 />}/>
            </Routes>
        </>
    )
}