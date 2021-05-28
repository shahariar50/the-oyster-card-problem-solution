import DestinationForm from "./components/common/form/DestinationForm";

function App() {
  const stations = [
    { title: "Holborn", name: "holborn", id: 1, zones: [1] },
    { title: "Earl’s Court", name: "earlsCourt", id: 2, zones: [1, 2] },
    { title: "Wimbledon", name: "wimbledon", id: 3, zones: [3] },
    { title: "Hammersmith", name: "hammersmith", id: 4, zones: [4] },
  ];
  const transportation = [
    { title: "Tube", name: "tube", id: 1 },
    { title: "Bus", name: "bus", id: 2 },
  ];

  const calculateFare = (from, to, transportaionType) => {
    const totalPassesStation = Math.abs(from - to);
    const totalZones = [...stations[from - 1].zones, ...stations[to - 1].zones];

    // Any bus journey
    if (transportaionType === 2) {
      return console.log(1.8);
    }

    // Anywhere in Zone 1
    if (
      stations[from - 1].zones.includes(1) &&
      stations[to - 1].zones.includes(1)
    ) {
      return console.log(2.5);
    }

    console.log(from, to, transportaionType, totalPassesStation, totalZones);
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
