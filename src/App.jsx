import { useRef, useState } from "react";
import { ShowBackModalContext } from "./context/showBackModalContext";
import { SelectOptionContext } from "./context/selectOptionContext";
import { ThanksModalContext } from "./context/thanksModalContext";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  // Content of ShowBackModalContext
  // use a state to save the className of back-modal-section and layer-modal
  const [backModalClass, setBackModalClass] = useState("back-modal-section");
  const [layerModalClass, setLayerModalClass] = useState("layer-modal");
  // toggle classes
  const showBackModal = (event) => {
    event.preventDefault();
    if (backModalClass === "back-modal-section") {
      setBackModalClass("back-modal-section active");
      setLayerModalClass("layer-modal layer-modal-active");
    } else {
      setBackModalClass("back-modal-section");
      setLayerModalClass("layer-modal");
    }
  };
  // object with states and function to toggle classes
  const backModalSet = {
    showBackModal,
    backModalClass,
    layerModalClass,
  };

  // CONTENT OF SELECTOPTIONCONTEXT
  // This state will be used to make the radio to be checked
  const [option, setOption] = useState(null);
  const [optionArticleClass, setOptionArticleClass] = useState({
    optionArticle0: "option-article",
    optionArticle1: "option-article",
    optionArticle2: "option-article",
  });
  const [optionPledgeClass, setOptionPledgeClass] = useState({
    optionPledge0: "option-pledge-div",
    optionPledge1: "option-pledge-div",
    optionPledge2: "option-pledge-div",
  });
  const backModalRef = useRef(null);

  const handleChange = (event, value) => {
    let optionValue = "";
    if (value) {
      setOption(value);
      optionValue = value;
    } else {
      setOption(event.target.value);
      optionValue = event.target.value;
    }
    if (optionValue === "no-reward") {
      setOptionArticleClass({
        optionArticle0: "option-article option-article-active",
        optionArticle1: "option-article",
        optionArticle2: "option-article",
      });

      setOptionPledgeClass({
        optionPledge0: "option-pledge-div option-pledge-div-active",
        optionPledge1: "option-pledge-div",
        optionPledge2: "option-pledge-div",
      });
    } else if (optionValue === "bamboo") {
      setOptionArticleClass({
        optionArticle0: "option-article",
        optionArticle1: "option-article option-article-active",
        optionArticle2: "option-article",
      });

      setOptionPledgeClass({
        optionPledge0: "option-pledge-div",
        optionPledge1: "option-pledge-div option-pledge-div-active",
        optionPledge2: "option-pledge-div",
      });
    } else if (optionValue === "black") {
      setOptionArticleClass({
        optionArticle0: "option-article",
        optionArticle1: "option-article",
        optionArticle2: "option-article option-article-active",
      });

      setOptionPledgeClass({
        optionPledge0: "option-pledge-div",
        optionPledge1: "option-pledge-div",
        optionPledge2: "option-pledge-div option-pledge-div-active",
      });
    } else {
      setOptionArticleClass({
        optionArticle0: "option-article",
        optionArticle1: "option-article",
        optionArticle2: "option-article",
      });

      setOptionPledgeClass({
        optionPledge0: "option-pledge-div",
        optionPledge1: "option-pledge-div",
        optionPledge2: "option-pledge-div",
      });
    }
  };

  const selectOptionSet = {
    handleChange,
    option,
    optionArticleClass,
    optionPledgeClass,
    backModalRef,
  };

  // CONTENT OF THANKSMODALCONTEXT
  const [thanksModalClass, setThanksModalClass] = useState(
    "thanks-modal-section"
  );

  const showThanksModal = (event) => {
    event.preventDefault();
    console.log("holi");
    if (thanksModalClass === "thanks-modal-section") {
      setThanksModalClass("thanks-modal-section thanks-modal-section-active");
      setLayerModalClass("layer-modal layer-modal-active");
    } else {
      setThanksModalClass("thanks-modal-section");
      setLayerModalClass("layer-modal");
    }
    console.log(thanksModalClass);
  };

  const thanksModalSet = {
    showThanksModal,
    thanksModalClass,
  };

  return (
    <>
      <ShowBackModalContext.Provider value={backModalSet}>
        <SelectOptionContext.Provider value={selectOptionSet}>
          <ThanksModalContext.Provider value={thanksModalSet}>
            <Header />
            <Main />
          </ThanksModalContext.Provider>
        </SelectOptionContext.Provider>
      </ShowBackModalContext.Provider>
    </>
  );
}

export default App;
