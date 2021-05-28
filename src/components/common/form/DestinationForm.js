import React from "react";

const DestinationForm = ({
  stations,
  transportation,
  calculateFare,
  isSwipe,
  setIsSwipe,
}) => {
  const [errors, setErrors] = React.useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = [];
    setErrors(obj);

    if (e.target["stationFrom"].value === e.target["stationTo"].value) {
      obj.push("Please choose a different location");
      return setErrors(obj);
    }

    calculateFare(
      Number(e.target["stationFrom"].value),
      Number(e.target["stationTo"].value),
      Number(e.target["transportationType"].value)
    );
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
          {stations.map((station, index) => (
            <option key={station.id} value={index}>
              {station.title}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="stationTo">To</label>
        <select name="stationTo" className="form-control" id="stationTo">
          {stations.map((station, index) => (
            <option key={station.id} value={index}>
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
      {isSwipe && (
        <button
          className="btn btn-primary mr-3"
          onClick={(e) => {
            e.preventDefault();
            setIsSwipe(false);
          }}
        >
          Swipe Out
        </button>
      )}
      <button
        type="submit"
        className={`btn ${isSwipe ? "btn-danger" : "btn-primary"}`}
      >
        Exit the car
      </button>
    </form>
  );
};

export default DestinationForm;
