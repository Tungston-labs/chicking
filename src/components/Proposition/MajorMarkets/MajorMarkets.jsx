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

const usaImg = "/images/proposition/Majorman.svg";
const ukImg = "/images/proposition/Majorflag.svg";
const breadTop = "/images/proposition/breadtop.svg";
const breadBottom = "/images/proposition/breadbottom.svg";
const curly = "/images/proposition/curly.svg";
const curlyright = "/images/proposition/curlyright.svg";

const MajorMarkets = () => {
    const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <SideCard>
          <CardTop>
            <Country>United States Of America</Country>
            <Package>Franchise Package</Package>
            <Button onClick={() => navigate("/us-package")}>
      View Package
    </Button>
          </CardTop>

          <CardImage src={usaImg} alt="USA" />
        </SideCard>

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

        <SideCard>
          <CardTop>
            <Country>United Kingdom</Country>
            <Package>Franchise Package</Package>
        <Button onClick={() => navigate("/uk-package")}>
      View Package
    </Button>
          </CardTop>

          <CardImage src={ukImg} alt="UK" />
        </SideCard>
      </Container>
    </Wrapper>
  );
};

export default MajorMarkets;
