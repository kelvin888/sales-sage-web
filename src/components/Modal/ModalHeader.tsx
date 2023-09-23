import { FC, ReactNode } from "react";

type ModalHeaderProps = {
    title: ReactNode
}
const ModalHeader: FC<ModalHeaderProps> = ({ title }) => (
    <div className="p-5">
        <h2 className="text-lg">{title}</h2>
    </div>
);

export default ModalHeader