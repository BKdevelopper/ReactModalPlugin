import React from "react";
import "./index.css";
import PropTypes from 'prop-types'
import { useState, useEffect } from "react";
/**
 * Modal component 
 * @param {object} props component's properties
 * @param {string} props.text message to show
 * @param {boolean} props.visible; the state of the modal
 * @param {Function} props.closeButton; the function to close the modal
 * @returns {JSX.Element} A modal component that is being returned in JSX format
 */
const ModalComponent = ({ text, visible, closeButton }) => {
    const [isVisible, setIsVisible] = useState(false)
    useEffect(() => {
      setIsVisible(visible)
    }, [visible])
  
  return (
    <div className={`ModalComponent-${isVisible ? 'is-open' : 'is-close'}`}>
     <div className="ModalComponent_container">
       <div className="ModalComponent_overlay"></div>
       <div className="ModalComponent_modal">
         <button className="ModalComponent_close"  onClick={closeButton}>X</button>
         <p className="ModalComponent_text">{text}</p>
       </div>
     </div>
    </div>
  );
};
ModalComponent.propTypes = {
    text: PropTypes.string.isRequired,
    closeButton: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired,
}
export default ModalComponent