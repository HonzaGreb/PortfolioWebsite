import './App.css';
import WindowContextProvider from './Store/WindowContextProvider';
import StartContextProvider from './Store/StartContextProvider';
import ColorContextProvider from './Store/ColorContextProvider';
import Body from './Body';

function App() {
  return (
    <ColorContextProvider>
      <StartContextProvider>
        <WindowContextProvider>
          <Body />
        </WindowContextProvider>
      </StartContextProvider>
    </ColorContextProvider>
  );
}

export default App;
