import { visit } from "unist-util-visit";

/**
 * Remark plugin to convert container directives (:::type) to Message components
 *
 * Example:
 * :::info
 * This is an info message
 * :::
 *
 * Becomes:
 * <message type="info">This is an info message</message>
 */
export function remarkMessage() {
  return (tree) => {
    visit(tree, (node) => {
      // Check if this is a container directive (:::)
      if (node.type === "containerDirective") {
        const name = node.name;

        // Valid message types
        const validTypes = ["note", "tip", "info", "warning", "critical"];

        // Only process if the directive name matches a valid message type
        if (validTypes.includes(name)) {
          const data = node.data || (node.data = {});

          // Use hName to convert to HTML-like element
          // This will be picked up by the components mapping
          data.hName = "message";
          data.hProperties = {
            type: name,
          };
        }
      }
    });
  };
}

export default remarkMessage;
