import Heading from "@/components/ui/Heading";
import { Helmet } from "react-helmet";
import { lazy } from "react";

const DocBluePrint = lazy(() => import("@/components/layout/DocBlueprint"));

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
