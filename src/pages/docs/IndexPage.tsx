import DocBluePrint from "@/components/layout/DocBlueprint";
import Heading from "@/components/ui/Heading";
import { Helmet } from "react-helmet";

export default function Docs() {
  return (
    <>
      <Helmet>
        <title>Docs</title>
      </Helmet>
      <DocBluePrint>
        <Heading level={6}>Docs</Heading>
      </DocBluePrint>
    </>
  );
}
