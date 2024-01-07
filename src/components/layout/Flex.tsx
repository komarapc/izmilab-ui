import { ReactNode } from "react";

type Props = {
  className?: string;
  children?: ReactNode;
  direction: "row" | "col";
  gap: number;
};

const Flex = (props: Props) => {
  const { direction, gap, children } = props;
  const flexDirection = direction === "row" ? "flex-row" : "flex-col";
  return (
    <>
      <div
        className={`flex ${flexDirection} ${props.className}`}
        style={{ gap: `${gap * 0.25}rem` }}
      >
        {children}
      </div>
    </>
  );
};

export default Flex;
