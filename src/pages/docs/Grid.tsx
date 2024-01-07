import Code from "@/components/ui/Code";
import DocBluePrint from "@/components/layout/DocBlueprint";
import Grid from "@/components/ui/Grid";
import Heading from "@/components/ui/Heading";
import { Helmet } from "react-helmet";
import hljs from "highlight.js";
import { name } from "../../../package.json";

const codeHighlightGrid = hljs.highlight(
  `import Grid from "@/components/ui/Grid";

<Grid className="md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-12 gap-2 w-full">
  {Array.from(Array(12).keys()).map((_, index) => (
    <Grid.Column
      key={index}
      className="bg-black/20 p-5 rounded-lg border"
    >
      {index + 1}
    </Grid.Column>
  ))}
</Grid>
`,
  { language: "tsx" }
).value;

export default function GridPage() {
  return (
    <>
      <Helmet>
        <title>Grid - {name}</title>
      </Helmet>
      <DocBluePrint>
        <Heading level={4} className="tracking-tigh">
          Grid
        </Heading>
        <p>
          The grid system is based on tailwindcss grid system. You can read the
          documentation{" "}
          <a
            href="https://tailwindcss.com/docs/grid-template-columns"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:underline"
          >
            here
          </a>
        </p>
        <h5 className="mt-4">Example</h5>
        <Grid className="md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-12 gap-2 w-full">
          {Array.from(Array(12).keys()).map((_, index) => (
            <Grid.Column
              key={index}
              className="bg-black/20 p-5 rounded-lg border"
            >
              {index + 1}
            </Grid.Column>
          ))}
        </Grid>
        <div className="my-4 rounded-lg shadow-xl">
          <Code code={codeHighlightGrid} className="rounded-lg" />
        </div>
        <div className="h-[4000px]"></div>
      </DocBluePrint>
    </>
  );
}
