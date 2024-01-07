import DocBluePrint from "@/components/layout/DocBlueprint";
import Heading from "@/components/ui/Heading";
import HelmetExport from "react-helmet";

export default function ParagraphPage() {
  return (
    <>
      <HelmetExport>
        <title>Paragraph</title>
        <meta name="description" content="Paragraph" />
        <meta property="og:title" content="Docs - Paragraph" />
        <meta
          property="og:description"
          content="Documentation Paragraph Izmilab-UI"
        />
      </HelmetExport>
      <DocBluePrint>
        <Heading level={4}>Paragraph</Heading>
      </DocBluePrint>
    </>
  );
}
