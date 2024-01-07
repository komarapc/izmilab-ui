import DocBluePrint from "@/components/layout/DocBlueprint";
import Heading from "@/components/ui/Heading";
import HelmetExport from "react-helmet";

export default function ParagraphPage() {
  return (
    <>
      <HelmetExport>
        <title>Paragraph</title>
      </HelmetExport>
      <DocBluePrint>
        <Heading level={4}>Paragraph</Heading>
      </DocBluePrint>
    </>
  );
}
