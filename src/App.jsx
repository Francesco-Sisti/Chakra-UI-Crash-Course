import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider,
  Navigate
} from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { Box, Spinner, Center } from '@chakra-ui/react'

// layouts
import RootLayout from './layouts/RootLayout'

// Lazy loading delle pagine
const Dashboard = lazy(() => import('./pages/Dashboard'))
const Create = lazy(() => import('./pages/Create'))
const Profile = lazy(() => import('./pages/Profile'))
const Forms = lazy(() => import('./pages/Forms'))
const Showcase = lazy(() => import('./pages/Showcase'))
const Theme = lazy(() => import('./pages/Theme'))
const Layout = lazy(() => import('./pages/Layout'))
const DataDisplay = lazy(() => import('./pages/DataDisplay'))
const Feedback = lazy(() => import('./pages/Feedback'))

// Componente di caricamento
const LoadingFallback = () => (
  <Center h="300px">
    <Spinner size="xl" color="purple.500" thickness="4px" />
  </Center>
)

// Importazione del loader
import { taskLoader } from './pages/Dashboard'

// router e routes con gestione errori e reindirizzamenti
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<Box p={5}>Errore di navigazione</Box>}>
      <Route index element={
        <Suspense fallback={<LoadingFallback />}>
          <Dashboard />
        </Suspense>
      } loader={taskLoader} />
      <Route path="create" element={
        <Suspense fallback={<LoadingFallback />}>
          <Create />
        </Suspense>
      } />
      <Route path="profile" element={
        <Suspense fallback={<LoadingFallback />}>
          <Profile />
        </Suspense>
      } />
      <Route path="forms" element={
        <Suspense fallback={<LoadingFallback />}>
          <Forms />
        </Suspense>
      } />
      <Route path="showcase" element={
        <Suspense fallback={<LoadingFallback />}>
          <Showcase />
        </Suspense>
      } />
      <Route path="theme" element={
        <Suspense fallback={<LoadingFallback />}>
          <Theme />
        </Suspense>
      } />
      <Route path="layout" element={
        <Suspense fallback={<LoadingFallback />}>
          <Layout />
        </Suspense>
      } />
      <Route path="datadisplay" element={
        <Suspense fallback={<LoadingFallback />}>
          <DataDisplay />
        </Suspense>
      } />
      <Route path="feedback" element={
        <Suspense fallback={<LoadingFallback />}>
          <Feedback />
        </Suspense>
      } />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
