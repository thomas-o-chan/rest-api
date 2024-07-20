import { Button } from "./components/Button";
import { View } from "./types";

export interface SelectQueryViewProps {
  setView: React.Dispatch<React.SetStateAction<View>>;
}

export function SelectQueryView({ setView }: SelectQueryViewProps) {
  return (
    <>
      <Button onClick={() => setView("idSearch")}>Search by Id</Button>
      <Button onClick={() => setView("codewordSearch")}>
        Search by Codeword
      </Button>
    </>
  );
}
