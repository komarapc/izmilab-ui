import { RouteObject } from "react-router-dom";
import {lazy} from 'react'

const Docs = lazy(()=>import('@/pages/docs/IndexPage'))
const ErrorPage = lazy(()=>import("@/pages/Error"));
export const docsRoutes: RouteObject[] = [{
  path: 'docs',
  children: [
    {
      path: '',
      Component: Docs,
      ErrorBoundary: ErrorPage
    }
  ]
}]