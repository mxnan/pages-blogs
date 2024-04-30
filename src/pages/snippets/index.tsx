import Container from "@/components/container/container";
import React from "react";

const Snippetspage = () => {
  return (
    <Container
      title="Snippets"
      description="Code snippets for display , edit and share"
    >
      <div className="max-w-5xl mx-auto w-full h-screen space-y-4 p-2 ">
        <h1 className="text-3xl mb-10">Code Snippets</h1>
        <p>Sharing code snippets which you can use in your projects.</p>
        <p> Some i have created, and some i have copied and improvised</p>
        <div className="w-full max-w-4xl mx-auto">
         
        </div>
      </div>
    </Container>
  );
};

export default Snippetspage;
