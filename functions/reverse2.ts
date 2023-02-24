import { SlackFunction } from "deno-slack-sdk/mod.ts";
import { ReverseFunction2 } from "../manifest.ts";

export default SlackFunction(ReverseFunction2, ({ inputs, env }) => {
  console.log(`reversing ${inputs.stringToReverse2}.`);
  console.log(`SLACK_API_URL=${env["SLACK_API_URL"]}`);

  const reverseString = inputs.stringToReverse2.split("").reverse().join("");
  return {
    outputs: { reverseString },
  };
});
