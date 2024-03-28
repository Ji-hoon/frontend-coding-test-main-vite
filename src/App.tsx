import {
  NavLink,
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
import styled from "styled-components";
import Button_Boxtype from "./components_workingHour/atoms/Button.boxtype";
import { COLORS } from "./global/constants";

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
          <Header>
            <nav>
              <ul>
                <li>
                  <NavLink to="/cat-viewer">
                    <Button_Boxtype label="CatViewer" />
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/working-hour">
                    <Button_Boxtype label="WorkingHours" />
                  </NavLink>
                </li>
              </ul>
            </nav>
          </Header>
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

const Header = styled.header`
  display: flex;
  top: 0;
  position: sticky;
  justify-content: center;
  z-index: 1;
  padding: 12px;
  background-color: #fff;
  box-shadow: 0 5px 5px -4px rgba(0, 0, 0, 0.1);

  & nav ul {
    display: flex;
    margin: 0;
    list-style: none;
    gap: 12px;
  }

  & .active button {
    background-color: ${COLORS.BRAND_DEFAULT};
    color: ${COLORS.BASIC_WHITE};
  }
`;
