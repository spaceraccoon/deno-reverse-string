import { SlackFunction } from "deno-slack-sdk/mod.ts";
import { ReverseFunction6 } from "../manifest.ts";

export default SlackFunction(ReverseFunction6, ({ inputs, env }) => {
  console.log(`reversing ${inputs.stringToReverse}.`);
  console.log(`SLACK_API_URL=${env["SLACK_API_URL"]}`);

  const reverseString = inputs.stringToReverse.split("").reverse().join("");
  return {
    outputs: { reverseString },
  };
});
