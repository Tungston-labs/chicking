import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import {
    Wrapper,
    Title,
    Description,
    Accordion,
    Item,
    Question,
    Answer,
} from "./styles";

const faqData = [
    {
        question: "What is Chicking?",
        answer:
            "Chicking is an international halal compliantquick service restaurant (QSR) brand originated from Dubai and specializing in fried chicken and fast-food offerings. It has a strong unique globally accepted menu range and operates across 46 countries with 488 stores through a structured franchise model focused on consistency and quality..",
    },
    {
        question: "What is the estimated investment?",
        answer: "The investment depends on location andformat and includes interiors, kitchen equipment, licenses, and pre-opening expenses. Amount required to Setup – USD 60,000 approx. mount required to buy Kitchen Equipment’s–USD 55,000 approx. Initial Working Capital Required foroperations – USD 30,000"
    },
    {
        question: "Is there a franchise fee?",
        answer: "Yes, A one-time franchise fee is applicable. Franchise Fee – USD 30,000 {Unit Franchise} Franchise Term – 5 Years Master Franchise - Fee, Royalty, Sharing Terms etc. will be provided in a direct meeting with BFI Team"
    },
    {
        question: "Is there a royalty fee?",
        answer: "Yes. A monthly royalty fee applies. Royalty – 6% on Monthly Sales"
    },
    {
        question: "Is there a marketing contribution?",
        answer: "Subject to the Location and Franchise Agreement"
    },
    {
        question: "Who selects the site?",
        answer: "The franchisee proposes the site, subject to Chicking approval."
    }
];

function FAQ() {
const [active, setActive] = useState(null);

    return (
        <Wrapper>
            <Title>
                <strong>Frequently</strong> Asked Questions?
            </Title>

            <Description>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Description>

            <Accordion>
                {faqData.map((item, index) => (
                    <Item key={index} active={active === index}>
                        <Question
                            active={active === index}
                            onClick={() =>
                                setActive(active === index ? null : index)
                            }
                        >
                            {item.question}

                            {active === index ? (
                                <FaMinus />
                            ) : (
                                <FaPlus />
                            )}
                        </Question>

                        {active === index && (
                            <Answer>
                                {item.answer}
                            </Answer>
                        )}
                    </Item>
                ))}
            </Accordion>
        </Wrapper>
    );
}

export default FAQ;