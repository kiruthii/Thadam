import { BrowserRouter } from "react-router-dom";
import { CustomerContextProvider } from "./context/CustomerTableContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { GooeyToaster } from "goey-toast";
import "goey-toast/styles.css";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <GooeyToaster position="top-center" />
      
          <CustomerContextProvider>
            <AppRoutes />
          </CustomerContextProvider>
       
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
