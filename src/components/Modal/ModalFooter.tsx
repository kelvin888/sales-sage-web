import { FC, ReactNode } from "react";

type ModalHeaderProps = {
    children: ReactNode
}
const ModalFooter: FC<ModalHeaderProps> = ({ children }) => (
    <div className="modal-footer">
        {children}
    </div>
);

export default ModalFooter