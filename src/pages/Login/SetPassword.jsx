import { useEffect, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  clearResetPasswordFeedback,
  selectAuthState,
  submitNewPassword,
} from "../../store/auth/authSlice.js";
import AuthLayout from "./AuthLayout";
import {
  ErrorText,
  Field,
  FieldLabel,
  Fields,
  FormCard,
  HeadingGroup,
  Input,
  InputAction,
  InputWrap,
  PrimaryButton,
  Subtitle,
  Title,
} from "./style";

const SetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { resetPasswordError, resetPasswordStatus, resetToken } = useSelector(selectAuthState);
  const [form, setForm] = useState({
    confirmPassword: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState({
    confirmPassword: false,
    password: false,
  });
  const [error, setError] = useState("");

  useEffect(() => {
    if (!resetToken) {
      navigate("/admin-login/verify-code", { replace: true });
    }
  }, [navigate, resetToken]);

  const handleChange = ({ target: { name, value } }) => {
    setForm((current) => ({ ...current, [name]: value }));
    setError("");

    if (resetPasswordError) {
      dispatch(clearResetPasswordFeedback());
    }
  };

  const toggleVisibility = (name) => {
    setShowPassword((current) => ({ ...current, [name]: !current[name] }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.password || !form.confirmPassword) {
      setError("Please fill in both password fields.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");

    try {
      await dispatch(
        submitNewPassword({
          newPassword: form.password,
          resetToken,
        })
      ).unwrap();

      navigate("/admin-login", {
        replace: true,
        state: {
          message: "Password reset successful. Please login with your new password.",
        },
      });
    } catch {
      // Server-side error is handled by Redux state.
    }
  };

  return (
    <AuthLayout leftVariant="lock">
      <FormCard $maxWidth="21rem" onSubmit={handleSubmit}>
        <HeadingGroup>
          <Title>Set a password</Title>
          <Subtitle>Your previous password has been reset. Please set a new password for your account.</Subtitle>
        </HeadingGroup>

        <Fields>
          {[
            { label: "Create Password", name: "password" },
            { label: "Re-enter Password", name: "confirmPassword" },
          ].map(({ label, name }) => (
            <Field key={name}>
              <FieldLabel htmlFor={name}>{label}</FieldLabel>
              <InputWrap>
                <Input
                  $hasAction
                  id={name}
                  autoComplete={name === "password" ? "new-password" : "off"}
                  name={name}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  type={showPassword[name] ? "text" : "password"}
                  value={form[name]}
                />
                <InputAction
                  aria-label={showPassword[name] ? "Hide password" : "Show password"}
                  onClick={() => toggleVisibility(name)}
                  type="button"
                >
                  {showPassword[name] ? <FiEyeOff /> : <FiEye />}
                </InputAction>
              </InputWrap>
            </Field>
          ))}
        </Fields>

        {error || resetPasswordError ? <ErrorText>{error || resetPasswordError}</ErrorText> : null}
        <PrimaryButton disabled={resetPasswordStatus === "loading"} type="submit">
          {resetPasswordStatus === "loading" ? "Updating password..." : "Set password"}
        </PrimaryButton>
      </FormCard>
    </AuthLayout>
  );
};

export default SetPassword;
