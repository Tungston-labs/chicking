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
            "Chicking is an international halal compliant quick service restaurant (QSR) brand originated from Dubai and specializing in fried chicken and fast-food offerings. It has a strong globally accepted menu range and operates across 46 countries.",
    },
    {
        question: "What is the estimated investment?",
        answer: "Investment varies based on location and store model."
    },
    {
        question: "Is there a franchise fee?",
        answer: "Yes, franchise fees apply depending on market."
    },
    {
        question: "Is there a royalty fee?",
        answer: "Yes, royalty fees are part of the agreement."
    },
    {
        question: "Is there a marketing contribution?",
        answer: "Marketing contributions may apply."
    },
    {
        question: "Who selects the site?",
        answer: "Site selection is done jointly."
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