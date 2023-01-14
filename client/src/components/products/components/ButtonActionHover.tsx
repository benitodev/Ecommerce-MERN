import { Circle } from '../styled-components/product';

interface Props {
  children: JSX.Element;
}

const ButtonActionsHover = ({ children }: Props) => {
  return <Circle>{children}</Circle>;
};
export default ButtonActionsHover;
