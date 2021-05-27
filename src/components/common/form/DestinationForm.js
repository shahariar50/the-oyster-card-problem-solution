import React from "react";

const DestinationForm = () => {
  const [errors, setErrors] = React.useState([]);

  const stations = [
    { title: "Holborn", name: "holborn", id: 1 },
    { title: "Earl’s Court", name: "earlsCourt", id: 2 },
    { title: "Wimbledon", name: "wimbledon", id: 3 },
    { title: "Hammersmith", name: "hammersmith", id: 4 },
  ];
  const transportation = [
    { title: "Tube", name: "tube", id: 2 },
    { title: "Bus", name: "bus", id: 1 },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);

    if (e.target["stationFrom"].value === e.target["stationTo"].value) {
      setErrors([...errors, "Please choose a different location."]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {errors.length > 0 && (
        <div className="alert alert-danger" role="alert">
          {errors.map((error) => (
            <React.Fragment key={error}>
              {error}
              <br />
            </React.Fragment>
          ))}
        </div>
      )}
      <div className="form-group">
        <label htmlFor="stationFrom">From</label>
        <select name="stationFrom" className="form-control" id="stationFrom">
          {stations.map((station) => (
            <option key={station.id} value={station.id}>
              {station.title}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="stationTo">To</label>
        <select name="stationTo" className="form-control" id="stationTo">
          {stations.map((station) => (
            <option key={station.id} value={station.id}>
              {station.title}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="transportationType">Transportaion Type</label>
        <select
          name="transportationType"
          className="form-control"
          id="transportationType"
        >
          {transportation.map((station) => (
            <option key={station.id} value={station.id}>
              {station.title}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default DestinationForm;
