import Container from "./Container";
import Flex from "./Flex";
import MenuSidebarDocs from "../docs/MenuSidebarDocs";
import NavbarApp from "../compose/NavbarApp";
import { ReactNode } from "react";
import Wrapper from "./Wrapper";

const DocBluePrint = ({ children }: { children?: ReactNode }) => {
  return (
    <Wrapper>
      <NavbarApp />
      <Container className="max-w-8xl px-5">
        <Flex direction="row" gap={2} className="mt-4">
          <MenuSidebarDocs />
          <div className="w-full">{children}</div>
        </Flex>
      </Container>
    </Wrapper>
  );
};

export default DocBluePrint;
