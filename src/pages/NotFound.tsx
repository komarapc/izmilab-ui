import { Helmet } from "react-helmet";
import Wrapper from "@/components/layout/Wrapper";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <Wrapper>
        <div className="p-5">
          <h1 className="text-2xl font-bold">Not Found</h1>
          <p className="mt-2">Lorem ipsum dolor sit amet consect</p>
        </div>
      </Wrapper>
    </>
  );
}
