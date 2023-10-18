import { ModalProvider } from "./src/context/ModalContext";
import { HomeScreen } from "./src/screens/HomeScreen";


const App = () => {
  return <>
    <ModalProvider>
      <HomeScreen />
    </ModalProvider>
  </>
}

export default App;