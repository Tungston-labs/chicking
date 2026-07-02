import { Card, Image, ImageStage, Text, Title } from "./ReasonCard.styles.js";

const ReasonCard = ({ image, text, title }) => (
  <Card>
    <div>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </div>
    <ImageStage>
      <Image src={image} alt={title || ""} aria-hidden={title ? undefined : "true"} />
    </ImageStage>
  </Card>
);

export default ReasonCard;
