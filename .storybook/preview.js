import { addDecorator, addParameters } from "@storybook/html";
import Centered from "@storybook/addon-centered";
import { withA11y } from "@storybook/addon-a11y";

// addDecorator(Centered);
addDecorator(withA11y);
addParameters({
  options: {
    enableShortcuts: false,
  },
  backgrounds: [
    { name: "white", value: "#ffffff", default: true },
    { name: "dark", value: "#000000" },
    { name: "blue", value: "#00AFEF" },
  ],
});
