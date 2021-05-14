import React from 'react';

interface ModalContent {
    isOpen: boolean;
    content: JSX.Element;
    InsertContent: (content: JSX.Element) => void;
    toogleModal: () => void;
    openModal: () => void;
    closeModal: () => void;
}
export const ModalContext = React.createContext({} as ModalContent);
export const ModalProvider: React.FC = ({ children }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [content, setContent] = React.useState(<></>);

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    function toogleModal() {
        setIsOpen(!isOpen);
    }
    function InsertContent(content: JSX.Element) {
        setContent(content);
    }
    return (
        <ModalContext.Provider
            value={{
                isOpen,
                content,
                InsertContent,
                toogleModal,
                openModal,
                closeModal,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
};
