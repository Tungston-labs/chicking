import { useState } from "react";
import { FiChevronLeft } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  clearForgotPasswordFeedback,
  requestPasswordReset,
  selectAuthState,
} from "../../store/auth/authSlice.js";
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
  SuccessText,
  Subtitle,
  Title,
} from "./style";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { forgotPasswordError, forgotPasswordStatus } = useSelector(selectAuthState);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }

    setError("");

    try {
      await dispatch(
        requestPasswordReset({
          email: email.trim(),
        })
      ).unwrap();

      navigate("/admin-login/verify-code", { replace: true });
    } catch {
      // Server-side error is handled by Redux state.
    }
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

                if (forgotPasswordError) {
                  dispatch(clearForgotPasswordFeedback());
                }
              }}
              placeholder="john.doe@gmail.com"
              type="email"
              value={email}
            />
          </Field>
        </Fields>

        {forgotPasswordStatus === "succeeded" ? (
          <SuccessText>OTP sent successfully. Redirecting you to verification.</SuccessText>
        ) : null}
        {error || forgotPasswordError ? <ErrorText>{error || forgotPasswordError}</ErrorText> : null}
        <PrimaryButton disabled={forgotPasswordStatus === "loading"} type="submit">
          {forgotPasswordStatus === "loading" ? "Sending OTP..." : "Submit"}
        </PrimaryButton>
      </FormCard>
    </AuthLayout>
  );
};

export default ForgotPassword;
