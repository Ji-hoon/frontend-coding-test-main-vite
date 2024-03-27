import {
  Link,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import CatViewer from "./pages/CatViewer";
import WorkingHours from "./pages/WorkingHours";
import "./App.css";
import { StoreProps } from "./global/types";
import { useSelector } from "react-redux";
import { currentWorkingHourLoader } from "./loader/workingHours.loader";

function App() {
  const { isScrollable } = useSelector((state: StoreProps) => state.viewer);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div
          className="App"
          style={{ overflow: isScrollable ? "auto" : "hidden" }}
        >
          <nav
            style={{
              position: "fixed",
              top: 0,
              left: 0,
            }}
          >
            <ul>
              <li>
                <Link to="/cat-viewer">CatViewer</Link>
              </li>
              <li>
                <Link to="/working-hour">WorkingHours</Link>
              </li>
            </ul>
          </nav>
          <Outlet />
        </div>
      ),
      children: [
        { path: "/cat-viewer", element: <CatViewer /> },
        {
          path: "/working-hour",
          element: <WorkingHours />,
          loader: currentWorkingHourLoader,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
