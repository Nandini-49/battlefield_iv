import "./App.css";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";
import InfoBox from "./components//InfoBox/InfoBox";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <div className="container">
        <Sidebar />
        <Breadcrumb />
        <InfoBox />
      </div>
    </>
  );
}

export default App;
