import "@logseq/libs";

function main() {
  logseq.App.registerCommand(
    "meh",
    {
      label: "idt",
      desc: "huehutuo",
      key: "12321",
    },
    () => {
      logseq.UI.showMsg("uhetouheaotueohatueoathuheothueoatn", "warning");
    }
  );
  logseq.UI.showMsg("❤️ Message from Hello World Plugin :)");
}

logseq.ready(main).catch(console.error);
