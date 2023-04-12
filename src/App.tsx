import { Provider } from "react-redux";
import { AppShell } from "./components/layout/app-shell.component";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <AppShell />
    </Provider>
  );
}

export default App;
