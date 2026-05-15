import SectionHeader from "../HomeSections/components/SectionHeader/index.jsx";
import { PageSection } from "../Layout/PageLayout.jsx";
import { bmiFoods } from "./data/bmiData.js";
import {
  FoodCard,
  FoodCopy,
  FoodImage,
  FoodScroller,
  FoodScrollerViewport,
  FoodSection,
  FoodText,
  FoodTitle,
} from "./BmiFoodShowcase.styles.js";

const BmiFoodShowcase = () => (
  <FoodSection>
    <PageSection>
      <SectionHeader
        align="left"
        description="We are focused on improving the nutritional attributes of the Chicking menu, promoting physical activity programs, and always providing great-tasting food. The global debate regarding health and nutrition and the role of quick service restaurants has highlighted many challenges. We are committed to being a productive part of this debate and to helping identify solutions."
        title={
          <>
            Balanced Options By Offering More
            Choice Across The <strong>Chicking Menu.</strong>
          </>
        }
      />

      <FoodScrollerViewport>
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
      </FoodScrollerViewport>
    </PageSection>
  </FoodSection>
);

export default BmiFoodShowcase;
