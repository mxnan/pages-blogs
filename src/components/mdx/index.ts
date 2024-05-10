import MdxLayout from "./mdx-layout";
export { MdxLayout };
//sending layout alone

//import custom components

import { A } from "./mdx-components/a-custom";
import { Separator } from "../ui/separator";

const MDXComponents = {
  // specifying the custom MDX components
  a: A,
  Separator,
};

export default MDXComponents;
