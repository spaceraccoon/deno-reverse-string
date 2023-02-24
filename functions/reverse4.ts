import { SlackFunction } from "deno-slack-sdk/mod.ts";
import { ReverseFunction4 } from "../manifest.ts";

export default SlackFunction(ReverseFunction4, ({ inputs, env }) => {
  console.log(`reversing ${inputs.stringToReverse4}.`);
  console.log(`SLACK_API_URL=${env["SLACK_API_URL"]}`);

  const reverseString = inputs.stringToReverse4.split("").reverse().join("");
  return {
    outputs: { reverseString },
  };
});
