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
import awardIcon from "../../../public/images/proposition/medal.svg";
const BFIPillars = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {

        const interval = setInterval(() => {

            setFade(false);

            setTimeout(() => {

                setCurrentImage(
                    prev => (prev + 1) % sliderImages.length
                );

                setFade(true);

            }, 300);

        }, 3000);

        return () => clearInterval(interval);

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