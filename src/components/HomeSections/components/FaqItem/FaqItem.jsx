import { FaPlus } from "react-icons/fa";
import { FaqItemShell } from "./FaqItem.styles.js";

const FaqItem = ({ answer, question }) => (
  <FaqItemShell>
    <summary>
      {question}
      <FaPlus aria-hidden="true" />
    </summary>
    <p>{answer}</p>
  </FaqItemShell>
);

export default FaqItem;
