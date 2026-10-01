import React from "react";
import {
  Section,
  Container,
  LeftSidebar,
  SidebarTitle,
  RightContent,
  QuoteSymbol,
  QuoteText,
  Divider,
  AuthorName,
  AuthorTitle,
} from "./ChairmanMessage.styles";

const QuoteIcon = () => (
  <svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 14H11C12.6569 14 14 12.6569 14 11V3C14 1.34315 12.6569 0 11 0H3C1.34315 0 0 1.34315 0 3V11C0 19 5 25 14 28L16 23.5C10 21.5 8 17.5 8 14H3ZM21 14H29C30.6569 14 32 12.6569 32 11V3C32 1.34315 30.6569 0 29 0H21C19.3431 0 18 1.34315 18 3V11C18 19 23 25 32 28L34 23.5C28 21.5 26 17.5 26 14H21Z"
      fill="#891b1c"
    />
  </svg>
);

const ChairmanMessage = () => {
  return (
    <Section data-animate="fade-up">
      <Container>
        <LeftSidebar>
          <SidebarTitle>Message From The Chairman</SidebarTitle>
        </LeftSidebar>

        <RightContent>
          <QuoteSymbol>
            <QuoteIcon />
          </QuoteSymbol>

          <QuoteText>
            SINCE opening our first outlet along Dubai's Muteena Road in the
            bustling Deira district, Chicking has continued its meteoric rise and
            rapid expansion to become one of the strongest quick service restaurants
            in the world. Today, the franchise consists of more than 160 outlets,
            spread out across 17 countries, including Oman, Morocco, Afghanistan,
            Malaysia, Saudi Arabia, Indonesia, the Maldives and India.
          </QuoteText>

          <QuoteText>
            Most recently, Chicking has opened in Australia and New Zealand, and in
            the future it hopes to develop a stronger presence on the European and
            African continents. We're already in countries such as the UK, the
            Netherlands and Morocco, and by the end of 2019 we will expand to 12
            more countries in Europe, Central Asia and Africa. Part of my plan is to
            open 1,000 Chicking stores globally by 2025.
          </QuoteText>

          <Divider />

          <AuthorName>A K MANSOOR</AuthorName>
          <AuthorTitle>Founder &amp; Chairman</AuthorTitle>
        </RightContent>
      </Container>
    </Section>
  );
};

export default ChairmanMessage;
