import { Provider } from "react-redux";
import { AppShell } from "./components/layout/app-shell.component";
import { store } from "./redux/store";
import { DndProvider } from "react-dnd";
import { HTML5Backend as Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <DndProvider backend={Backend}>
      <Provider store={store}>
        <AppShell />
      </Provider>
    </DndProvider>
  );
}

export default App;
