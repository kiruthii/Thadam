import { WelcomeMessageContext } from "./context/WelcomeMessageContext";
import DashboardLayout from "./layout/DashboardLayout";
import WelcomeMessage from "./pages/Dashboard/WelcomeMessage";

function App() {
  return (
    <WelcomeMessageContext>
      <DashboardLayout />
      <WelcomeMessage />
    </WelcomeMessageContext>
  );
}

export default App;
