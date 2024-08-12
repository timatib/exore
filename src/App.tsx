import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import routes from "./views";

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
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
