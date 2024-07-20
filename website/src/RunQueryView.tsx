import { useState } from "react";
import { resultNameIndex, viewNameIndex } from "./libs/utils";
import { ResultsTable } from "./components/ResultsTable";
import { Button } from "./components/Button";
import getActionIds from "./libs/get-action-ids";
import getCodeword from "./libs/get-codeword";
import { TextEntryWithSubmit } from "./components/TextEntryWithSubmit";
import { View } from "./types";
import styles from "./run-query-view.module.css";

interface RunQueryViewProps {
  view: Exclude<View, "selectQuery">;
  setView: React.Dispatch<React.SetStateAction<View>>;
}

export function RunQueryView({ view, setView }: RunQueryViewProps) {
  const [queryResult, setQueryResult] = useState<string[] | null>(null);

  const submitActions = {
    idSearch: async (codeword: string) => {
      setQueryResult(await getActionIds(codeword));
    },
    codewordSearch: async (id: string) => {
      setQueryResult(await getCodeword(id));
    },
  };

  return (
    <div className={styles.container}>
      <h2>{viewNameIndex[view]}</h2>
      <TextEntryWithSubmit submitAction={submitActions[view]} />
      <ResultsTable header={resultNameIndex[view] || view} results={queryResult} />
      <Button onClick={() => setView("selectQuery")}>Back</Button>
    </div>
  );
}
