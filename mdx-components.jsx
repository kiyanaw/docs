import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
 
const MDXComponents = getDocsMDXComponents({
  // Add any custom MDX components here
})
 
export function useMDXComponents(components) {
  return {
    ...MDXComponents,
    ...components,
  }
}
