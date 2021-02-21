import { Switch, Route } from "react-router-dom";

const RenderRoutes = ({ routes }) => {
    return (
        <Switch>
            {routes.map((route, index) => (
                <Route path={route.path} exact={route.exact} component={route.component} key={index} />
            ))}
        </Switch>
    );
}

export default RenderRoutes;