import { useEffect, useState } from "react";

import Container from "../layout/Container";
import { FiSun } from "react-icons/fi";
import Flex from "../layout/Flex";
import Navbar from "../ui/Navbar";
import { app_name } from "@/data/site.json";
import { toggleDarkMode } from "@/redux/reducer/themeReducer";
import { useDispatch } from "react-redux";

const NavbarApp = () => {
  const dispatch = useDispatch();
  const [scrollY, setScrollY] = useState(0);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    scrollY > 100 ? setSticky(true) : setSticky(false);
  }, [scrollY]);

  return (
    <>
      <Navbar className={`${sticky && "fixed"} backdrop-blur-md`}>
        <Container className="flex items-center justify-between">
          <Navbar.Brand>
            <span className="text-2xl font-bold text-green-600">
              {app_name.split(" ")[0]}
            </span>
            <span>{app_name.split(" ")[1]}</span>
          </Navbar.Brand>
          <Flex gap={2}>
            <button onClick={() => dispatch(toggleDarkMode())}>
              <FiSun size={20} />
            </button>
          </Flex>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarApp;
