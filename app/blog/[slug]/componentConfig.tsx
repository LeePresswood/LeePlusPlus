/**
 * Object that regulates the components' behavior when rendering MDX content.
 * This handles the standardized styling of the generated HTML. For example,
 * the "#" character in markdown is translated to an <h1> tag in HTML. This
 * object is used to customize the appearance of the corresponding <h1> tag.
 * 
 * By default, the object is a key-value pair where the key is the HTML tag
 * and the value is a function that takes properties of the tag:
 * h1: (props: any) => <h1 {...props}>{props.children}</h1>
 * 
 * For the h1 example above, you can customize via either className (Tailwind)
 * or via direct styling. Here's a sample:
 *  <h1 {...props} className="blue" style={{ fontSize: "100px" }}>
        {props.children}
    </h1>
 */
export default {};
