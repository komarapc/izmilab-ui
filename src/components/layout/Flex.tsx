import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  wrap?: boolean;
  gap?: number;
  direction?: "row" | "col";
  align?: "start" | "end" | "center" | "stretch" | "baseline";
  justify?: "start" | "end" | "center" | "between" | "around" | "evenly";
}

const Flex = ({
  className,
  children,
  wrap,
  gap,
  direction,
  align,
  justify,
  ...rest
}: Props) => {
  return (
    <>
      <div
        {...rest}
        className={`flex ${wrap && "flex-wrap"} ${gap && `gap-${gap}`} ${
          direction && `flex-${direction}`
        } ${align && `items-${align}`} ${
          justify && `justify-${justify}`
        } ${className}`}
      >
        {children}
      </div>
    </>
  );
};

export default Flex;
