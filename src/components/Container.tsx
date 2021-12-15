import { CssProps } from "../types/common.types";

type ContainerProps = {
  style: CssProps;
  text: string;
};

const Container = (props: ContainerProps) => {
  return <div style={props.style}>{props.text}</div>;
};

export default Container;
