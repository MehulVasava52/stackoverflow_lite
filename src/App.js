import RenderRoutes from "./router/RenderRoutes";
import Routes from "./router/Routes";

function App() {
  return (
    <div className="App">
      <RenderRoutes routes={Routes} />
    </div>
  );
}

export default App;
