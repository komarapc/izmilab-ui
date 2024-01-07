import { APP_NAME } from "@/config/app";
import Code from "@/components/ui/Code";
import DocBluePrint from "@/components/layout/DocBlueprint";
import Flex from "@/components/layout/Flex";
import Heading from "@/components/ui/Heading";
import { Helmet } from "react-helmet";
import hljs from "highlight.js";

const codeHighlightFlex = hljs.highlight(
  `import Flex from "@/components/layout/Flex";
  
<Flex direction="row" gap={2}>
  <div className="bg-black/20 p-5 rounded-lg border">1</div>
  <div className="bg-black/20 p-5 rounded-lg border">2</div>
  <div className="bg-black/20 p-5 rounded-lg border">3</div>
  <div className="bg-black/20 p-5 rounded-lg border">4</div>
</Flex>

<Flex direction="row" gap={2}>
  <div className="bg-black/20 p-5 rounded-lg border">1</div>
  <div className="bg-black/20 p-5 rounded-lg border">2</div>
  <div className="bg-black/20 p-5 rounded-lg border">3</div>
  <div className="bg-black/20 p-5 rounded-lg border">4</div>
</Flex>`,
  { language: "tsx" }
).value;

export default function FlexPage() {
  return (
    <>
      <Helmet>
        <title>Flex - {APP_NAME}</title>
      </Helmet>
      <DocBluePrint>
        <Heading level={4} className="tracking-tigh">
          Flex
        </Heading>
        <p>
          The flex system is based on tailwindcss flex system. You can read the
          documentation{" "}
          <a
            href="https://tailwindcss.com/docs/flex-direction"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:underline"
          >
            here
          </a>
        </p>
        <Heading level={6} className="mt-4">
          Example
        </Heading>
        <div className="my-4">
          <Flex direction="row" gap={2} className="mb-4">
            <div className="bg-black/20 p-5 rounded-lg border">1</div>
            <div className="bg-black/20 p-5 rounded-lg border">2</div>
            <div className="bg-black/20 p-5 rounded-lg border">3</div>
            <div className="bg-black/20 p-5 rounded-lg border">4</div>
          </Flex>
          <Flex direction="col" gap={2} className="mb-4">
            <div className="bg-black/20 p-5 rounded-lg border">1</div>
            <div className="bg-black/20 p-5 rounded-lg border">2</div>
            <div className="bg-black/20 p-5 rounded-lg border">3</div>
            <div className="bg-black/20 p-5 rounded-lg border">4</div>
          </Flex>
        </div>
        <div className="my-4 rounded-lg shadow-xl">
          <Code code={codeHighlightFlex} className="rounded-lg" />
        </div>
      </DocBluePrint>
    </>
  );
}
