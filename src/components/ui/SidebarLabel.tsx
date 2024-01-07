import { ReactNode } from "react";
import { selectDarkMode } from "@/redux/reducer/themeReducer";
import { useSelector } from "react-redux";

const SidebarLabel = ({ children }: { children: ReactNode }) => {
  const darkMode = useSelector(selectDarkMode);
  return (
    <span className={`${darkMode && "text-gray-200"} font-bold `}>
      {children}
    </span>
  );
};

export default SidebarLabel;
