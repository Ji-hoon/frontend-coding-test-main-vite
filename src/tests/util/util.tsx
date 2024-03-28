import { RouterProvider, createBrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";
import store from "../../store";
import { Provider } from "react-redux";

export function userEventSetup(
  renderTree: {
    path: string;
    jsx: React.ReactNode;
  }[],
  loader?: () => object
) {
  const renderTreeArray = renderTree.map((tree) => {
    return {
      path: tree.path,
      element: tree.jsx,
      loader: loader,
    };
  });
  const router = createBrowserRouter(renderTreeArray, {});

  return {
    user: userEvent.setup(),
    ...render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    ),
  };
}
