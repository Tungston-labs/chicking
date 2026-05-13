
import { Card,  Image, Text, Title } from "./ReasonCard.styles.js";



const ReasonCard = ({ image, text, title }) => (
  <Card>
    <div>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </div>
    <Image src={image} alt="" />
  </Card>
);

export default ReasonCard;
