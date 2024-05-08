import MdxLayout from "./mdx-layout";
export { MdxLayout };
//sending layout alone

//import custom components
import H1 from "./mdx-components/h1-custom";
import H2 from "./mdx-components/h2-custom";
import H3 from "./mdx-components/h3-custom";
import H4 from "./mdx-components/h4-custom";
import P from "./mdx-components/p-custom";
import Strong from "./mdx-components/strong-custom";
import { A } from "./mdx-components/a-custom";

const MDXComponents = {
  // specifying the custom MDX components
  a: A,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: P,
  strong: Strong,
};

export default MDXComponents;
