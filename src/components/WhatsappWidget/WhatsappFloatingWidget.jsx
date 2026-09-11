import { useState } from "react";
import { FaWhatsapp, FaPaperPlane } from "react-icons/fa";
import { FiX, FiPhone } from "react-icons/fi";
import {
  WidgetContainer,
  WidgetTrigger,
  LetsChatCapsule,
  BfiBadgeLogo,
  WhatsappCircleIcon,
  ChatCard,
  CardHeader,
  HeaderTitleGroup,
  HeaderAvatar,
  HeaderText,
  HeaderName,
  HeaderSubtitle,
  CloseButton,
  CardBody,
  MessageBubble,
  PhoneBadge,
  CardFooter,
  MessageInputArea,
  SendButton,
} from "./WhatsappFloatingWidget.styles.js";

const PHONE_NUMBER = "971547911797";
const PHONE_DISPLAY = "+971 54 791 1797";

export default function WhatsappFloatingWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("Hi! I would like to inquire about Chicking.");

  const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <WidgetContainer>
      {isOpen && (
        <ChatCard>
          <CardHeader>
            <HeaderTitleGroup>
              <HeaderAvatar>
                <FaWhatsapp />
              </HeaderAvatar>

              <HeaderText>
                <HeaderName>Chicking Support</HeaderName>
                <HeaderSubtitle>Typically replies instantly</HeaderSubtitle>
              </HeaderText>
            </HeaderTitleGroup>

            <CloseButton onClick={() => setIsOpen(false)} aria-label="Close chat window">
              <FiX />
            </CloseButton>
          </CardHeader>

          <CardBody>
          

            <MessageBubble>
              Hello! 👋 Welcome to Chicking. How can we help you today? Type your message below to chat with us on WhatsApp.
            </MessageBubble>
          </CardBody>

          <CardFooter>
            <MessageInputArea
              rows={2}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
            />

            <SendButton
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                // Smoothly close modal after launching WhatsApp tab
                setTimeout(() => setIsOpen(false), 400);
              }}
            >
              <FaPaperPlane /> Chat on WhatsApp
            </SendButton>
          </CardFooter>
        </ChatCard>
      )}

      <WidgetTrigger
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Open WhatsApp Chat"
        title="Chat with us on WhatsApp (+971 54 791 1797)"
      >
        {/* <LetsChatCapsule>
          <BfiBadgeLogo>BFI</BfiBadgeLogo>
          LET'S CHAT
        </LetsChatCapsule> */}

        <WhatsappCircleIcon>
          <FaWhatsapp />
        </WhatsappCircleIcon>
      </WidgetTrigger>
    </WidgetContainer>
  );
}
