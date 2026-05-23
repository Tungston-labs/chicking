import { useState } from "react";
import { FiLock, FiMail } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { clearLoginFeedback, loginAdmin, selectAuthState } from "../../store/auth/authSlice.js";
import {
  ErrorText,
  Fields,
  FormCard,
  HeadingGroup,
  Input,
  InputIcon,
  InputWrap,
  PrimaryButton,
  SuccessText,
  Subtitle,
  TextButton,
  Title,
} from "./style";

const fields = [
  {
    autoComplete: "username",
    Icon: FiMail,
    name: "email",
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
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { loginError, loginStatus } = useSelector(selectAuthState);
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const successMessage = location.state?.message || "";

  const handleChange = ({ target: { name, value } }) => {
    setForm((current) => ({ ...current, [name]: value }));
    setError("");

    if (loginError) {
      dispatch(clearLoginFeedback());
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.email || !form.password) {
      setError("Please enter both fields.");
      return;
    }

    setError("");

    try {
      await dispatch(
        loginAdmin({
          email: form.email.trim(),
          password: form.password,
        })
      ).unwrap();

      navigate(location.state?.from?.pathname || "/dashboard/blogs", {
        replace: true,
      });
    } catch {
      // Server-side error is handled by Redux state.
    }
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

      {successMessage ? <SuccessText>{successMessage}</SuccessText> : null}
      {error || loginError ? <ErrorText>{error || loginError}</ErrorText> : null}
      <PrimaryButton disabled={loginStatus === "loading"} type="submit">
        {loginStatus === "loading" ? "Logging in..." : "Login"}
      </PrimaryButton>
      <TextButton as={Link} to="/admin-login/forgot-password">
        Forgot Password?
      </TextButton>
    </FormCard>
  );
};

export default LoginForm;
