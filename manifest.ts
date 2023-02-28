import {
  DefineDatastore,
  DefineFunction,
  DefineWorkflow,
  Manifest,
  Schema,
} from "deno-slack-sdk/mod.ts";

export const ReverseFunction1 = DefineFunction({
  callback_id: "reverse1",
  title: "Reverse1",
  description: "Takes a string and reverses it",
  source_file: "functions/reverse1.ts",
  input_parameters: {
    properties: {
      stringToReverse1: {
        type: Schema.types.string,
        description: "The string to reverse 1",
      },
      stringToReverse2: {
        type: Schema.types.string,
        description: "The string to reverse 2",
      },
      stringToReverse3: {
        type: Schema.types.string,
        description: "The string to reverse 3",
      },
      stringToReverse4: {
        type: Schema.types.string,
        description: "The string to reverse 4",
      },
      stringToReverse5: {
        type: Schema.types.string,
        description: "The string to reverse 5",
      },
    },
    required: [
      "stringToReverse1",
      "stringToReverse2",
      "stringToReverse3",
      "stringToReverse4",
      "stringToReverse5",
    ],
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

export const ReverseFunction2 = DefineFunction({
  callback_id: "reverse2",
  title: "Reverse2",
  description: "Takes a string and reverses it",
  source_file: "functions/reverse2.ts",
  input_parameters: {
    properties: {
      stringToReverse1: {
        type: Schema.types.string,
        description: "The string to reverse 1",
      },
      stringToReverse2: {
        type: Schema.types.string,
        description: "The string to reverse 2",
      },
      stringToReverse3: {
        type: Schema.types.string,
        description: "The string to reverse 3",
      },
      stringToReverse4: {
        type: Schema.types.string,
        description: "The string to reverse 4",
      },
      stringToReverse5: {
        type: Schema.types.string,
        description: "The string to reverse 5",
      },
    },
    required: [
      "stringToReverse1",
      "stringToReverse2",
      "stringToReverse3",
      "stringToReverse4",
      "stringToReverse5",
    ],
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

export const ReverseFunction3 = DefineFunction({
  callback_id: "reverse3",
  title: "Reverse3",
  description: "Takes a string and reverses it",
  source_file: "functions/reverse3.ts",
  input_parameters: {
    properties: {
      stringToReverse1: {
        type: Schema.types.string,
        description: "The string to reverse 1",
      },
      stringToReverse2: {
        type: Schema.types.string,
        description: "The string to reverse 2",
      },
      stringToReverse3: {
        type: Schema.types.string,
        description: "The string to reverse 3",
      },
      stringToReverse4: {
        type: Schema.types.string,
        description: "The string to reverse 4",
      },
      stringToReverse5: {
        type: Schema.types.string,
        description: "The string to reverse 5",
      },
    },
    required: [
      "stringToReverse1",
      "stringToReverse2",
      "stringToReverse3",
      "stringToReverse4",
      "stringToReverse5",
    ],
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

export const ReverseFunction4 = DefineFunction({
  callback_id: "reverse4",
  title: "Reverse4",
  description: "Takes a string and reverses it",
  source_file: "functions/reverse4.ts",
  input_parameters: {
    properties: {
      stringToReverse1: {
        type: Schema.types.string,
        description: "The string to reverse 1",
      },
      stringToReverse2: {
        type: Schema.types.string,
        description: "The string to reverse 2",
      },
      stringToReverse3: {
        type: Schema.types.string,
        description: "The string to reverse 3",
      },
      stringToReverse4: {
        type: Schema.types.string,
        description: "The string to reverse 4",
      },
      stringToReverse5: {
        type: Schema.types.string,
        description: "The string to reverse 5",
      },
    },
    required: [
      "stringToReverse1",
      "stringToReverse2",
      "stringToReverse3",
      "stringToReverse4",
      "stringToReverse5",
    ],
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

export const ReverseFunction5 = DefineFunction({
  callback_id: "reverse5",
  title: "Reverse5",
  description: "Takes a string and reverses it",
  source_file: "functions/reverse5.ts",
  input_parameters: {
    properties: {
      stringToReverse1: {
        type: Schema.types.string,
        description: "The string to reverse 1",
      },
      stringToReverse2: {
        type: Schema.types.string,
        description: "The string to reverse 2",
      },
      stringToReverse3: {
        type: Schema.types.string,
        description: "The string to reverse 3",
      },
      stringToReverse4: {
        type: Schema.types.string,
        description: "The string to reverse 4",
      },
      stringToReverse5: {
        type: Schema.types.string,
        description: "The string to reverse 5",
      },
    },
    required: [
      "stringToReverse1",
      "stringToReverse2",
      "stringToReverse3",
      "stringToReverse4",
      "stringToReverse5",
    ],
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

export const ReverseFunction6 = DefineFunction({
  callback_id: "reverse6",
  title: "Reverse6",
  description: "Takes a string and reverses it",
  source_file: "functions/reverse6.ts",
  input_parameters: {
    properties: {
      stringToReverse: {
        type: Schema.types.string,
        description: "The string to reverse 1",
      },
    },
    required: [
      "stringToReverse",
    ],
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

const reverseStep1 = TestReverseWorkflow.addStep(ReverseFunction1, {
  stringToReverse1: "load-test-string1",
  stringToReverse2: "load-test-string1",
  stringToReverse3: "load-test-string1",
  stringToReverse4: "load-test-string1",
  stringToReverse5: "load-test-string1",
});

const reverseStep2 = TestReverseWorkflow.addStep(ReverseFunction2, {
  stringToReverse1: "load-test-string2",
  stringToReverse2: "load-test-string2",
  stringToReverse3: "load-test-string2",
  stringToReverse4: "load-test-string2",
  stringToReverse5: "load-test-string2",
});

const reverseStep3 = TestReverseWorkflow.addStep(ReverseFunction3, {
  stringToReverse1: "load-test-string3",
  stringToReverse2: "load-test-string3",
  stringToReverse3: "load-test-string3",
  stringToReverse4: "load-test-string3",
  stringToReverse5: "load-test-string3",
});

const reverseStep4 = TestReverseWorkflow.addStep(ReverseFunction4, {
  stringToReverse1: "load-test-string4",
  stringToReverse2: "load-test-string4",
  stringToReverse3: "load-test-string4",
  stringToReverse4: "load-test-string4",
  stringToReverse5: "load-test-string4",
});

const reverseStep5 = TestReverseWorkflow.addStep(ReverseFunction5, {
  stringToReverse1: "load-test-string5",
  stringToReverse2: "load-test-string5",
  stringToReverse3: "load-test-string5",
  stringToReverse4: "load-test-string5",
  stringToReverse5: "load-test-string5",
});

const reverseStep6 = TestReverseWorkflow.addStep(ReverseFunction6, {
  stringToReverse: "load-test-string6",
});

const reverseStep7 = TestReverseWorkflow.addStep(ReverseFunction6, {
  stringToReverse: "load-test-string7",
});

const reverseStep8 = TestReverseWorkflow.addStep(ReverseFunction6, {
  stringToReverse: "load-test-string8",
});

const reverseStep9 = TestReverseWorkflow.addStep(ReverseFunction6, {
  stringToReverse: "load-test-string9",
});

const reverseStep10 = TestReverseWorkflow.addStep(ReverseFunction6, {
  stringToReverse: "load-test-string10",
});

const reverseStep11 = TestReverseWorkflow.addStep(ReverseFunction6, {
  stringToReverse: "load-test-string11",
});

const reverseStep12 = TestReverseWorkflow.addStep(ReverseFunction6, {
  stringToReverse: "load-test-string12",
});

const reverseStep13 = TestReverseWorkflow.addStep(ReverseFunction6, {
  stringToReverse: "load-test-string13",
});

const reverseStep14 = TestReverseWorkflow.addStep(ReverseFunction6, {
  stringToReverse: "load-test-string14",
});

const reverseStep15 = TestReverseWorkflow.addStep(ReverseFunction6, {
  stringToReverse: "load-test-string15",
});

const reverseStep16 = TestReverseWorkflow.addStep(ReverseFunction6, {
  stringToReverse: "load-test-string16",
});

const reverseStep17 = TestReverseWorkflow.addStep(ReverseFunction6, {
  stringToReverse: "load-test-string17",
});

const reverseStep18 = TestReverseWorkflow.addStep(ReverseFunction6, {
  stringToReverse: "load-test-string18",
});

const reverseStep19 = TestReverseWorkflow.addStep(ReverseFunction6, {
  stringToReverse: "load-test-string19",
});

const reverseStep20 = TestReverseWorkflow.addStep(ReverseFunction6, {
  stringToReverse: "load-test-string20",
});

TestReverseWorkflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: TestReverseWorkflow.inputs.channel,
  message: reverseStep1.outputs.reverseString,
});

TestReverseWorkflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: TestReverseWorkflow.inputs.channel,
  message: reverseStep2.outputs.reverseString,
});

TestReverseWorkflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: TestReverseWorkflow.inputs.channel,
  message: reverseStep3.outputs.reverseString,
});

TestReverseWorkflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: TestReverseWorkflow.inputs.channel,
  message: reverseStep4.outputs.reverseString,
});

TestReverseWorkflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: TestReverseWorkflow.inputs.channel,
  message: reverseStep5.outputs.reverseString,
});

TestReverseWorkflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: TestReverseWorkflow.inputs.channel,
  message: reverseStep6.outputs.reverseString,
});

TestReverseWorkflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: TestReverseWorkflow.inputs.channel,
  message: reverseStep7.outputs.reverseString,
});

TestReverseWorkflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: TestReverseWorkflow.inputs.channel,
  message: reverseStep8.outputs.reverseString,
});

TestReverseWorkflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: TestReverseWorkflow.inputs.channel,
  message: reverseStep9.outputs.reverseString,
});

TestReverseWorkflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: TestReverseWorkflow.inputs.channel,
  message: reverseStep10.outputs.reverseString,
});

TestReverseWorkflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: TestReverseWorkflow.inputs.channel,
  message: reverseStep11.outputs.reverseString,
});

TestReverseWorkflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: TestReverseWorkflow.inputs.channel,
  message: reverseStep12.outputs.reverseString,
});

TestReverseWorkflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: TestReverseWorkflow.inputs.channel,
  message: reverseStep13.outputs.reverseString,
});

TestReverseWorkflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: TestReverseWorkflow.inputs.channel,
  message: reverseStep14.outputs.reverseString,
});

TestReverseWorkflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: TestReverseWorkflow.inputs.channel,
  message: reverseStep15.outputs.reverseString,
});

TestReverseWorkflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: TestReverseWorkflow.inputs.channel,
  message: reverseStep16.outputs.reverseString,
});

TestReverseWorkflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: TestReverseWorkflow.inputs.channel,
  message: reverseStep17.outputs.reverseString,
});

TestReverseWorkflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: TestReverseWorkflow.inputs.channel,
  message: reverseStep18.outputs.reverseString,
});

TestReverseWorkflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: TestReverseWorkflow.inputs.channel,
  message: reverseStep19.outputs.reverseString,
});

TestReverseWorkflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: TestReverseWorkflow.inputs.channel,
  message: reverseStep20.outputs.reverseString,
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
  description: "Reverse a string in a multi-step workflow",
  icon: "assets/default_new_app_icon.png",
  workflows: [TestReverseWorkflow],
  datastores: [DenoTableDatastore],
  outgoingDomains: [],
  botScopes: ["commands", "chat:write", "chat:write.public"],
});
