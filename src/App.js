import { useEffect } from 'react';
import './App.css';
import SideBar from "./components/SideBar";
import MainPart from "./components/MainPart";
import WebFont from 'webfontloader';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Tiro Tamil", "Lobster", "Caveat", "Dancing Script", "Cormorant Garamond", "Joan", "Pacifico", "Kalam"]
      }
    });
  }, []);

  return (
    <div className='dashboard'>
      <div className="dashboard-part-1">
        <SideBar />
      </div>
      <div className="dashboard-part-2">
        <MainPart />
      </div>
    </div>
  );
}

export default App;
