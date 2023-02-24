import { SlackFunction } from "deno-slack-sdk/mod.ts";
import { ReverseFunction3 } from "../manifest.ts";

export default SlackFunction(ReverseFunction3, ({ inputs, env }) => {
  console.log(`reversing ${inputs.stringToReverse3}.`);
  console.log(`SLACK_API_URL=${env["SLACK_API_URL"]}`);

  const reverseString = inputs.stringToReverse3.split("").reverse().join("");
  return {
    outputs: { reverseString },
  };
});
