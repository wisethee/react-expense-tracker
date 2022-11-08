import { CardProps } from '../types/card';
import './card.component.scss';

const Card = (props: CardProps) => {
  // console.log(props.children);

  return <div className="card">{props.children}</div>;
};

export default Card;
