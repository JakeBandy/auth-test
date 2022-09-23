import React from 'react'
import { Routes, Route } from 'react-router'
import Listings from './containers/Listings'
import Details from './containers/Details'
import SignIn from './containers/SignIn'
import NewListings from './containers/NewListings'

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Listings/>} />
            <Route path="/business/:id" element={<Details/>} />
            {/* <Route path="/details" element={<Details />} /> */}
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/new-listings" element={<NewListings />} />
        </Routes>
    );
};

export default Router;