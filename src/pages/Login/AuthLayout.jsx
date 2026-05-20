import loginImages from "../../assets/images/loginImages";
import {
  AuthLeftPanel,
  AuthPage,
  AuthRightPanel,
  CenterBadge,
  CenterLogo,
  DottedCircle,
  FoodItem,
  LeftPanelInner,
  LockArtwork,
  Orbit,
  TopLogo,
} from "./style";

const foodItems = [
  { alt: "Burger", key: "burger" },
  { alt: "Fries", key: "fries1" },
  { alt: "Fries", key: "fries2" },
  { alt: "Chicken", key: "chicken" },
];

const LoginArtwork = () => (
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
);

const LockPanel = () => <LockArtwork src={loginImages.forgot} alt="Password recovery illustration" />;

const AuthLayout = ({ children, leftVariant = "login" }) => (
  <AuthPage>
    <AuthLeftPanel>{leftVariant === "lock" ? <LockPanel /> : <LoginArtwork />}</AuthLeftPanel>
    <AuthRightPanel>{children}</AuthRightPanel>
  </AuthPage>
);

export default AuthLayout;
