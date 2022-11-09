import { CardProps } from '../types/card';
import './card.component.scss';

const Card = (props: CardProps) => {
  return <div className={`card ${props.className}`}>{props.children}</div>;
};

export default Card;
