import Code from "@/components/ui/Code";
import DocBluePrint from "@/components/layout/DocBlueprint";
import Flex from "@/components/layout/Flex";
import Heading from "@/components/ui/Heading";
import { Helmet } from "react-helmet";
import Table from "@/components/ui/Table";
import hljs from "highlight.js";
import { selectDarkMode } from "@/redux/reducer/themeReducer";
import { useSelector } from "react-redux";

const codeHighlightHeading = hljs.highlight(
  `import Flex from "@/components/layout/Flex";
import Heading from "@/components/ui/Heading";

<Flex direction="col" gap={2} className="my-4">
  <Heading level={1} className="">Heading 1</Heading>
  <Heading level={2} className="">Heading 2</Heading>
  <Heading level={3} className="">Heading 3</Heading>
  <Heading level={4} className="">Heading 4</Heading>
  <Heading level={5} className="">Heading 5</Heading>
  <Heading level={6} className="">Heading 6</Heading>
</Flex>`,
  { language: "tsx" }
).value;

export default function HeadingPage() {
  const darkMode = useSelector(selectDarkMode);
  return (
    <>
      <Helmet>
        <title>Heading | Docs</title>
        <meta name="description" content="Heading" />
      </Helmet>
      <DocBluePrint>
        <Heading level={4}>Heading</Heading>
        <p>
          The heading system is based on tailwindcss heading system. You can
          read the documentation{" "}
          <a
            href="https://tailwindcss.com/docs/font-size"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:underline"
          >
            here
          </a>
        </p>
        <Flex direction="col" gap={2} className="my-4">
          <Heading level={1}>Heading 1</Heading>
          <Heading level={2}>Heading 2</Heading>
          <Heading level={3}>Heading 3</Heading>
          <Heading level={4}>Heading 4</Heading>
          <Heading level={5}>Heading 5</Heading>
          <Heading level={6}>Heading 6</Heading>
        </Flex>
        <Flex direction="col" gap={0} className="my-4">
          <Heading level={6}>Code</Heading>
          <Code code={codeHighlightHeading} className="rounded-lg mb-4" />
        </Flex>
        <div className="my-4 rounded-lg">
          <Table
            bordered={true}
            borderStyle="border-collapse"
            className="w-full"
            rounded={10}
          >
            <Table.Head
              bordered
              className={darkMode ? "bg-dark" : "bg-gray-200"}
            >
              <Table.Row>
                <Table.HeadCell bordered>Prop</Table.HeadCell>
                <Table.HeadCell bordered>Type</Table.HeadCell>
                <Table.HeadCell bordered>Description</Table.HeadCell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              <Table.Row>
                <Table.Cell bordered>level</Table.Cell>
                <Table.Cell bordered>number</Table.Cell>
                <Table.Cell bordered>Heading level</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell bordered>className</Table.Cell>
                <Table.Cell bordered>string</Table.Cell>
                <Table.Cell bordered>Custom class name</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </DocBluePrint>
    </>
  );
}
