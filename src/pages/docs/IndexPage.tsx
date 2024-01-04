import { Helmet } from "react-helmet";
import NavbarApp from "@/components/compose/NavbarApp";
import Wrapper from "@/components/layout/Wrapper";

export default function Docs() {
  return (
    <>
      <Helmet>
        <title>Docs</title>
      </Helmet>
      <Wrapper>
        <NavbarApp />
      </Wrapper>
    </>
  );
}
