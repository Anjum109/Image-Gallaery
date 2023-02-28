import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import HMapCards from "../../Pages/Home/HomeCards/HMapCards/HMapCards";
import SearchPage from "../../Pages/SearchPage/SearchPage";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/card',
                element: <HMapCards></HMapCards>
            },
            {
                path: '/search',
                element: <SearchPage></SearchPage>
            }
        ]
    }
]);

export default router;