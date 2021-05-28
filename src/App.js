import React from "react";
import DestinationForm from "./components/common/form/DestinationForm";
import Log from "./components/common/Log";

function App() {
  // Value of if the card swiped
  const [isSwipe, setIsSwipe] = React.useState(false);

  // Value of if in the bus
  const [isInTheBus, setIsInTheBus] = React.useState(false);

  // All logs data stores here
  const [logs, setLogs] = React.useState([]);

  // Balance of the card
  const [balance, setBalance] = React.useState(0);

  // Stations list
  const stations = [
    { title: "Holborn", name: "holborn", id: 1, zones: [1] },
    { title: "Earl’s Court", name: "earlsCourt", id: 2, zones: [1, 2] },
    { title: "Wimbledon", name: "wimbledon", id: 3, zones: [3] },
    { title: "Hammersmith", name: "hammersmith", id: 4, zones: [2] },
  ];

  // List of transportation
  const transportation = [
    { title: "Tube", name: "tube", id: 1 },
    { title: "Bus", name: "bus", id: 2 },
  ];

  // Function to calculateFare
  const calculateFare = (from, to, transportaionType) => {
    // Store the maximum zone from the array
    const maximumZoneFrom = Math.max(...stations[from].zones);
    const maximumZoneTo = Math.max(...stations[to].zones);

    // Calculate how many zone passed
    const totalPassedStation = Math.abs(maximumZoneFrom - maximumZoneTo) + 1;

    // Setting false of isInTheBus state.
    setIsInTheBus(false);

    // This object will contain log's data
    let obj = {};

    // Charge maximum fare if not swipe out before exit
    if (isSwipe) {
      obj = { from, to, fare: 3.2, by: transportaionType };

      setIsSwipe(false);
      return setLogs([...logs, obj]);
    }

    setIsSwipe(false);

    // Any bus journey
    if (transportaionType === 2) {
      obj = { from, to, fare: 1.8, by: transportaionType };

      return setLogs([...logs, obj]);
    }

    // Anywhere in Zone 1
    if (stations[from].zones.includes(1) && stations[to].zones.includes(1)) {
      obj = { from, to, fare: 2.5, by: transportaionType };

      return setLogs([...logs, obj]);
    }

    // Anyone Zone
    if (totalPassedStation === 1) {
      // console.log("renderd");

      // Anyone zone outside zone 1
      if (maximumZoneFrom !== 1 && maximumZoneTo !== 1) {
        obj = { from, to, fare: 2, by: transportaionType };

        return setLogs([...logs, obj]);
      }
    }
    // Any Two Zone
    if (totalPassedStation === 2) {
      // Any two zones including zone 1
      if (maximumZoneFrom === 1 || maximumZoneTo === 1) {
        obj = { from, to, fare: 3, by: transportaionType };

        return setLogs([...logs, obj]);
      }

      // Any two zones excluding zone 1
      if (maximumZoneFrom !== 1 && maximumZoneTo !== 1) {
        obj = { from, to, fare: 2.25, by: transportaionType };

        return setLogs([...logs, obj]);
      }
    }

    obj = { from, to, fare: 3.2, by: transportaionType };

    setLogs([...logs, obj]);
  };

  const totalFare = logs.reduce((a, b) => a + b.fare, 0);

  return (
    <div className="py-4">
      <h1 className="text-center mb-5">
        Balance: £{(balance - totalFare).toFixed(2)}
      </h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            {balance - totalFare <= 0 ? (
              <>
                <p>
                  You have insufficient balance. Please recharge to continue.
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => setBalance(balance + 30)}
                >
                  Recharge £30
                </button>
              </>
            ) : (
              <>
                {!isSwipe && !isInTheBus ? (
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={() => {
                      setIsSwipe(true);
                      setIsInTheBus(true);
                    }}
                  >
                    Swipe In
                  </button>
                ) : (
                  <>
                    <h2>Select your destination</h2>
                    <DestinationForm
                      stations={stations}
                      transportation={transportation}
                      calculateFare={calculateFare}
                      isSwipe={isSwipe}
                      setIsSwipe={setIsSwipe}
                    />
                  </>
                )}
              </>
            )}
          </div>
          <div className="col-md-6">
            <h2>Log</h2>
            <table className="table table-bordered">
              <caption>
                <b>Total Fare:</b> £{totalFare.toFixed(2)}
              </caption>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">From</th>
                  <th scope="col">To</th>
                  <th scope="col">By</th>
                  <th scope="col">Fare</th>
                </tr>
              </thead>
              <tbody>
                {logs.map((log, index) => (
                  <Log
                    key={index}
                    index={index}
                    log={log}
                    stations={stations}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
