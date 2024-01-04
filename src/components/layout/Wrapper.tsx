import BackgroundImg from "@/assets/bg.avif";
import { HTMLAttributes } from "react";
import { selectDarkMode } from "@/redux/reducer/themeReducer";
import { useSelector } from "react-redux";

export default function Wrapper({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  const darkMode = useSelector(selectDarkMode);
  return (
    <div
      {...rest}
      className={`w-full min-h-screen font-inter ${
        darkMode ? "bg-dark text-gray-300" : "bg-gray-100 text-gray-700"
      } ${className}`}
      style={{
        backgroundImage: `url(${BackgroundImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        backgroundAttachment: "fixed",
      }}
    >
      {children}
    </div>
  );
}
