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

import franchiseImg from "../../../public/images/franchise/franchise.svg";
import tornEdge from "../../../public/images/franchise/bottom.png";
import FranchiseFormCard from "../../components/FranchiseFormCard/FranchiseFormCard";
import PartnerCta from "../../components/HomeSections/sections/PartnerCta";
import SiteFooter from "../../components/HomeSections/sections/SiteFooter";
import PageLayout from "../../components/Layout/PageLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useFranchiseForm from "./useFranchiseForm";

const FranchiseForm = () => {
  const {
    titles,
    titleIndex,
    selected,
    setSelected,
    formData,
    handleChange,
    handleSubmit,
    errors,
  } = useFranchiseForm();

  return (
    <PageLayout>
      <PageWrapper>
        <ToastContainer position="top-right" autoClose={3000} />
        <HeroSection>
          <HeroContent>
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

          <FranchiseFormCard
            selected={selected}
            setSelected={setSelected}
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            errors={errors}
          />
        </HeroSection>

        <TornBottom src={tornEdge} alt="" aria-hidden />
        <PartnerCta />
        <SiteFooter />
      </PageWrapper>
    </PageLayout>
  );
};

export default FranchiseForm;
