import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { faqBrochurePages } from "../../pages/FAQ/data/faqBrochureData.js";
import {
    Wrapper,
    Title,
    Description,
    Accordion,
    Item,
    Question,
    Answer,
    HeaderRow,
    LanguageButton,
    LanguageToggle,
    Pager,
    PagerButton,
    PageNumber,
} from "./styles";

const QUESTIONS_PER_PAGE = 10;

const stripQuestionNumber = (value = "") => value.replace(/^Q?\d+\.\s*/i, "").replace(/^س\d+\.\s*/, "").trim();

const buildFaqItems = () => {
    const items = [];
    const seenQuestions = new Set();

    faqBrochurePages.forEach((page) => {
        page.rows.forEach((row, index) => {
            if (row.type !== "question") {
                return;
            }

            const answerRows = [];

            for (let rowIndex = index + 1; rowIndex < page.rows.length; rowIndex += 1) {
                const nextRow = page.rows[rowIndex];

                if (nextRow.type === "question" || nextRow.type === "section" || nextRow.type === "title") {
                    break;
                }

                answerRows.push(nextRow);
            }

            const englishQuestion = stripQuestionNumber(row.english);
            const arabicQuestion = stripQuestionNumber(row.arabic);
            const dedupeKey = englishQuestion.toLowerCase();

            if (!englishQuestion || seenQuestions.has(dedupeKey)) {
                return;
            }

            seenQuestions.add(dedupeKey);
            items.push({
                englishQuestion,
                arabicQuestion,
                englishAnswer: answerRows.map((answer) => answer.english).filter(Boolean).join(" "),
                arabicAnswer: answerRows.map((answer) => answer.arabic).filter(Boolean).join(" "),
            });
        });
    });

    return items;
};

const faqData = buildFaqItems();

function FAQ() {
const [active, setActive] = useState(null);
const [language, setLanguage] = useState("english");
const [pageIndex, setPageIndex] = useState(0);
const pageCount = Math.ceil(faqData.length / QUESTIONS_PER_PAGE);
const visibleFaqs = faqData.slice(pageIndex * QUESTIONS_PER_PAGE, (pageIndex + 1) * QUESTIONS_PER_PAGE);
const isArabic = language === "arabic";

const handleLanguageChange = (nextLanguage) => {
    setLanguage(nextLanguage);
    setActive(null);
};

const handlePageChange = (nextPageIndex) => {
    setPageIndex(nextPageIndex);
    setActive(null);
};

    return (
        <Wrapper dir={isArabic ? "rtl" : "ltr"} $isArabic={isArabic}>
            <HeaderRow $isArabic={isArabic}>
                <div>
                    <Title $isArabic={isArabic}>
                        {isArabic ? "امتياز تشيكينغ - الأسئلة الشائعة" : "Chicking Franchise - Frequently Asked Questions ?"}
                    </Title>

                    <Description $isArabic={isArabic}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                        text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Description>
                </div>

                <LanguageToggle aria-label="Select FAQ language">
                    <LanguageButton
                        $active={language === "english"}
                        onClick={() => handleLanguageChange("english")}
                        type="button"
                    >
                        English
                    </LanguageButton>
                    <LanguageButton
                        $active={language === "arabic"}
                        onClick={() => handleLanguageChange("arabic")}
                        type="button"
                    >
                        العربية
                    </LanguageButton>
                </LanguageToggle>
            </HeaderRow>

            <Accordion>
                {visibleFaqs.map((item, index) => (
                    <Item key={index} active={active === index}>
                        <Question
                            active={active === index}
                            $isArabic={isArabic}
                            onClick={() =>
                                setActive(active === index ? null : index)
                            }
                            type="button"
                        >
                            <span>{isArabic ? item.arabicQuestion : item.englishQuestion}</span>

                            {active === index ? (
                                <FaMinus />
                            ) : (
                                <FaPlus />
                            )}
                        </Question>

                        {active === index && (
                            <Answer $isArabic={isArabic}>
                                {isArabic ? item.arabicAnswer : item.englishAnswer}
                            </Answer>
                        )}
                    </Item>
                ))}
            </Accordion>

            <Pager>
                <PagerButton
                    disabled={pageIndex === 0}
                    onClick={() => handlePageChange(Math.max(pageIndex - 1, 0))}
                    type="button"
                >
                    ‹
                </PagerButton>
                {Array.from({ length: pageCount }, (_, index) => (
                    <PageNumber
                        $active={pageIndex === index}
                        key={index + 1}
                        onClick={() => handlePageChange(index)}
                        type="button"
                    >
                        {index + 1}
                    </PageNumber>
                ))}
                <PagerButton
                    disabled={pageIndex === pageCount - 1}
                    onClick={() => handlePageChange(Math.min(pageIndex + 1, pageCount - 1))}
                    type="button"
                >
                    ›
                </PagerButton>
            </Pager>
        </Wrapper>
    );
}

export default FAQ;
