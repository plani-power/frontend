import React from "react";
import styled from "styled-components";
import { iconClose } from "assets";
interface Props {
  title: string;
  closeModal: () => void;
  children: React.ReactNode;
}

const StyledModalBackground = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: var(--black);
  opacity: 0.5;
  z-index: 1;
  bottom: 0;
`;

const StyledBottomSheet = styled.div`
  z-index: 2;
  position: fixed;
  max-width: 420px;
  width: 100%
  height: fit-content;
  max-height: 90%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  bottom: 0;
  border-radius: 1rem 1rem 0 0;
  background-color: white;
  margin-left: -20px;
`;

const StyledBottomSheetHeader = styled.div`
  height: 4.4rem;
  padding: 1.1rem 2.2rem 0.9rem 2.2rem;
  display: flex;
  align-items: center;
  border-bottom: 0.1rem solid var(--light-gray);
  position: sticky;
  top: 0;
  background: white;

  & > img {
    cursor: pointer;
  }

  & > div {
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.7rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;
const Bottomsheet = ({ title, closeModal, children }: Props) => {
  return (
    <>
      <StyledModalBackground />
      <StyledBottomSheet>
        <StyledBottomSheetHeader>
          <img src={iconClose} alt="x" onClick={closeModal} />
          <div>{title}</div>
        </StyledBottomSheetHeader>
        <div>{children}</div>
      </StyledBottomSheet>
    </>
  );
};

export default Bottomsheet;
