import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Wrapper from "@/components/layout/Wrapper";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Wrapper>
        <div className="p-5">
          <h1 className="text-2xl font-bold">Home</h1>
          <p className="mt-2">Lorem ipsum dolor sit amet consect</p>
          <Link to="/docs" className="text-blue-600">
            Docs
          </Link>
        </div>
      </Wrapper>
    </>
  );
}
