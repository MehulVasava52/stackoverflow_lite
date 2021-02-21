import Login from "../components/Login";
import QuestionPage from "../components/QuestionPage";
import UserPage from "../components/UserPage";

const Routes = [
    {
        path: "/",
        exact: true,
        component: Login
    },
    {
        path: "/question-page",
        exact: true,
        component: QuestionPage
    },
    {
        path: "/user-page",
        exact: true,
        component: UserPage
    }
];

export default Routes;