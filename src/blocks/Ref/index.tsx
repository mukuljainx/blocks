// import * as React from 'react';

// interface RefProps {
//   as?: keyof JSX.IntrinsicElements;
//   children?: React.ReactNode;
//   style?: React.CSSProperties;
//   className?: string;
// }

// const Ref = React.forwardRef<HTMLElement, RefProps>(
//   ({ children, as, ...rest }, ref) => {
//     return React.createElement(as || 'span', { ref, ...rest }, children);
//   }
// );

// export default Ref;

import * as React from 'react';

interface RefProps {
  children?: React.ReactNode;
  refPasser?: React.Ref<HTMLElement>;
}

const Ref = ({ refPasser, children }: RefProps) => {
  console.log(22, refPasser);
  return React.cloneElement(children as React.ReactElement, { ref: refPasser });
};

export default Ref;
