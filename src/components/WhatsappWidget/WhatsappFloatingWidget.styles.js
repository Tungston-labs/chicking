import styled, { keyframes } from "styled-components";

const pulseAnimation = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6);
  }
  70% {
    box-shadow: 0 0 0 16px rgba(37, 211, 102, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
`;

export const WidgetContainer = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-family: inherit;

  @media (max-width: 480px) {
    bottom: 16px;
    right: 16px;
  }
`;

export const WidgetTrigger = styled.button`
  display: flex;
  align-items: center;
  gap: 0;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: none;
  filter: drop-shadow(0 6px 16px rgba(0, 0, 0, 0.25));
  transition: transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.96);
  }
`;

export const LetsChatCapsule = styled.div`
  background: linear-gradient(135deg, #c62828 0%, #891b1c 100%);
  color: #ffffff;
  padding: 0.6rem 1.2rem 0.6rem 0.85rem;
  border-radius: 30px 0 0 30px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 800;
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border: 2px solid #ffffff;
  border-right: none;
  box-shadow: -3px 2px 10px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
`;

export const BfiBadgeLogo = styled.span`
  background: #ffffff;
  color: #c62828;
  font-size: 0.65rem;
  font-weight: 900;
  padding: 0.15rem 0.4rem;
  border-radius: 12px;
  letter-spacing: 0.02em;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

export const WhatsappCircleIcon = styled.div`
  width: 58px;
  height: 58px;
  min-width: 54px;
  background: #25d366;
  color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #ffffff;
  box-shadow: 0 4px 16px rgba(37, 211, 102, 0.45);
  font-size: 2rem;
  margin-left: -12px;
  z-index: 2;
  animation: ${pulseAnimation} 2.5s infinite;

  @media (max-width: 480px) {
    width: 46px;
    height: 46px;
    min-width: 46px;
    font-size: 2rem;
  }
`;

export const ChatCard = styled.div`
  width: 330px;
  max-width: calc(100vw - 32px);
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  margin-bottom: 14px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  animation: fadeInCard 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;

  @keyframes fadeInCard {
    from {
      opacity: 0;
      transform: translateY(12px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;

export const CardHeader = styled.div`
  background: linear-gradient(135deg, #075e54 0%, #128c7e 100%);
  color: #ffffff;
  padding: 1.1rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitleGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const HeaderAvatar = styled.div`
  width: 42px;
  height: 42px;
  background: #25d366;
  color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
`;

export const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderName = styled.h3`
  margin: 0;
  font-size: 1.05rem;
  font-weight: 700;
  line-height: 1.2;
`;

export const HeaderSubtitle = styled.span`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: 0.2rem;

  &::before {
    content: "";
    display: inline-block;
    width: 7px;
    height: 7px;
    background: #25d366;
    border-radius: 50%;
  }
`;

export const CloseButton = styled.button`
  background: rgba(255, 255, 255, 0.15);
  border: none;
  color: #ffffff;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

export const CardBody = styled.div`
  padding: 1.25rem;
  background: #efeae2;
  background-image: radial-gradient(#d1c7bd 1px, transparent 0);
  background-size: 16px 16px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MessageBubble = styled.div`
  background: #ffffff;
  color: #333333;
  padding: 0.9rem 1rem;
  border-radius: 0 16px 16px 16px;
  font-size: 0.9rem;
  line-height: 1.45;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -8px;
    width: 0;
    height: 0;
    border-top: 8px solid #ffffff;
    border-left: 8px solid transparent;
  }
`;

export const PhoneBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: #555555;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.7);
  padding: 0.35rem 0.75rem;
  border-radius: 8px;
  width: fit-content;
`;

export const CardFooter = styled.div`
  padding: 1rem 1.25rem 1.25rem;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const MessageInputArea = styled.textarea`
  width: 100%;
  min-height: 60px;
  padding: 0.65rem 0.85rem;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  font-family: inherit;
  font-size: 0.875rem;
  resize: none;
  outline: none;

  &:focus {
    border-color: #25d366;
    box-shadow: 0 0 0 2px rgba(37, 211, 102, 0.2);
  }
`;

export const SendButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  background: #25d366;
  color: #ffffff;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.95rem;
  padding: 0.75rem 1.25rem;
  border-radius: 30px;
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.35);
  transition: background 0.2s ease, transform 0.15s ease;

  &:hover {
    background: #1ebd56;
    transform: translateY(-1px);
    color: #ffffff;
  }

  &:active {
    transform: translateY(1px);
  }
`;
