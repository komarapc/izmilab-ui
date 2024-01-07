import DocBluePrint from "@/components/layout/DocBlueprint";
import { Helmet } from "react-helmet";

export default function Introduction() {
  return (
    <>
      <Helmet>
        <title>Introduction</title>
      </Helmet>
      <DocBluePrint>
        <h1>Introduction</h1>
        <p>
          React Typescript Tailwind Starter is a boilerplate for React
          Typescript Tailwind project.
        </p>
        <p>It is built with:</p>
        <ul>
          <li>React</li>
          <li>Typescript</li>
          <li>Tailwind CSS</li>
          <li>Redux</li>
          <li>React Router</li>
          <li>React Helmet</li>
        </ul>
      </DocBluePrint>
    </>
  );
}
