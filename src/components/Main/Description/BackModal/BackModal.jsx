import { useContext } from "react";
import { ShowBackModalContext } from "../../../../context/showBackModalContext";
import { SelectOptionContext } from "../../../../context/selectOptionContext";
import Option0 from "./Option0/Option0";
import Option1 from "./Option1/Option1";
import Option2 from "./Option2/Option2";
import Option3 from "./Option3/Option3";
import iconCloseModal from "../../../../assets/icon-close-modal.svg";

const BackModal = () => {
  const { showBackModal, backModalClass } = useContext(ShowBackModalContext);
  const {backModalRef} = useContext(SelectOptionContext)
  return (
    <>
      <section className={backModalClass} ref={backModalRef}>
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
        <Option0 />
        <Option1 />
        <Option2 />
        <Option3 />
      </section>
    </>
  );
};

export default BackModal;
