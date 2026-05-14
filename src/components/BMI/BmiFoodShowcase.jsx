import SectionHeader from "../HomeSections/components/SectionHeader/index.jsx";
import { PageSection } from "../Layout/PageLayout.jsx";
import { bmiFoods } from "./data/bmiData.js";
import {
  FoodCard,
  FoodCopy,
  FoodImage,
  FoodScroller,
  FoodSection,
  FoodText,
  FoodTitle,
} from "./BmiFoodShowcase.styles.js";

const BmiFoodShowcase = () => (
  <FoodSection>
    <PageSection>
      <SectionHeader
        align="left"
        description="Menu breadth is part of the investment story. Chicking expands customer choice through craveable signature products and dependable everyday favorites."
        title={
          <>
            Balanced Options By Offering More
            <br />
            Choice Across The <strong>Chicking Menu.</strong>
          </>
        }
      />

      <FoodScroller>
        {bmiFoods.map((food) => (
          <FoodCard key={food.title}>
            <FoodImage src={food.image} alt={food.title} />
            <FoodCopy>
              <FoodTitle>{food.title}</FoodTitle>
              <FoodText>{food.text}</FoodText>
            </FoodCopy>
          </FoodCard>
        ))}
      </FoodScroller>
    </PageSection>
  </FoodSection>
);

export default BmiFoodShowcase;
