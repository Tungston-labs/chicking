import { useState } from "react";
import { FiChevronLeft } from "react-icons/fi";
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
  Input,
  PrimaryButton,
  Subtitle,
  Title,
} from "./style";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }

    setError("");
    navigate("/admin-login/verify-code");
  };

  return (
    <AuthLayout leftVariant="lock">
      <FormCard $maxWidth="21rem" onSubmit={handleSubmit}>
        <BackLink to="/admin-login">
          <FiChevronLeft aria-hidden="true" />
          Back to login
        </BackLink>

        <HeadingGroup>
          <Title>Forgot your password?</Title>
          <Subtitle>
            Don&apos;t worry, happens to all of us. Enter your email below to recover your password.
          </Subtitle>
        </HeadingGroup>

        <Fields>
          <Field>
            <FieldLabel htmlFor="forgot-email">Email</FieldLabel>
            <Input
              id="forgot-email"
              autoComplete="email"
              onChange={({ target }) => {
                setEmail(target.value);
                setError("");
              }}
              placeholder="john.doe@gmail.com"
              type="email"
              value={email}
            />
          </Field>
        </Fields>

        {error ? <ErrorText>{error}</ErrorText> : null}
        <PrimaryButton type="submit">Submit</PrimaryButton>
      </FormCard>
    </AuthLayout>
  );
};

export default ForgotPassword;
