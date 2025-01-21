import React, { useEffect } from "react";
import "./App.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
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

function App() {
  const theme = createTheme({});
  // const ProtectedRoute = () => {
  //   const navigate = useNavigate();
  //  const isLogin = false
  //   useEffect(() => {
  //     if (!isLogin) {
  //       const saved = localStorage.getItem('userId');
  //       if (!!saved) {
  //       } else navigate('/auth/login', { replace: true });
  //     }
  //   }, [isLogin]);
  //   return isLogin ? <Outlet /> : null;
  // }
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/lazada" element={<Lazada />} />

          {/* <Route path='/' element={<ProtectedRoute />}>
                        <Route
                          path='/conversations'
                          element={<ConversationListScreen />}
                        />
                        <Route path='/messages' element={<ChatScreen />} />
                        <Route path='/canvas' element={<CanvasScreen />} />
                        <Route
                          path='/room/:conversationId/:roomId'
                          element={
                            <WhiteboardControllerProvider>
                              <CallScreen />
                            </WhiteboardControllerProvider>
                          }
                        />
                      </Route> */}
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
