import iconCloseModal from "../../../../assets/icon-close-modal.svg";
import Option0 from "./Option0/Option0";
import Option1 from "./Option1/Option1";
import Option2 from "./Option2/Option2";
import Option3 from "./Option3/Option3";

const BackModal = () => {
  return (
    <>
      <modal className="back-modal">
        <h2>Back this project</h2>
        <a className="close-modal-link" href="">
          <img src={iconCloseModal} alt="" />
        </a>
        <p>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
        <Option0 />
        <Option1 />
        <Option2 />
        <Option3 />
      </modal>
      <div className="layer-modal"></div>
    </>
  );
};

export default BackModal;
