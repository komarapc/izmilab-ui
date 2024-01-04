import { HTMLAttributes } from "react";

const Container = ({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...rest} className={`container mx-auto ${className}`}>
      {children}
    </div>
  );
};
export default Container;
