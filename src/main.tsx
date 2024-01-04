import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import ReduxProvider from "./redux/ReduxProvider.tsx";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <React.Suspense fallback={<div>Loading...</div>}>
      <ReduxProvider>
        <RouterProvider router={router} />
      </ReduxProvider>
    </React.Suspense>
  </React.StrictMode>
);
