import MdxLayout from "./mdx-layout";
export { MdxLayout };
//sending layout alone

//import custom components

import { CustomA } from "./mdx-components/custom-a";

import { Separator } from "../ui/separator";

const MDXComponents = {
  // specifying the custom MDX components
  a: CustomA,
  Separator,
};

export default MDXComponents;
