import styles from "./results-table.module.css";

export interface ResultsTableProps {
  header: string;
  results: string | string[] | null;
}

export function ResultsTable({ results, header }: ResultsTableProps) {
  if (results === null) return <p>Run a search to see the results</p>;
  if (results.length === 0) return <p>No results</p>;
  const resultsArray = Array.isArray(results) ? results : [results];
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.header}>
            <th className={styles.cell}>{header}</th>
          </tr>
        </thead>
        <tbody>
          {resultsArray.map((result) => (
            <tr key={result} className={styles.row}>
              <td className={styles.cell}>{result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
