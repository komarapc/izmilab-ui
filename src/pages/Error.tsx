import { Helmet } from "react-helmet";
import Wrapper from "@/components/layout/Wrapper";

export default function ErrorPage() {
  return (
    <>
      <Helmet>
        <title>Oops, Something Went Wrong</title>
        <Wrapper>
          <div className="p-5">
            <h1 className="text-2xl font-bold">Oops, Something Went Wrong</h1>
            <p className="mt-2">Lorem ipsum dolor sit amet consect</p>
          </div>
        </Wrapper>
      </Helmet>
    </>
  );
}
