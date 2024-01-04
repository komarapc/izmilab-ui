import {createBrowserRouter} from 'react-router-dom'
import { docsRoutes } from './docs'
import { lazy } from 'react'

const NotFound = lazy(()=>import('@/pages/NotFound'))
const ErrorPage = lazy(()=>import("@/pages/Error"))
const Home = lazy(()=>import('@/pages/Home'))

const router = createBrowserRouter([
  {path: '/', Component: Home, ErrorBoundary: ErrorPage},
  ...docsRoutes,
  { path: '*', Component: NotFound }
])

export default router