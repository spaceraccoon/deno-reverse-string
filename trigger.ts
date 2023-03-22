import { Trigger } from "deno-slack-api/types.ts";
import { TestReverseWorkflow } from "./manifest.ts";

const trigger: Trigger<typeof TestReverseWorkflow.definition> = {
  type: "event",
  name: "Reactji response",
  description: "responds to a specific reactji",
  workflow: "#/workflows/test_reverse",
  event: {
    event_type: "slack#/events/reaction_added",
    channel_ids: ["C04L4HMKSHZ"], //loadtest team T04KY22TF8W channel
    filter: {
      version: 1,
      root: {
        statement: "{{data.reaction}} == eyes",
      },
    },
  },
  inputs: {
    channel: {
      value: "{{data.channel_id}}", //loadtest team T04KY22TF8W channel
    },
  },
};

export default trigger;
