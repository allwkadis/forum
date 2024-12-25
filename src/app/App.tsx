import { useTheme } from "../theme /useTheme";
import { Test } from "../widget/Test/Test";
import { useTest } from "./providers/useTest";
import { classNames } from "../helpers/classNames";
import "./styles/index.css";

function App() {
  const { theme, toogleTheme } = useTheme();
  const { aboba } = useTest();

  return (
    <>
      <div
        className={classNames("app", { hovered: true, backdrop: false }, [
          theme,
          "aboba",
        ])}
      >
        <button onClick={toogleTheme}>switch theme</button>
        <p>aboba</p>
        <p>APPLE</p>
        {`aboba: ${aboba}`}
        <Test />
      </div>
    </>
  );
}

export default App;
