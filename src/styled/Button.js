import styled from "styled-components";
import { Button as ButtonB } from "reactstrap";
import { lighten } from "polished";

const Button = styled(ButtonB)`
  background: ${props => (props.color ? props.color : "white")};
  color: ${props => (props.color ? props.color : "palevioletred")};
  font-size: 1.5em;
  border: 2px solid palevioletred;

  &:hover {
    background: ${lighten(0.1, "palevioletred")};
    border: 2px solid ${lighten(0.1, "palevioletred")};
  }
`;

export { Button };
