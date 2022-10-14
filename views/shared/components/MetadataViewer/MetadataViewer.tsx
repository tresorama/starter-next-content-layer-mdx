type MetadataViewerProps = {
  data: { [k: string]: any }
}

export const MetadataViewer = ({ data }: MetadataViewerProps) => {
  const entries = Object.entries(data);
  const printValue = (v: unknown) => JSON.stringify(v).slice(0, 55);
  return (
    <>
      <div className="max-w-prose mx-auto prose">
        <h2>Metadata</h2>
        <table>
          <thead></thead>
          <tbody>
            {entries.map(([name, value], i) => (
              <tr key={i}>
                <th align="left">{name}</th>
                <td>{printValue(value)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}