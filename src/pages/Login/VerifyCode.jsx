import { useEffect, useState } from "react";
import { FiChevronLeft, FiEye, FiEyeOff } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  clearVerifyOtpFeedback,
  selectAuthState,
  verifyPasswordOtp,
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { forgotPasswordEmail, verifyOtpError, verifyOtpStatus } = useSelector(selectAuthState);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [showCode, setShowCode] = useState(false);

  useEffect(() => {
    if (!forgotPasswordEmail) {
      navigate("/admin-login/forgot-password", { replace: true });
    }
  }, [forgotPasswordEmail, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!code.trim()) {
      setError("Please enter the verification code.");
      return;
    }

    setError("");

    try {
      await dispatch(
        verifyPasswordOtp({
          email: forgotPasswordEmail,
          otp: code.trim(),
        })
      ).unwrap();

      navigate("/admin-login/set-password", { replace: true });
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
          <Title>Verify code</Title>
          <Subtitle>
            Enter the OTP sent to {forgotPasswordEmail || "your email"} to continue resetting your password.
          </Subtitle>
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

                  if (verifyOtpError) {
                    dispatch(clearVerifyOtpFeedback());
                  }
                }}
                placeholder="Enter OTP"
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

        {error || verifyOtpError ? <ErrorText>{error || verifyOtpError}</ErrorText> : null}
        <InlineText>
          Didn&apos;t receive a code? <InlineLink to="/admin-login/forgot-password">Resend</InlineLink>
        </InlineText>
        <PrimaryButton disabled={verifyOtpStatus === "loading"} type="submit">
          {verifyOtpStatus === "loading" ? "Verifying..." : "Verify"}
        </PrimaryButton>
      </FormCard>
    </AuthLayout>
  );
};

export default VerifyCode;
