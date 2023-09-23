import React, { FC, ReactNode } from 'react'
import Modal from 'react-modal';
import "./Modal.scss"
import Image from 'next/image';
import ModalHeader from './ModalHeader';
import ModalFooter from './ModalFooter';
import ModalContent from './ModalContent';

const customStyles = {

};

type Props = {
    isOpen: boolean,
    closeModal: () => void,
    children: ReactNode
}


const SageModal: FC<Props> & {
    Header: typeof ModalHeader;
    Content: typeof ModalContent;
    Footer: typeof ModalFooter;
} = ({ isOpen, closeModal, children }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            overlayClassName="modal--overlay"
            className='modal'
        >
            <button onClick={closeModal} data-testid="" className="modal--close">
                <Image src="../images/close-icon.svg" width={16} height={16} alt='close' />
            </button>
            {children}
        </Modal>)
}


SageModal.Header = ModalHeader
SageModal.Content = ModalContent
SageModal.Footer = ModalFooter



export default SageModal