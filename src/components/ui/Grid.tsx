import { HTMLAttributes } from "react";

const Grid = ({
  className = "",
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...rest} className={`grid ${className}`}>
      {children}
    </div>
  );
};

const GridColumn = ({
  className = "",
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...rest} className={`w-full ${className}`}>
      {children}
    </div>
  );
};

Grid.Column = GridColumn;

export default Grid;
