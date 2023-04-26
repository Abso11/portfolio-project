import { Modal } from 'antd';
import styled from 'styled-components';
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';

export const Wrapper = styled.div`
  width: 50%;
  margin-bottom: ${({ theme }) => theme.spacing.space_16};
`;

export const EditButton = styled.button`
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.blue01};
  cursor: pointer;

  svg {
    margin-right: ${({ theme }) => theme.spacing.space_8};
  }
`;

export const StyledModal = styled(Modal)<{ noPadding?: boolean }>`
  .ant-modal-body {
    padding: ${({ noPadding, theme }) => (noPadding ? 0 : `0 ${theme.spacing.space_16} ${theme.spacing.space_16}`)};
  }

  .ant-select-selector {
    height: 56px !important;
  }
`;

export const ModalTitle = styled.p`
  padding-bottom: 10px;
  font-size: ${({ theme: { fontSize } }) => fontSize.lg};
  color: ${({ theme }) => theme.colors.black};
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme: { spacing } }) => spacing.space_32};
  padding: ${({ theme: { spacing } }) => `${spacing.space_24} ${spacing.space_8} 0`};
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.grey03};
`;

export const ModalButton = styled.button<{ primary?: boolean }>`
  margin: 0 0 4px 4px;
  padding: 4px 10px;
  font-weight: 600;
  text-transform: uppercase;
  background-color: transparent;
  border: none;
  color: ${({ theme, primary }) => (primary ? theme.colors.blue01 : theme.colors.black)};
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    text-decoration: underline;
  }
`;

export const ModalContent = styled.div`
  padding: ${({ theme: { spacing } }) => `0 ${spacing.space_24} ${spacing.space_16}`};
`;

export const ModalButtons = styled.div`
  margin: auto 0 0 auto;

  ${ModalButton}:nth-child(2) {
    color: ${({ theme }) => theme.colors.blue01};
  }
`;

export const CloseButton = styled(CloseIcon)`
  path {
    fill-opacity: 1;
  }
`;
