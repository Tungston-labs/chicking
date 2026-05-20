import { useState } from "react";
import { FiLock, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import {
  ErrorText,
  Fields,
  FormCard,
  HeadingGroup,
  Input,
  InputIcon,
  InputWrap,
  PrimaryButton,
  Subtitle,
  TextButton,
  Title,
} from "./style";

const fields = [
  {
    autoComplete: "username",
    Icon: FiMail,
    name: "username",
    placeholder: "Email Address",
    type: "email",
  },
  {
    autoComplete: "current-password",
    Icon: FiLock,
    name: "password",
    placeholder: "Password",
    type: "password",
  },
];

const LoginForm = () => {
  const [form, setForm] = useState({ password: "", username: "" });
  const [error, setError] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    setForm((current) => ({ ...current, [name]: value }));
    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.username || !form.password) {
      setError("Please enter both fields.");
      return;
    }

    setError("");
  };

  return (
    <FormCard onSubmit={handleSubmit}>
      <HeadingGroup>
        <Title>Hello Admin!</Title>
        <Subtitle>Welcome Back</Subtitle>
      </HeadingGroup>

      <Fields>
        {fields.map(({ autoComplete, Icon, name, placeholder, type }) => (
          <InputWrap key={name}>
            <InputIcon aria-hidden="true">
              <Icon />
            </InputIcon>
            <Input
              $hasIcon
              $rounded
              autoComplete={autoComplete}
              name={name}
              onChange={handleChange}
              placeholder={placeholder}
              type={type}
              value={form[name]}
            />
          </InputWrap>
        ))}
      </Fields>

      {error ? <ErrorText>{error}</ErrorText> : null}
      <PrimaryButton type="submit">Login</PrimaryButton>
      <TextButton as={Link} to="/admin-login/forgot-password">
        Forgot Password?
      </TextButton>
    </FormCard>
  );
};

export default LoginForm;
