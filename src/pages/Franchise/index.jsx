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
import PartnerCta from "../../components/HomeSections/sections/PartnerCta/index.jsx";
import SiteFooter from "../../components/HomeSections/sections/SiteFooter/index.jsx";
import PageLayout from "../../components/Layout/PageLayout";
import SEO from "../../components/Common/SEO.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useFranchiseForm from "./useFranchiseForm";

const franchiseImg = "/images/franchise/franchise.svg";
const tornEdge = "/images/franchise/bottom.webp";

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
      <SEO
        title="Franchise Application Form | Chicking Opportunity"
        description="Complete the Chicking franchise inquiry form to begin your journey toward owning a successful global QSR franchise outlet."
        canonicalPath="/franchiseform"
      />
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

            <HeroImage src={franchiseImg} alt="Chicking global franchise opportunity illustration" />
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

        <TornBottom src={tornEdge} alt="" aria-hidden="true" />
        <div data-animate="fade-up">
          <PartnerCta />
        </div>
        <SiteFooter />
      </PageWrapper>
    </PageLayout>
  );
};

export default FranchiseForm;

