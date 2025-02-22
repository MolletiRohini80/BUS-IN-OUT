import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

// Lazy loading components for better performance
const AuthPage = lazy(() => import("./components/pages/signin"));
const Header = lazy(() => import("./components/pages/NewCompo1"));
const Bushome = lazy(() => import("./components/pages/bushome"));
const AppHeader = lazy(() => import("./components/pages/app2_header"));
const BusInfo = lazy(() => import("./components/pages/busInfo"));
const App2Map = lazy(() => import("./components/pages/app2_map"));
const App2Attractions = lazy(() => import("./components/pages/app2_attractions"));
const Carder = lazy(() => import("./components/pages/Card"));
const Fullpage = lazy(() => import("./components/pages/fullpage"));
const Apple = lazy(() => import("./components/pages/BusGraph"));
const DriversForm = lazy(() => import("./components/pages/DriversForm"));

// Define routes as an array for better scalability
const routes = [
  { path: "/", element: <AuthPage /> },
  { path: "/home", element: <Header /> },
  { path: "/Application", element: <Bushome /> },
  { path: "/App2", element: <AppHeader /> },
  { path: "/busdash", element: <BusInfo /> },
  { path: "/Map", element: <App2Map /> },
  { path: "/attract", element: <App2Attractions /> },
  { path: "/card", element: <Carder /> },
  { path: "/incard", element: <Fullpage /> },
  { path: "/graph", element: <Apple /> },
  { path: "/admin", element: <DriversForm /> },
];

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router >
        <Routes>
          {routes.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
