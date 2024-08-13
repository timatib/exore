import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import routes from "./views";
import WidgetsAlert from "widgets/Alert";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {routes.map(({ element, name, path, Layout }) => {
        return (
          <Route
            path={path}
            element={Layout ? <Layout>{element}</Layout> : element}
            key={name}
          />
        );
      })}
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <WidgetsAlert />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
