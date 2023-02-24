import { SlackFunction } from "deno-slack-sdk/mod.ts";
import { ReverseFunction1 } from "../manifest.ts";

export default SlackFunction(ReverseFunction1, ({ inputs, env }) => {
  console.log(`reversing ${inputs.stringToReverse1}.`);
  console.log(`SLACK_API_URL=${env["SLACK_API_URL"]}`);

  const reverseString = inputs.stringToReverse1.split("").reverse().join("");
  return {
    outputs: { reverseString },
  };
});
