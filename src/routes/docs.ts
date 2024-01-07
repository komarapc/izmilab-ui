import { RouteObject } from "react-router-dom";
import { lazy } from "react";

const Docs = lazy(() => import("@/pages/docs/IndexPage"));
const ErrorPage = lazy(() => import("@/pages/Error"));
const Introduction = lazy(() => import("@/pages/docs/Introduction"));
const Grid = lazy(() => import("@/pages/docs/Grid"));
const Flex = lazy(() => import("@/pages/docs/Flex"));
const Heading = lazy(() => import("@/pages/docs/Heading"));
const Paragraph = lazy(() => import("@/pages/docs/Paragraph"));
export const docsRoutes: RouteObject[] = [
  {
    path: "docs",
    children: [
      {
        path: "",
        Component: Docs,
        ErrorBoundary: ErrorPage,
      },
      {
        path: "introduction",
        Component: Introduction,
        ErrorBoundary: ErrorPage,
      },
      {
        path: "components",
        children: [
          { path: "grid", Component: Grid, ErrorBoundary: ErrorPage },
          { path: "flex", Component: Flex, ErrorBoundary: ErrorPage },
          { path: "heading", Component: Heading, ErrorBoundary: ErrorPage },
          { path: "paragraph", Component: Paragraph, ErrorBoundary: ErrorPage },
        ],
      },
    ],
  },
];
