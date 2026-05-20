import LoginForm from "./LoginForm";
import loginImages from "../../assets/images/loginImages";
import {
  CenterBadge,
  CenterLogo,
  DottedCircle,
  FoodItem,
  LeftPanel,
  LeftPanelInner,
  LoginContainer,
  Orbit,
  RightPanel,
  TopLogo,
} from "./style";

const foodItems = [
  { alt: "Burger", key: "burger" },
  { alt: "Fries", key: "fries1" },
  { alt: "Fries", key: "fries2" },
  { alt: "Chicken", key: "chicken" },
];

const Login = () => (
  <LoginContainer>
    <LeftPanel>
      <LeftPanelInner>
        <Orbit>
          <DottedCircle src={loginImages.dottedcircle} alt="" aria-hidden="true" />
          <CenterBadge>
            <CenterLogo src={loginImages.loginlogo} alt="Chicking logo" />
          </CenterBadge>
          {foodItems.map(({ alt, key }) => (
            <FoodItem key={key} src={loginImages[key]} alt={alt} $variant={key} />
          ))}
        </Orbit>
      </LeftPanelInner>
    </LeftPanel>
    <RightPanel>
      <LoginForm />
    </RightPanel>
  </LoginContainer>
);

export default Login;
