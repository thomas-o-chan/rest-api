import { useState } from "react";
import { Button } from "./Button";
import styles from "./text-entry.module.css";

interface TextEntryWithSubmitProps {
  submitAction: (input: string) => void;
  placeHolder?: string;
}

export function TextEntryWithSubmit({
  submitAction,
  placeHolder = "",
}: TextEntryWithSubmitProps) {
  const [content, setContent] = useState('');
  return (
    <div className={styles.container}>
      <textarea
        className={styles.text_entry}
        onChange={(e) => setContent(e.target.value)}
        placeholder={placeHolder}
        value={content}
      />
      <Button disabled={content === ''} onClick={() => submitAction(content)}>Search</Button>
    </div>
  );
}
