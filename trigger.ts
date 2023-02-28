import { Trigger } from "deno-slack-api/types.ts";
import { TestReverseWorkflow } from "./manifest.ts";

const trigger: Trigger<typeof TestReverseWorkflow.definition> = {
  type: "shortcut",
  name: "Load test reverse string multi-step workflow",
  description: "Starts the workflow to test reversing a string",
  workflow: "#/workflows/test_reverse",
  inputs: {
    channel: {
      value: "{{data.channel_id}}",
    },
  },
};

export default trigger;
