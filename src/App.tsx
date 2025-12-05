import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      {/* <AdminHeader /> */}
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
