import {
  FormCard,
  FormTitle,
  FormDescription,
  SectionTitle,
  FormGrid,
  InputGroup,
  Label,
  Input,
  RadioWrapper,
  RadioCard,
  RadioContent,
  RadioTitle,
  RadioText,
  UploadBox,
  TextArea,
  SubmitButton,
  LeftSection,
  HeaderLeft,
  FormHeader,
  HeaderImage,
  ErrorText,
  HiddenFileInput,
  FileName,
} from "../../pages/Franchise/style";
import { COUNTRIES } from "../../constants/countries.js";
import CustomSelect from "./CustomSelect.jsx";
import { FiUploadCloud } from "react-icons/fi";

const INVESTMENT_OPTIONS = [
  "USD 100,000 - 250,000",
  "USD 250,000 - 500,000",
  "USD 500,000 - 1,000,000",
  "USD 1,000,000+",
];

const headerImg = "/images/franchise/map.svg";

const FranchiseFormCard = ({
  selected,
  setSelected,
  formData,
  handleChange,
  handleSubmit,
  isSubmitting,
  errors,
}) => {
  return (
    <FormCard>
      <form onSubmit={handleSubmit}>
        <FormHeader>
          <HeaderLeft>
            <FormTitle>
              {" "}
              Chicking Franchise Application <span>Form</span>
            </FormTitle>
            <FormDescription>
              Complete this form to begin your journey with Chicking Franchise.
              Our team will review your inquiry and match you with the right
              franchise opportunity.
            </FormDescription>
            <SectionTitle> Personal Information</SectionTitle>
          </HeaderLeft>
          <HeaderImage src={headerImg} alt="Map" />
        </FormHeader>
        <LeftSection>
          <FormGrid>
            <InputGroup>
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="David Lee"
                aria-required="true"
              />
              {errors.fullName && <ErrorText>{errors.fullName} </ErrorText>}
            </InputGroup>
            <InputGroup>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="davidlee@gmail.com"
                aria-required="true"
              />
              {errors.email && <ErrorText> {errors.email}</ErrorText>}
            </InputGroup>
            <InputGroup>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+234 567 8900"
                aria-required="true"
              />
              {errors.phone && <ErrorText>{errors.phone} </ErrorText>}
            </InputGroup>
            <InputGroup>
              <Label htmlFor="country">Country</Label>
              <CustomSelect
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                options={COUNTRIES}
                placeholder="Select Country"
                searchable={true}
                hasError={Boolean(errors.country)}
              />
              {errors.country && <ErrorText>{errors.country}</ErrorText>}
            </InputGroup>
          </FormGrid>
          <SectionTitle style={{ marginTop: "30px" }}>
            {" "}
            Investment Details{" "}
          </SectionTitle>
          <Label as="span">Level Of Interest</Label>
          <RadioWrapper role="radiogroup" aria-label="Level Of Interest">
            <RadioCard
              active={selected === "master"}
              onClick={() => setSelected("master")}
            >
              <input
                type="radio"
                id="radio-master"
                name="interestLevel"
                checked={selected === "master"}
                onChange={() => setSelected("master")}
                aria-label="Master Franchise - Large Area"
              />
              <RadioContent>
                <RadioTitle as="label" htmlFor="radio-master"> Master Franchise </RadioTitle>
                <RadioText> Large Area</RadioText>
              </RadioContent>
            </RadioCard>
            <RadioCard
              active={selected === "unit"}
              onClick={() => setSelected("unit")}
            >
              <input
                type="radio"
                id="radio-unit"
                name="interestLevel"
                checked={selected === "unit"}
                onChange={() => setSelected("unit")}
                aria-label="Unit Ownership - Single Store"
              />
              <RadioContent>
                <RadioTitle as="label" htmlFor="radio-unit"> Unit Ownership</RadioTitle>
                <RadioText> Single Store</RadioText>
              </RadioContent>
            </RadioCard>
          </RadioWrapper>
          <InputGroup style={{ marginTop: "28px" }}>
            <Label htmlFor="investment"> Estimated Investment Capacity </Label>
            <CustomSelect
              id="investment"
              name="investment"
              value={formData.investment}
              onChange={handleChange}
              options={INVESTMENT_OPTIONS}
              placeholder="Select Investment Capacity"
              searchable={false}
              hasError={Boolean(errors.investment)}
            />
            {errors.investment && <ErrorText> {errors.investment}</ErrorText>}
          </InputGroup>
          <InputGroup style={{ marginTop: "28px" }}>
            <Label htmlFor="file">Document Upload</Label>
            <UploadBox as="label" htmlFor="file">
              <FiUploadCloud size={30} />
              <p> Click to upload or drag and drop</p>
              {formData.file && <FileName> {formData.file.name} </FileName>}
              <HiddenFileInput
                id="file"
                type="file"
                name="file"
                onChange={handleChange}
                aria-required="true"
              />
            </UploadBox>
            {errors.file && <ErrorText> {errors.file}</ErrorText>}
          </InputGroup>
          <InputGroup style={{ marginTop: "28px" }}>
            <Label htmlFor="additionalInfo"> Additional Information / Questions </Label>
            <TextArea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
            />
          </InputGroup>
          <SubmitButton disabled={isSubmitting} type="submit">
            {isSubmitting ? "Submitting..." : "Submit Franchise Inquiry"}
          </SubmitButton>
        </LeftSection>
      </form>
    </FormCard>
  );
};
export default FranchiseFormCard;
