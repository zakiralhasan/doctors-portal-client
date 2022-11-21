import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Route";
import "react-day-picker/dist/style.css";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthProvider";

function App() {
  const { theme } = useContext(AuthContext) //called and used thene changing state

  return (
    <div data-theme={theme} className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
