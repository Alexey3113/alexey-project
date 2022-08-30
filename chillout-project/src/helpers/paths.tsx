import React from "react";
import BackgroundChangerPage from "../pages/BackgroundChangerPage/BackgroundChangerPage";
import DiagramPage from "../pages/DiagramPage/DiagramPage";
import GenerationPasswordPage  from "../pages/GenerationPasswordPage/GenerationPasswordPage";
import HomePage from "../pages/HomePage/HomePage";
import SignInUpPage from "../pages/SingInUpPages/SignInUpPage";

export interface IPaths {
    path: string;
    component: React.Component;
}

export const PublicRoutes = [
    {
        path: "/",
        component: <SignInUpPage />
    }
]

export const PrivateRoutes = [
    {
        path: "/home",
        component: <HomePage />
    },
    {
        path: "/generation_password",
        component: <GenerationPasswordPage />
    },
    {
        path: "/background_changer",
        component: <BackgroundChangerPage />
    },
    {
        path: "/diagram",
        component: <DiagramPage />
    },
]