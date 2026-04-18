import type {
  EditorConfig,
  LexicalNode,
  NodeKey,
  SerializedLexicalNode,
  Spread,
} from "lexical";

import { DecoratorNode } from "lexical";

import ComboPieceInline from "components/shared/comboPieceInline";

export type SerializedComboActionNode = Spread<
  {
    type: "combo-action";
    comboAction: any;
  },
  SerializedLexicalNode
>;

export class ComboActionNode extends DecoratorNode<JSX.Element> {
  __comboAction: string;

  static getType(): string {
    return "combo-action";
  }

  static clone(node: ComboActionNode): ComboActionNode {
    return new ComboActionNode(node.__comboAction, node.__key);
  }

  constructor(equation: string, key?: NodeKey) {
    super(key);
    this.__comboAction = equation;
  }

  static importJSON(
    serializedNode: SerializedComboActionNode
  ): ComboActionNode {
    const node = $createComboActionNode(serializedNode.comboAction);
    return node;
  }

  exportJSON(): SerializedComboActionNode {
    return {
      comboAction: this.getComboAction(),
      type: "combo-action",
      version: 1,
    };
  }

  createDOM(_config: EditorConfig): HTMLElement {
    return document.createElement("span");
  }

  updateDOM(prevNode: ComboActionNode): boolean {
    // If the inline property changes, replace the element
    return false;
  }

  getComboAction(): string {
    return this.__comboAction;
  }

  setComboAction(comboAction: any): void {
    const writable = this.getWritable();
    writable.__comboAction = comboAction;
  }

  decorate(): JSX.Element {
    return <ComboPieceInline comboPiece={this.__comboAction} />;
  }
}

export function $createComboActionNode(comboAction = ""): ComboActionNode {
  const comboActionNode = new ComboActionNode(comboAction);
  return comboActionNode;
}

export function $isComboActionNode(
  node: LexicalNode | null | undefined
): node is ComboActionNode {
  return node instanceof ComboActionNode;
}
