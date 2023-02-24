import { SlackFunction } from "deno-slack-sdk/mod.ts";
import { ReverseFunction5 } from "../manifest.ts";

export default SlackFunction(ReverseFunction5, ({ inputs, env }) => {
  console.log(`reversing ${inputs.stringToReverse5}.`);
  console.log(`SLACK_API_URL=${env["SLACK_API_URL"]}`);

  const reverseString = inputs.stringToReverse5.split("").reverse().join("");
  return {
    outputs: { reverseString },
  };
});
