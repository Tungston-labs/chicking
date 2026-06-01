import {
  Wrapper,
  HeaderSection,
  TopBgImage,
  Heading,
  SubHeading,
  CardsWrapper,
  Card,
  IconBox,
  CardTitle,
  CardText,
} from "./style";
const topShape = "/images/proposition/yellowstar.svg";
const icon1 = "/images/proposition/sparkle.svg";
const icon2 = "/images/proposition/medal.svg";
const icon3 = "/images/proposition/globe.svg";

const cardData = [
  {
    icon: icon1,
    title: "Exceptional",
    highlight: "Growth",
    subtitle: "Rate",
    text:
      "92% growth metric demonstrates our Chicking expansion velocity across emerging and established markets.",
  },
  {
    icon: icon2,
    title: "Operational",
    highlight: "Excellence",
    subtitle: "",
    text:
      "88% operational score reflects our commitment to streamlined processes and Chicking franchisee success.",
  },
  {
    icon: icon3,
    title: "Dominant",
    highlight: "Market",
    subtitle: "Position",
    text:
      "Number 1 Halal Quick Service Restaurant Franchise, serving millions across 36+ countries with Chicking excellence.",
  },
];

const  CompetitiveAdvantage = () => {
  return (
    <Wrapper>
      <HeaderSection>
        <TopBgImage src={topShape} alt="" />
        <Heading>
          Our <span>Competitive</span> Advantage
        </Heading>
        <SubHeading>
          Industry-leading metrics across all key performance indicators
        </SubHeading>
      </HeaderSection>

      <CardsWrapper>
        {cardData.map((item, index) => (
          <Card key={index}>
            <IconBox>
              <img src={item.icon} alt={item.highlight} />
            </IconBox>
            <CardTitle>
              {item.title} <span>{item.highlight}</span>{" "}
              {item.subtitle}
            </CardTitle>
            <CardText>
              {item.text}
            </CardText>
          </Card>
        ))}
      </CardsWrapper>
    </Wrapper>
  );
};

export default CompetitiveAdvantage;
