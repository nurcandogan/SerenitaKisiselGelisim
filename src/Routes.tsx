import { createBrowserRouter, RouteObject } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserPage, { usersLoader } from "./pages/UserPage";
import FavoritePage from "./pages/FavoritePage";
import RootLayout from "./root";
import UserDetailsPage, { usersDetailLoader } from "./pages/UserDetailsPage";
import UserPostPage, { userPostLoader } from "./pages/UserPostPage";
import UserAlbumsPage, { userAlbumLoader } from "./pages/UserAlbumsPage";
import UsersTodosPage, { userTodosLoader } from "./pages/UsersTodosPage";
import PostDetailPage, { postLoader } from "./pages/PostDetailPage";
import AlbumDetailPage, { albumDetailsLoader } from "./pages/AlbumDetailPage";
import ContactPage from "./pages/ContactPage";

const routes : RouteObject[] = [
{
    path:"/",
    element:<RootLayout />,
    children: [
        {
            index: true,
            element: <HomePage/>,
        },
        {
            path: "/users",
            element: <UserPage/>,
            loader: usersLoader,
        },

        {
            path: "users/:userId",
            element: <UserDetailsPage/>,
            loader: usersDetailLoader,
            children: [
                {
                    path: "posts",
                    element: <UserPostPage/>,
                    loader: userPostLoader,
                },
                {
                    path: "albums",
                    element: <UserAlbumsPage/>,
                    loader: userAlbumLoader,
                },
                
                {
                    path: "todos",
                    element: <UsersTodosPage/>,
                    loader: userTodosLoader 
                }
            ],
        },
        {
            path: "users/:userId/posts/:postId",
            element:<PostDetailPage/>,
            loader: postLoader,

        },
        {
            path: "users/:userId/albums/:albumId",
            element: <AlbumDetailPage/>,
            loader: albumDetailsLoader,
        },

        {
            path:"/favorites",
            element: <FavoritePage/>,
        },
        {
            path:"/contact",
            element: <ContactPage/>,
        },
    ]
}

]

 export const router = createBrowserRouter(routes)