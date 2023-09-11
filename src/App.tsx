import "./App.css";

import { TextlintKernel, TextlintKernelOptions } from "@textlint/kernel";

const kernel = new TextlintKernel();
const setup = async () => {
  const options: TextlintKernelOptions = {
    ext: ".txt",
    // plugins: [
    //   {
    //     pluginId: "text",
    //     plugin: await import("@textlint/textlint-plugin-text"),
    //   },
    // ],
    // rules: [
    //   {
    //     ruleId: "no-todo",
    //     rule: await import("textlint-rule-no-todo"),
    //   },
    // ],
  };
};

function App() {
  const options: TextlintKernelOptions = {
    ext: ".txt",
    plugins: [
      {
        pluginId: "text",
        plugin: require("@textlint/textlint-plugin-text"),
      },
    ],
    rules: [
      {
        ruleId: "no-todo",
        rule: require("textlint-rule-no-todo"),
      },
    ],
  };
  kernel.lintText("TODO: text", options).then((result) => {
    console.log({ result });
    // assert.ok(typeof result.filePath === "string");
    // assert.ok(result.messages.length === 1);
  });

  console.log({ kernel });
  return (
    <>
      <p>hello</p>
    </>
  );
}

export default App;
