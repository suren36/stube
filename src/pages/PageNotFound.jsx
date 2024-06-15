import React, { Children } from "react";
import NotFound from "../assets/images/404.jpg";
import { Link } from "react-router-dom";
import { Button } from "../components";

export const PageNotFound = () => {
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="">404, Opps!</p>
          <div className="page_image max-w-lg ">
            <img className="rounded" src={NotFound} alt="404" />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <Button>Back To Stube</Button>
          </Link>
        </div>
      </section>
    </main>
  );
};
