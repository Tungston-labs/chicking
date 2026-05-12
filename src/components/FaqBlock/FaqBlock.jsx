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
}) => (
  <FaqBlockGrid>
    <FaqIntro>
      {title && (
        <h2>
          {highlight && <strong>{highlight}</strong>}
          {title}
        </h2>
      )}
      {description && <FaqCopy>{description}</FaqCopy>}
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
      {faqs.map((faq) => (
        <FaqQuestion key={faq.question}>
          <FaqSummary>
            {faq.question}
            <FaPlus aria-hidden="true" />
          </FaqSummary>
          <FaqAnswer>{faq.answer}</FaqAnswer>
        </FaqQuestion>
      ))}
    </FaqAccordion>
  </FaqBlockGrid>
);

export default FaqBlock;
