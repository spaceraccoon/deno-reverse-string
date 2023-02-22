import {
  DefineDatastore,
  DefineFunction,
  DefineWorkflow,
  Manifest,
  Schema,
} from "deno-slack-sdk/mod.ts";

export const ReverseFunction = DefineFunction({
  callback_id: "reverse",
  title: "Reverse",
  description: "Takes a string and reverses it",
  source_file: "functions/reverse.ts",
  input_parameters: {
    properties: {
      stringToReverse: {
        type: Schema.types.string,
        description: "The string to reverse",
      },
    },
    required: ["stringToReverse"],
  },
  output_parameters: {
    properties: {
      reverseString: {
        type: Schema.types.string,
        description: "The string in reverse",
      },
    },
    required: ["reverseString"],
  },
});

export const TestReverseWorkflow = DefineWorkflow({
  callback_id: "test_reverse",
  title: "Test Reverse Function",
  description: "test the reverse function",
  input_parameters: {
    properties: {
      channel: {
        type: Schema.slack.types.channel_id,
      },
    },
    required: [],
  },
});

const reverseStep = TestReverseWorkflow.addStep(ReverseFunction, {
  stringToReverse: "string-load-test",
});

TestReverseWorkflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: TestReverseWorkflow.inputs.channel,
  message: reverseStep.outputs.reverseString,
});

const DenoTableDatastore = DefineDatastore({
  name: "dinos",
  primary_key: "id",
  attributes: {
    id: {
      type: Schema.types.string,
    },
    original_name: {
      type: Schema.types.string,
    },
    dino_name: {
      type: Schema.types.string,
    },
    user_id: {
      type: Schema.types.string,
    },
  },
});

export default Manifest({
  name: "reverse",
  description: "Reverse a string",
  icon: "assets/default_new_app_icon.png",
  workflows: [TestReverseWorkflow],
  datastores: [DenoTableDatastore],
  outgoingDomains: [],
  botScopes: ["commands", "chat:write", "chat:write.public", "reactions:read"],
});
