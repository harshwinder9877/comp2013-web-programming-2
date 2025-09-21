import './App.css'
import Card from "./components/Card";


import indonesia from "./assets/images/1.jpg";
import seychelles from "./assets/images/2.jpg";
import usvirgin from "./assets/images/3.jpg";
import bahamas from "./assets/images/4.jpg";
import mauritius from "./assets/images/5.jpg";
import bermuda from "./assets/images/6.jpg";

function App() {
  return (
    <div className="app">
      <h1 className="title">Resorts Lite</h1>
      <hr className="divider" />

      <div className="card-grid">
        <Card country="Indonesia" resort="Gili Air Hotel" image={indonesia} rating={4.8} price={589} />
        <Card country="Seychelles" resort="Hilton Resort" image={seychelles} rating={4.2} price={629} />
        <Card country="US Virgin Islands" resort="Goa Resort" image={usvirgin} rating={3.5} price={485} />
        <Card country="Bahamas" resort="Kuredu Resort" image={bahamas} rating={4.1} price={729} />
        <Card country="Mauritius" resort="Trou D'eau Douce" image={mauritius} rating={4.9} price={877} />
        <Card country="Bermuda" resort="Staniel Cay Hotel" image={bermuda} rating={3.2} price={365} />
      </div>
    </div>
  );
}

export default App;
