import { useState } from "react";
import { FaPlus } from "react-icons/fa";

import {
  FaqAccordion,
  FaqAnswer,
  FaqBlockGrid,
  FaqCopy,
  FaqIntro,
  FaqQuestion,
  FaqSummary,
  FaqVisual,
  FaqVisualImage,
} from "./FaqBlock.styles.js";

const FaqBlock = ({
  description,
  faqs = [],
  highlight,
  mapImage,
  pinImage,
  title,
}) => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (event, index) => {
    event.preventDefault();

    setOpenIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <FaqBlockGrid>
      <FaqIntro>
        {title && (
          <h2>
            {highlight && <strong>{highlight}</strong>}
            {title}
          </h2>
        )}

        {description && (
          <FaqCopy>{description}</FaqCopy>
        )}

        {(mapImage || pinImage) && (
          <FaqVisual aria-hidden="true">
            {mapImage && (
              <FaqVisualImage
                $variant="map"
                src={mapImage}
                alt=""
                loading="lazy"
              />
            )}

            {pinImage && (
              <FaqVisualImage
                $variant="pin"
                src={pinImage}
                alt=""
                loading="lazy"
              />
            )}
          </FaqVisual>
        )}
      </FaqIntro>

      <FaqAccordion>
        {faqs.map((faq, index) => (
          <FaqQuestion
            key={faq.question}
            open={openIndex === index}
          >
            <FaqSummary
              onClick={(event) =>
                handleToggle(event, index)
              }
            >
              {faq.question}
              <FaPlus aria-hidden="true" />
            </FaqSummary>

            <FaqAnswer>
              <p>{faq.answer}</p>
            </FaqAnswer>
          </FaqQuestion>
        ))}
      </FaqAccordion>
    </FaqBlockGrid>
  );
};

export default FaqBlock;