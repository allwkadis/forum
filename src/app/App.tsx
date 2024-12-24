import { useTheme } from "../theme /useTheme";

import "./styles/index.css";

function App() {
  const { theme, toogleTheme } = useTheme();

  return (
    <>
      <div className={`app ${theme}`}>
        <button onClick={toogleTheme}>switch theme</button>
        <p>aboba</p>
        <p>APPLE</p>
      </div>
    </>
  );
}

export default App;
