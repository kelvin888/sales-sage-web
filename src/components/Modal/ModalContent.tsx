import { FC, ReactNode } from "react";

type ModalContentProps = {
    children: ReactNode
}
const ModalContent: FC<ModalContentProps> = ({ children }) => (
    <div className='px-5 pb-5'>
        {children}
    </div>
);

export default ModalContent