import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import theme from "./theme.ts";
import Fonts from "./fonts.tsx";
import Rotation from "./components/Rotations";
import Layout from "./components/Layout.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import SequenceBarExternal from "./components/Rotations/SequenceBarExternal.tsx";

export const Root: React.FC = () => {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/rotations",
        element: <Rotation />,
      },
    ],
  },
  {
    path: "/simplified/:id",
    element: <SequenceBarExternal />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
      <Fonts />
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
