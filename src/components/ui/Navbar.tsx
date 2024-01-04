import { HTMLAttributes } from "react";

function Navbar({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <>
      <div
        {...rest}
        className={`w-full h-20 flex items-center px-5  ${className}`}
      >
        {children}
      </div>
    </>
  );
}
const NavBrand = ({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <>
      <div {...rest} className={`flex items-center ${className}`}>
        {children}
      </div>
    </>
  );
};
Navbar.Brand = NavBrand;
export default Navbar;
