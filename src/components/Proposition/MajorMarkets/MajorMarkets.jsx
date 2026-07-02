import {
  Wrapper,
  Container,
  SideCard,
  CardTop,
  Country,
  Package,
  Button,
  CardImage,
  CenterContent,
  BreadTop,
  BreadBottom,
  Heading,
  Description,
  Curly,
  ContentBox,
} from "./style";
import { useNavigate } from "react-router-dom";

const breadTop = "/images/proposition/breadtop.svg";
const breadBottom = "/images/proposition/breadbottom.svg";
const curly = "/images/proposition/curly.svg";
const curlyright = "/images/proposition/curlyright.svg";

const marketCards = [
  {
    country: "United States Of America",
    image: "/images/proposition/Majorman.svg",
    imageAlt: "United States franchise package",
    route: "/us-package",
  },
  {
    country: "United Kingdom",
    image: "/images/proposition/Majorflag.svg",
    imageAlt: "United Kingdom franchise package",
    route: "/uk-package",
  },
  {
    country: "Thailand",
    image: "/images/proposition/Thailogo.svg",
    imageAlt: "Thailand franchise package",
    route: "/thai-package",
  },
];

const MajorMarkets = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        {marketCards.map((card) => (
          <SideCard key={card.country}>
            <CardTop>
              <Country>{card.country}</Country>
              <Package>Franchise Package</Package>
              <Button onClick={() => navigate(card.route)}>
                View Package
              </Button>
            </CardTop>

            <CardImage src={card.image} alt={card.imageAlt} loading="lazy" decoding="async" />
          </SideCard>
        ))}

        <CenterContent>
          <Curly src={curly} alt="" />

          <ContentBox>
            <BreadTop src={breadTop} alt="" />

            <Heading>
              Tailored Models For <span>Major Markets</span>
            </Heading>

            <Description>
              BFI Offers Specialized Support And Compliant Business
              Structures For Key Regulatory Environments,
              Ensuring A Targeted Approach For Serious Investors
            </Description>

            <BreadBottom src={breadBottom} alt="" />
          </ContentBox>

          <Curly src={curlyright} alt="" />
        </CenterContent>
      </Container>
    </Wrapper>
  );
};

export default MajorMarkets;
