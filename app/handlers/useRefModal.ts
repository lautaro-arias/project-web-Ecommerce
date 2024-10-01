import  { useRef } from 'react'

export const useRefModal = () => {
    const modalRef = useRef<HTMLDialogElement>(null);

    const showModal = () => {
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    }
  return {
    showModal,
    modalRef
  }
}
