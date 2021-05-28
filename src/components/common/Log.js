const Log = ({ log, index, stations }) => {
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{stations[log.from]?.title}</td>
      <td>{stations[log.to]?.title}</td>
      <td>{log.by ? "Bus" : "Tube"}</td>
      <td>£{log.fare.toFixed(2)}</td>
    </tr>
  );
};

export default Log;
