import { useState } from "react";
import { ShowBackModalContext } from "./context/showBackModalContext";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  const [backModalClass, setBackModalClass] = useState("back-modal-section active");
  const [layerModalClass, setLayerModalClass] = useState("layer-modal");

  const showBackModal = (event) => {
    event.preventDefault();
    console.log("holi");
    if (backModalClass === "back-modal-section") {
      setBackModalClass("back-modal-section active");
      setLayerModalClass("layer-modal layer-modal-active");
    } else {
      setBackModalClass("back-modal-section");
      setLayerModalClass("layer-modal");
    }
  };

  const backModalSet = {
    showBackModal,
    backModalClass,
    layerModalClass
  };

  return (
    <>
      <ShowBackModalContext.Provider value={backModalSet}>
        <Header />
        <Main />
      </ShowBackModalContext.Provider>
    </>
  );
}

export default App;
