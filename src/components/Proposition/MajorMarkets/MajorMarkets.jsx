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
import usaImg from "../../../../public/images//proposition/Majorman.svg";
import ukImg from "../../../../public/images/proposition/Majorflag.svg";
import breadTop from "../../../../public/images/proposition/breadtop.svg";
import breadBottom from "../../../../public/images/proposition/breadbottom.svg";
import curly from "../../../../public/images/proposition/curly.svg";
import curlyright from "../../../../public/images/proposition/curlyright.svg";
import { useNavigate } from "react-router-dom";

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
