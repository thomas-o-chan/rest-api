import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { View } from "./types";
import styles from "./app.module.css";
import { RunQueryView } from "./RunQueryView";
import { SelectQueryView } from "./SelectQueryView";

interface ContentProps {
  children: JSX.Element;
}

function Content({ children }: ContentProps) {
  return <div className={styles.content}>{children}</div>;
}

function App() {
  // TODO move this to a context to avoid so much prop passing
  const [view, setView] = useState<View>("selectQuery");

  const views = {
    selectQuery: <SelectQueryView setView={setView} />,
    idSearch: <RunQueryView view={"idSearch"} setView={setView} />,
    codewordSearch: <RunQueryView view={"codewordSearch"} setView={setView} />,
  };

  return (
    <div>
      <Header />
      <Content>{views[view]}</Content>
    </div>
  );
}

export default App;
