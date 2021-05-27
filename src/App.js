import DestinationForm from "./components/common/form/DestinationForm";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>Select your destination</h2>
          <DestinationForm />
        </div>
        <div className="col-md-6">
          <h2>Log</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
