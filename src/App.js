import "./App.css";
import { CustomButton } from "./components/CustomComponents";
import Navbar from "./components/Navbar";
import Test_hook from "./components/Test_hook";
import TextForm from "./components/TextForm";
import UseMemo from "./components/UseMemo";
// import BoldTextButton from "./components/BoldTextButton"

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Test_hook/> */}
      {/* <UseMemo /> */}
     <div className="container my-3">
     <TextForm heading = "Enter your Text"/>
    {/* <BoldTextButton /> */}
     </div>
    // </div>
  );
}

export default App;
