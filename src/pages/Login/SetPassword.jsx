import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [form, setForm] = useState({
    confirmPassword: "7789M8X@e0h&SK_",
    password: "7789M8X@e0h&SK_",
  });
  const [showPassword, setShowPassword] = useState({
    confirmPassword: false,
    password: false,
  });
  const [error, setError] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    setForm((current) => ({ ...current, [name]: value }));
    setError("");
  };

  const toggleVisibility = (name) => {
    setShowPassword((current) => ({ ...current, [name]: !current[name] }));
  };

  const handleSubmit = (event) => {
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
    navigate("/admin-login");
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
                  placeholder="7789M8X@e0h&SK_"
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

        {error ? <ErrorText>{error}</ErrorText> : null}
        <PrimaryButton type="submit">Set password</PrimaryButton>
      </FormCard>
    </AuthLayout>
  );
};

export default SetPassword;
