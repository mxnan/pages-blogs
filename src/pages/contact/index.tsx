import { Container, FormSection } from "@/components";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link2Icon } from "lucide-react";
import React from "react";

const Contactpage = () => {
  return (
    <Container title="Contact" description="Send me a message">
      <div className="h-[70vh] max-w-5xl lg:max-w-7xl mx-auto w-full">
        <div className="flex-1 flex flex-col max-lg:items-center lg:flex-row lg:mt-24">
          {/* text area  */}
          <div className="space-y-8 max-w-xl w-full ">
            <h1 className="md:text-5xl xl:text-6xl text-3xl font-title">
              Emailjs Implementation
            </h1>
            <p className="text-sm font-light">
              Simple template to use emailjs with nextjs and tsx. You will have
              to configure your template style by logging in emailjs website .
            </p>
            <Button variant={"link"} className="flex gap-2 border">
              Read Blog to implement this .? <Link2Icon />
            </Button>
          </div>

          <Separator
            orientation="vertical"
            className="hidden lg:block mx-6 h-96"
          />
          <Separator
            orientation="horizontal"
            className="lg:hidden max-w-xl my-8"
          />

            {/* form section  */}
          <div className="max-w-2xl max-lg:max-w-xl w-full lg:px-2">
            <FormSection />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contactpage;
