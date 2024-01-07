import {
  formComponents,
  menuComponents,
  menuLayout,
  menuTypography,
} from "@/data/docs-menu.json";

import Flex from "../layout/Flex";
import { Link } from "react-router-dom";
import SidebarLabel from "../ui/SidebarLabel";

const MenuSidebarDocs = () => {
  return (
    <>
      <Flex direction="col" gap={4} className="w-96 hidden lg:flex">
        <Flex direction="col" gap={2} className="mb-4">
          <SidebarLabel>Getting Started</SidebarLabel>
          <Flex direction="col" gap={2}>
            <Link to={"/docs/introduction"} className="pl-4">
              Introduction
            </Link>
          </Flex>
        </Flex>
        <Flex direction="col" gap={2} className="mb-4">
          <SidebarLabel>Layout</SidebarLabel>
          <Flex direction="col" gap={2}>
            {menuLayout
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((item, index) => (
                <Link to={item.path} className="pl-4" key={index}>
                  {item.name}
                </Link>
              ))}
          </Flex>
        </Flex>
        <Flex direction="col" gap={2} className="mb-4">
          <SidebarLabel>Typography</SidebarLabel>
          <Flex direction="col" gap={2}>
            {menuTypography
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((item, index) => (
                <Link to={item.path} className="pl-4" key={index}>
                  {item.name}
                </Link>
              ))}
          </Flex>
        </Flex>
        <Flex direction="col" gap={2} className="mb-4">
          <SidebarLabel>Component</SidebarLabel>
          <Flex direction="col" gap={2}>
            {menuComponents
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((item, index) => {
                return (
                  <Link to={item.path} className="pl-4" key={index}>
                    {item.name}
                  </Link>
                );
              })}
          </Flex>
        </Flex>
        <Flex direction="col" gap={2} className="mb-4">
          <SidebarLabel>Forms</SidebarLabel>
          <Flex direction="col" gap={2}>
            {formComponents
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((item, index) => {
                return (
                  <Link to={item.path} className="pl-4" key={index}>
                    {item.name}
                  </Link>
                );
              })}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
export default MenuSidebarDocs;
