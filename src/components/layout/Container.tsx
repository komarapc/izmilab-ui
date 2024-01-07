import { HTMLAttributes } from "react";

const Container = ({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...rest} className={`container mx-auto ${className} px-5`}>
      {children}
    </div>
  );
};
export default Container;
