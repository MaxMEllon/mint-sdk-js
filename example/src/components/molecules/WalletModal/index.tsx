import styled from '@emotion/styled'
import React from 'react'
import Image from 'next/image'
import Modal, { Styles } from 'react-modal'
import { color, font } from '../../../style'
import { PrimaryLoadingButton } from '../../atoms/LoadingBotton'

type Props = {
  isOpen: boolean
  closeModal: () => void
  connectWallet: () => void
  loading: boolean
}

const customStyles: Styles = {
  overlay: {
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    border: 'none',
    background: 'transparent',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

export const WalletModal: React.VFC<Props> = ({
  closeModal,
  connectWallet,
  isOpen,
  loading,
}) => {
  return (
    <Modal isOpen={isOpen} style={customStyles} contentLabel="Wallet">
      <ModalContainer>
        <Content>
          <ContentLeft src={'/images/wallet_modal_visual.svg'} />
          <ContentRight>
            <ContentRightTitle>ウォレットに接続してください </ContentRightTitle>
            <ContentRightButtonContainer>
              <PrimaryLoadingButton
                label={'CONNECT'}
                isLoading={loading}
                onClick={connectWallet}
              />
            </ContentRightButtonContainer>
          </ContentRight>
        </Content>
        <CloseButton onClick={closeModal}>
          <Image
            src={'/images/close_button.svg'}
            width={64}
            layout={'fixed'}
            height={64}
          />
        </CloseButton>
      </ModalContainer>
    </Modal>
  )
}

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
  width: 878px;
  display: flex;
  border-radius: 16px;
  overflow: hidden;
  background: ${color.white};
  /* Elevation/16px */
  box-shadow: 0px 9px 16px rgba(0, 0, 0, 0.04),
    0px 2.01027px 3.57381px rgba(0, 0, 0, 0.0238443),
    0px 0.598509px 1.06402px rgba(0, 0, 0, 0.0161557);
`

const ContentLeft = styled.img`
  height: 100%;
  width: 50%;
  object-fit: cover;
  display: block;
`

const ContentRight = styled.div`
  width: 50%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ContentRightTitle = styled.p`
  ${font.lg.h2};
`

const ContentRightButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const CloseButton = styled.div`
  cursor: pointer;
  margin-top: 96px;
`
