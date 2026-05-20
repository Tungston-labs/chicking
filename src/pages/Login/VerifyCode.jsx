import { useState } from "react";
import { FiChevronLeft, FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import {
  BackLink,
  ErrorText,
  Field,
  FieldLabel,
  Fields,
  FormCard,
  HeadingGroup,
  InlineLink,
  InlineText,
  Input,
  InputAction,
  InputWrap,
  PrimaryButton,
  Subtitle,
  Title,
} from "./style";

const VerifyCode = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState("7789M6X");
  const [error, setError] = useState("");
  const [showCode, setShowCode] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!code.trim()) {
      setError("Please enter the verification code.");
      return;
    }

    setError("");
    navigate("/admin-login/set-password");
  };

  return (
    <AuthLayout leftVariant="lock">
      <FormCard $maxWidth="21rem" onSubmit={handleSubmit}>
        <BackLink to="/admin-login">
          <FiChevronLeft aria-hidden="true" />
          Back to login
        </BackLink>

        <HeadingGroup>
          <Title>Verify code</Title>
          <Subtitle>An authentication code has been sent to your email.</Subtitle>
        </HeadingGroup>

        <Fields>
          <Field>
            <FieldLabel htmlFor="verify-code">Enter Code</FieldLabel>
            <InputWrap>
              <Input
                $hasAction
                id="verify-code"
                autoComplete="one-time-code"
                onChange={({ target }) => {
                  setCode(target.value);
                  setError("");
                }}
                placeholder="7789M6X"
                type={showCode ? "text" : "password"}
                value={code}
              />
              <InputAction
                aria-label={showCode ? "Hide code" : "Show code"}
                onClick={() => setShowCode((current) => !current)}
                type="button"
              >
                {showCode ? <FiEyeOff /> : <FiEye />}
              </InputAction>
            </InputWrap>
          </Field>
        </Fields>

        {error ? <ErrorText>{error}</ErrorText> : null}
        <InlineText>
          Didn&apos;t receive a code? <InlineLink to="/admin-login/forgot-password">Resend</InlineLink>
        </InlineText>
        <PrimaryButton type="submit">Verify</PrimaryButton>
      </FormCard>
    </AuthLayout>
  );
};

export default VerifyCode;
