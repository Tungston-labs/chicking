import React, { useState, useEffect } from "react";
import {
    Wrapper,
    Container,
    Heading,
    Description,
    ContentWrapper,
    ImageSection,
    StoreImage,
    RightSection,
    SupportItem,
    IconWrap,
    ItemContent,
    ItemTitle,
    ItemDescription
} from "./BFIPillars.styles";

import {
    sliderImages,
    supportData
} from "./leadershipData";
const awardIcon = "/images/proposition/medal.svg";
const FADE_DURATION = 700;
const SLIDE_DURATION = 3000;

const BFIPillars = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);

  const showNextImage = () => {
    setCurrentImage((prev) => (prev + 1) % sliderImages.length);
    setFade(true);
  };

  useEffect(() => {
    let timeoutId;

    const changeImage = () => {
      setFade(false);
      timeoutId = setTimeout(showNextImage, FADE_DURATION);
    };

    const interval = setInterval(changeImage, SLIDE_DURATION);

    return () => {
      clearInterval(interval);
      clearTimeout(timeoutId);
    };
  }, []);


    return (
        <Wrapper>
            <Container>

                <Heading>
                    Chicking <span>BFI</span> Pillars Of <strong>Support</strong>
                </Heading>

                <Description>
                    Our comprehensive support systems in the Chicking franchise are designed
                    to ensure your franchise success through three core pillars that scale
                    efficiency and profitability.
                </Description>

                <ContentWrapper>

                    <ImageSection>
                        <StoreImage
                            src={sliderImages[currentImage]}
                            fade={fade}
                        />
                    </ImageSection>

                    <RightSection>

                        {supportData.map((item, index) => (

                            <SupportItem key={index}>

                                <IconWrap>
                                    <img
                                        src={awardIcon}
                                        alt="award"
                                    />
                                </IconWrap>

                                <ItemContent>
                                    <ItemTitle>
                                        {item.title}
                                    </ItemTitle>

                                    <ItemDescription>
                                        {item.description}
                                    </ItemDescription>
                                </ItemContent>

                            </SupportItem>

                        ))}

                    </RightSection>

                </ContentWrapper>

            </Container>
        </Wrapper>
    );
};

export default BFIPillars;
