import DestinationForm from "./components/common/form/DestinationForm";

function App() {
  const stations = [
    { title: "Holborn", name: "holborn", id: 1, zones: [1] },
    { title: "Earl’s Court", name: "earlsCourt", id: 2, zones: [1, 2] },
    { title: "Wimbledon", name: "wimbledon", id: 3, zones: [3] },
    { title: "Hammersmith", name: "hammersmith", id: 4, zones: [2] },
  ];
  const transportation = [
    { title: "Tube", name: "tube", id: 1 },
    { title: "Bus", name: "bus", id: 2 },
  ];

  const calculateFare = (from, to, transportaionType) => {
    const maximumZoneFrom = Math.max(...stations[from].zones);
    const maximumZoneTo = Math.max(...stations[to].zones);
    const totalPassesStation = Math.abs(maximumZoneFrom - maximumZoneTo) + 1;

    console.log(totalPassesStation);

    // Any bus journey
    if (transportaionType === 2) {
      return console.log(1.8);
    }

    // Anywhere in Zone 1
    if (stations[from].zones.includes(1) && stations[to].zones.includes(1)) {
      return console.log(2.5);
    }

    // Anyone Zone
    if (totalPassesStation === 1) {
      // console.log("renderd");

      // Anyone zone outside zone 1
      if (maximumZoneFrom !== 1 && maximumZoneTo !== 1) {
        return console.log(2);
      }
    }
    // Any Two Zone
    if (totalPassesStation === 2) {
      // Any two zones including zone 1
      if (maximumZoneFrom === 1 || maximumZoneTo === 1) {
        return console.log(3);
      }

      // Any two zones excluding zone 1
      if (maximumZoneFrom !== 1 && maximumZoneTo !== 1) {
        return console.log(2.25);
      }
    }

    console.log(3.2);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>Select your destination</h2>
          <DestinationForm
            stations={stations}
            transportation={transportation}
            calculateFare={calculateFare}
          />
        </div>
        <div className="col-md-6">
          <h2>Log</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
