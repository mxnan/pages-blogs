import { Container, ResourceCard } from "@/components";
import { Separator } from "@/components/ui/separator";
import { userInterfaceResourceLinks, utilityResourceLinks } from "@/lib/links";
import React from "react";

const Resourcespage = () => {
  return (
    <Container title="Resources" description="Resources I used, visit and use">
      <div className="relative min-h-screen max-w-4xl mx-auto w-full">
        <h1 className="text-7xl max-md:text-5xl max-sm:text-3xl mb-6 font-bold font-title uppercase">
          Resources
        </h1>
        <p className="text-lg font-light">
          Here are some of the resources I used to{" "}
          <span className="px-2 rounded-lg border shadow-violet-500 dark:shadow-amber-800 font-bold w-max">
            build
          </span>{" "}
          this website and more.
        </p>
      
        <> {/* Utilities section */}
        <Separator className="my-8 max-w-3xl" />
        <div className="space-y-2 max-w-3xl mx-auto">
          <p
            className="text-3xl font-semibold
          font-title max-md:text-center uppercase
          "
          >
            Utilities
          </p>
          <div className="py-8 mx-auto w-full flexcenter">
            <div
              className="flex-1 grid grid-cols-1
           md:grid-cols-2 
           justify-items-center gap-x-5 gap-y-5"
            >
              {utilityResourceLinks.map((link) => (
                <ResourceCard
                  key={link.title}
                  title={link.title}
                  description={link.description}
                  websiteLink={link.websiteLink}
                  link={link.link}
                />
              ))}
            </div>
          </div>
        </div>
        </>

        <> {/* User Interface section */}
        <Separator className="my-8 max-w-3xl" />
        <div className="space-y-2 max-w-3xl mx-auto">
          <p
            className="text-3xl font-semibold
          font-title max-md:text-center uppercase
          "
          >
            User Interface
          </p>
          <div className="py-8 mx-auto w-full flexcenter">
            <div
              className="flex-1 grid grid-cols-1
           md:grid-cols-2 
           justify-items-center gap-x-5 gap-y-5"
            >
              {userInterfaceResourceLinks.map((link) => (
                <ResourceCard
                  key={link.title}
                  title={link.title}
                  description={link.description}
                  websiteLink={link.websiteLink}
                  link={link.link}
                />
              ))}
            </div>
          </div>
        </div>
        </>


        {/* main div end */}
      </div>
    </Container>
  );
};

export default Resourcespage;
