import { IoMdClose } from "react-icons/io";
import MenuList from "./MenuList";

const MobileMenu = ({onClose}) => {
  return (
    <div className='mobile-menu'>
      <button className='close-btn' onClick={onClose}>
        <IoMdClose />
      </button>
      <MenuList device={true}/>
    </div>
  );
};

export default MobileMenu;