import { useContext, useState } from "react";
import iconCloseModal from "../../../../assets/icon-close-modal.svg";
import { ShowBackModalContext } from "../../../../context/showBackModalContext";
import Option0 from "./Option0/Option0";
import Option1 from "./Option1/Option1";
import Option2 from "./Option2/Option2";
import Option3 from "./Option3/Option3";

const BackModal = () => {
  const { showBackModal, backModalClass } = useContext(ShowBackModalContext);

  const [option, setOption] = useState(null);

  const [optionArticle0Class, setOptionArticle0Class] =
    useState("option-article");
  const [optionArticle1Class, setOptionArticle1Class] =
    useState("option-article");
  const [optionArticle2Class, setOptionArticle2Class] =
    useState("option-article");

  const [optionPledgeDiv0Class, setOptionPledgeDiv0Class] =
    useState("option-pledge-div");
  const [optionPledgeDiv1Class, setOptionPledgeDiv1Class] =
    useState("option-pledge-div");
  const [optionPledgeDiv2Class, setOptionPledgeDiv2Class] =
    useState("option-pledge-div");

  const handleChange = (event) => {
    // event.preventDefault();
    setOption(event.target.value);
    if (event.target.value === "no-reward") {
      setOptionArticle0Class("option-article option-article-active");
      setOptionArticle1Class("option-article");
      setOptionArticle2Class("option-article");

      setOptionPledgeDiv0Class("option-pledge-div option-pledge-div-active");
      setOptionPledgeDiv1Class("option-pledge-div");
      setOptionPledgeDiv2Class("option-pledge-div");
    } else if (event.target.value === "bamboo") {
      setOptionArticle0Class("option-article");
      setOptionArticle1Class("option-article option-article-active");
      setOptionArticle2Class("option-article");

      setOptionPledgeDiv0Class("option-pledge-div");
      setOptionPledgeDiv1Class("option-pledge-div option-pledge-div-active");
      setOptionPledgeDiv2Class("option-pledge-div");
    } else if (event.target.value === "black") {
      setOptionArticle0Class("option-article");
      setOptionArticle1Class("option-article");
      setOptionArticle2Class("option-article option-article-active");

      setOptionPledgeDiv0Class("option-pledge-div");
      setOptionPledgeDiv1Class("option-pledge-div");
      setOptionPledgeDiv2Class("option-pledge-div option-pledge-div-active");
    } else {
      setOptionArticle0Class("option-article");
      setOptionArticle1Class("option-article");
      setOptionArticle2Class("option-article");

      setOptionPledgeDiv0Class("option-pledge-div");
      setOptionPledgeDiv1Class("option-pledge-div");
      setOptionPledgeDiv2Class("option-pledge-div");
    }
  };
  return (
    <>
      <section className={backModalClass}>
        <div className="back-modal-heading">
          <h2>Back this project</h2>
          <a className="close-modal-link" href="" onClick={showBackModal}>
            <img src={iconCloseModal} alt="" />
          </a>
        </div>
        <p>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
        <Option0
          handleChange={handleChange}
          option={option}
          optionArticle0Class={optionArticle0Class}
          optionPledgeDiv0Class={optionPledgeDiv0Class}
        />
        <Option1
          handleChange={handleChange}
          option={option}
          optionArticle1Class={optionArticle1Class}
          optionPledgeDiv1Class={optionPledgeDiv1Class}
        />
        <Option2
          handleChange={handleChange}
          option={option}
          optionArticle2Class={optionArticle2Class}
          optionPledgeDiv2Class={optionPledgeDiv2Class}
        />
        <Option3 />
      </section>
    </>
  );
};

export default BackModal;
