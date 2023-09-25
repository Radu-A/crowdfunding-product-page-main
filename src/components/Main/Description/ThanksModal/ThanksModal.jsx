import { useContext } from "react";
import iconCheck from "../../../../assets/icon-check.svg";
import { ThanksModalContext } from "../../../../context/thanksModalContext";

const ThanksModal = () => {
  const { showThanksModal, thanksModalClass } = useContext(ThanksModalContext);

  const handleClick = (event) => {
    showThanksModal(event);
  };
  return (
    <section className={thanksModalClass}>
      <img src={iconCheck} alt="" />
      <h2>Thanks for your support!</h2>
      <p>
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide. You will get an email once our campaign is
        completed.
      </p>
      <button onClick={handleClick}>Got it!</button>
    </section>
  );
};

export default ThanksModal;
