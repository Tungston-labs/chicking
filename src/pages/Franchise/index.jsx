import {
  PageWrapper,
  HeroSection,
  HeroContent,
  SmallTitle,
  MainTitle,
  Description,
  HeroImage,
  TornBottom,
} from "./style";

import FranchiseFormCard from "../../components/FranchiseFormCard/FranchiseFormCard";
import PartnerCta from "../../components/HomeSections/sections/PartnerCta";
import SiteFooter from "../../components/HomeSections/sections/SiteFooter";
import PageLayout from "../../components/Layout/PageLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useFranchiseForm from "./useFranchiseForm";

const franchiseImg = "/images/franchise/franchise.svg";
const tornEdge = "/images/franchise/bottom.png";

const FranchiseForm = () => {
  const {
    titles,
    titleIndex,
    selected,
    setSelected,
    formData,
    handleChange,
    handleSubmit,
    isSubmitting,
    errors,
  } = useFranchiseForm();

  return (
    <PageLayout>
      <PageWrapper>
        <ToastContainer position="top-right" autoClose={3000} />
        <HeroSection>
          <HeroContent data-animate="fade-up">
            <div>
              <SmallTitle>Join Our Family &</SmallTitle>

              <MainTitle key={titleIndex}>{titles[titleIndex]}</MainTitle>

              <Description>
                Complete this form to begin your journey with Chicking
                Franchise. Our team will review your inquiry and match you with
                the right franchise opportunity.
              </Description>
            </div>

            <HeroImage src={franchiseImg} alt="Franchise" />
          </HeroContent>

          <div data-animate="fade-up">
            <FranchiseFormCard
              selected={selected}
              setSelected={setSelected}
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              errors={errors}
            />
          </div>
        </HeroSection>

        <TornBottom src={tornEdge} alt="" aria-hidden />
        <div data-animate="fade-up">
          <PartnerCta />
        </div>
        <SiteFooter />
      </PageWrapper>
    </PageLayout>
  );
};

export default FranchiseForm;
