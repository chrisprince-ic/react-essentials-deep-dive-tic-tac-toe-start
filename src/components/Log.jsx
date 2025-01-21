export default function Log({ log }) {
  return (
    <div id="log">
      <h2>Game Log</h2>
      <ol>
        {log.map((entry, index) => (
          <li
            key={index}
            className={index === log.length - 1 ? "highlighted" : ""}
          >
            {entry}
          </li>
        ))}
      </ol>
    </div>
  );
}
