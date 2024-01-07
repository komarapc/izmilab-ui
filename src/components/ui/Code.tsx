import "@/assets/css/atom-one-dark.min.css";

const Code = ({
  code = "",
  className = "",
}: {
  code: string;
  className?: string;
}) => {
  return (
    <pre>
      <code
        className={`${className} hljs shadow-lg`}
        dangerouslySetInnerHTML={{ __html: code }}
        style={{
          backgroundColor: "#0f131a",
          padding: "1.5rem",
        }}
      ></code>
    </pre>
  );
};

export default Code;
