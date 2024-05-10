import MdxLayout from "./mdx-layout";
export { MdxLayout };
//sending layout alone

//import custom components

import { CustomA } from "./mdx-components/custom-a";
import CustomCode from "./mdx-components/custom-code";
import { Separator } from "../ui/separator";

const MDXComponents = {
  // specifying the custom MDX components
  a: CustomA,
  code: CustomCode,
  Separator,
};

export default MDXComponents;
