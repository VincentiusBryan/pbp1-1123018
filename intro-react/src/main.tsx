import { lazy } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AmbilMenu = lazy(() => import("./AmbilMenu"));
const MenuDetail = lazy(() => import("./MenuDetail"));

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/AmbilMenu" element={
              <AmbilMenu />
            }></Route>

            <Route path="/MenuDetail" element={
              <MenuDetail />
            }></Route>
        </Routes>
    </BrowserRouter>
);