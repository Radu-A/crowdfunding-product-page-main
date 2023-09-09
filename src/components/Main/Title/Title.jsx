import iconBookmark from '../../../assets/icon-bookmark.svg'
import logoMastercraft from '../../../assets/logo-mastercraft.svg'

const Title = () => {
  return (
    <section className="title-section">
      <img className='logo-mastercraft' src={logoMastercraft} alt="" />
      <h1>Mastercraft Bamboo Monitor Riser</h1>
      <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
      <div className='title-button-div'>
        <button className="back-button">Back this project</button>
        <button className="bookmark-button"><img src={iconBookmark} alt="" /></button>
      </div>
    </section>
  )
;
};

export default Title;
