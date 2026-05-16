import {
  FormCard, FormTitle, FormDescription,
  SectionTitle, FormGrid, InputGroup,
  Label, Input, Select,
  RadioWrapper, RadioCard, RadioContent,
  RadioTitle, RadioText, UploadBox,
  TextArea, SubmitButton, LeftSection,
  HeaderLeft, FormHeader, HeaderImage,
  ErrorText, HiddenFileInput, FileName,
} from "../../pages/Franchise/style";
import { FiUploadCloud } from "react-icons/fi";
import headerImg from "../../../public/images/map.svg";

const FranchiseFormCard = ({
  selected, setSelected,
  formData, handleChange,
  handleSubmit, errors,
}) => {
  return (
    <FormCard>
      <form onSubmit={handleSubmit}>
        <FormHeader>
          <HeaderLeft>
            <FormTitle> Chicking Franchise Application{" "} <span>Form</span></FormTitle>
            <FormDescription>
              Complete this form to begin your journey with Chicking Franchise. Our team will
              review your inquiry and match you with the right franchise opportunity.
            </FormDescription>
            <SectionTitle> Personal Information</SectionTitle>
          </HeaderLeft>
          <HeaderImage src={headerImg} alt="Map" />
        </FormHeader>
        <LeftSection>
          <FormGrid>
            <InputGroup>
              <Label>Full Name</Label>
              <Input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="David Lee" />
              {errors.fullName && (<ErrorText>{errors.fullName} </ErrorText>)}
            </InputGroup>
            <InputGroup>
              <Label>Email Address</Label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="davidlee@gmail.com" />
              {errors.email && (<ErrorText> {errors.email}</ErrorText>)}
            </InputGroup>
            <InputGroup>
              <Label>Phone Number</Label>
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+234 567 8900" />
              {errors.phone && (<ErrorText>{errors.phone} </ErrorText>)}
            </InputGroup>
            <InputGroup>
              <Label>Country</Label>
              <Select
                name="country"
                value={formData.country}
                onChange={handleChange} >
                <option value=""> Select Country </option>
                <option value="India"> India </option>
              </Select>
              {errors.country && (<ErrorText>{errors.country}</ErrorText>)}
            </InputGroup>
          </FormGrid>
          <SectionTitle style={{ marginTop: "30px" }}> Investment Details </SectionTitle>
          <Label>Level Of Interest</Label>
          <RadioWrapper>
            <RadioCard
              active={selected === "master"}
              onClick={() =>
                setSelected("master")}>
              <input
                type="radio"
                checked={selected === "master"}
                readOnly />
              <RadioContent>
                <RadioTitle> Master Franchise </RadioTitle>
                <RadioText> Large Area</RadioText>
              </RadioContent>
            </RadioCard>
            <RadioCard
              active={selected === "unit"}
              onClick={() => setSelected("unit")} >
              <input
                type="radio"
                checked={selected === "unit"}
                readOnly />
              <RadioContent>
                <RadioTitle> Unit Ownership</RadioTitle>
                <RadioText> Single Store</RadioText>
              </RadioContent>
            </RadioCard>
          </RadioWrapper>
          <InputGroup style={{ marginTop: "28px" }}>
            <Label> Estimated Investment Capacity </Label>
            <Select
              name="investment"
              value={formData.investment}
              onChange={handleChange} >
            </Select>
            {errors.investment && (<ErrorText> {errors.investment}</ErrorText>)}
          </InputGroup>
          <InputGroup style={{ marginTop: "28px" }}>
            <Label>Document Upload</Label>
            <UploadBox as="label">
              <FiUploadCloud size={30} />
              <p> Click to upload or drag and drop</p>
              {formData.file && (<FileName> {formData.file.name} </FileName>)}
              <HiddenFileInput
                type="file"
                name="file"
                onChange={handleChange} />
            </UploadBox>
            {errors.file && (<ErrorText> {errors.file}</ErrorText>)}
          </InputGroup>
          <InputGroup style={{ marginTop: "28px" }}>
            <Label> Additional Information / Questions </Label>
            <TextArea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange} />
          </InputGroup>
          <SubmitButton type="submit">Submit Franchise Inquiry</SubmitButton>
        </LeftSection>
      </form>
    </FormCard>
  );
};
export default FranchiseFormCard;
