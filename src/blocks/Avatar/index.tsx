import styled from "styled-components";

// todo: uI

export interface AvatarProps extends React.ComponentPropsWithRef<"div"> {
  src?: string;
  size?: string;
}

const Avatar = styled.div<AvatarProps>`
  margin: 0;
`;

export default Avatar;
