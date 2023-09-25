import Option1 from "./Option1/Option1";
import Option2 from "./Option2/Option2";
import Option3 from "./Option3/Option3";
import BackModal from "./BackModal/BackModal";
import { useContext } from "react";
import { ShowBackModalContext } from "../../../context/showBackModalContext";
import ThanksModal from "./ThanksModal/ThanksModal";

const Description = () => {
  const { showBackModal, layerModalClass } = useContext(ShowBackModalContext);

  return (
    <section className="description-section">
      <article className="description-article">
        <h2>About this project</h2>
        <p>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </p>
        <p>
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </p>
      </article>
      <Option1 />
      <Option2 />
      <Option3 />
      <BackModal />
      <ThanksModal />
      <div className={layerModalClass} onClick={showBackModal}></div>
    </section>
  );
};

export default Description;
