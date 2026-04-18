import type { LexicalCommand } from "lexical";

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $getSelection,
  $isRangeSelection,
  COMMAND_PRIORITY_EDITOR,
  createCommand,
} from "lexical";
import { useEffect } from "react";

import { $createComboActionNode, ComboActionNode } from "./ComboActionNode";

type CommandPayload = {
  comboAction: string;
};

export const INSERT_COMBO_ACTION_COMMAND: LexicalCommand<CommandPayload> =
  createCommand();

export default function ComboActionsPlugin(): JSX.Element | null {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    if (!editor.hasNodes([ComboActionNode])) {
      throw new Error(
        "ComboActionsPlugins: ComboActionNode not registered on editor"
      );
    }

    return editor.registerCommand<CommandPayload>(
      INSERT_COMBO_ACTION_COMMAND,
      (payload) => {
        const { comboAction } = payload;
        const selection = $getSelection();

        if ($isRangeSelection(selection)) {
          const comboActionNode = $createComboActionNode(comboAction);
          selection.insertNodes([comboActionNode]);
        }

        return true;
      },
      COMMAND_PRIORITY_EDITOR
    );
  }, [editor]);

  return null;
}
