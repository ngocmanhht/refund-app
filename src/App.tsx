import React, { useEffect } from "react";
import "./App.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import {
  Box,
  createTheme,
  LoadingOverlay,
  MantineProvider,
} from "@mantine/core";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Home from "./screens/home";
import Login from "./screens/login";
import Lazada from "./screens/lazada";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./services/query-client";
import { Provider, observer } from "mobx-react";
import { uiStore } from "./stores/ui";
import { Notification } from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import { ToastContainer } from "react-toastify";
const App = observer(() => {
  const theme = createTheme({});
  const isLoading = uiStore.loading;
  const notification = uiStore.getNotification;
  return (
    <Provider>
      <MantineProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/lazada" element={<Lazada />} />
            </Routes>
          </BrowserRouter>
          <LoadingOverlay
            visible={isLoading}
            zIndex={9999}
            overlayProps={{ radius: "sm", blur: 2 }}
          />
        </QueryClientProvider>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          pauseOnFocusLoss={false}
          rtl={false}
        />
      </MantineProvider>
    </Provider>
  );
});

export default App;
