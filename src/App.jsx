import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import "@fontsource/ubuntu"; // Defaults to weight 400
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Transaction from "./pages/Transaction/Transaction";
import Support from "./pages/Support/Support";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard></Dashboard>
  },
  {
    path: "/transaction",
    element: <Transaction></Transaction>
  },
  {
    path: "/support",
    element: <Support></Support>
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      
    </>
  );
}

export default App;
