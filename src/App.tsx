import { Provider } from "react-redux";
import { AppShell } from "./components/layout/app-shell.component";
import { store } from "./redux/store";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import useWindowSize from "./hook/windows-resize/window-resize.hook";

function App() {
  const { width } = useWindowSize();
  console.log("width: ", width)
  return (
    <DndProvider backend={width > 768 ? HTML5Backend : TouchBackend}>
      <Provider store={store}>
        <AppShell />
      </Provider>
    </DndProvider>
  );
}

export default App;
