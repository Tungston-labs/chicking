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

const ChairmanMessage = () => {
  return (
    <Section data-animate="fade-up">
      <Container>
        <LeftSidebar>
          <SidebarTitle>Message From The Chairman</SidebarTitle>
        </LeftSidebar>

        <RightContent>
          <QuoteSymbol>66</QuoteSymbol>

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
