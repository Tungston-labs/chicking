import {
  FaChartLine,
  FaHandshake,
  FaMapMarkerAlt,
  FaStore,
} from "react-icons/fa";
import { Card, Icon, Image, Text, Title } from "./ReasonCard.styles.js";

const icons = {
  chart: <FaChartLine aria-hidden="true" />,
  handshake: <FaHandshake aria-hidden="true" />,
  map: <FaMapMarkerAlt aria-hidden="true" />,
  store: <FaStore aria-hidden="true" />,
};

const ReasonCard = ({ icon, image, text, title }) => (
  <Card>
    <div>
      <Icon>{icons[icon]}</Icon>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </div>
    <Image src={image} alt="" />
  </Card>
);

export default ReasonCard;
