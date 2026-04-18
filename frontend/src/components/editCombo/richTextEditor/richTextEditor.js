import { forwardRef, useEffect } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { useTheme } from "@mui/material/styles";
import { ComboActionNode } from "./ComboActionNode";
import ToolbarPlugin from "./ToolBarPlugin";
import ComboActionsPlugin from "./ComboActionsPlugin";
import ComboOverflowWrapper from "components/shared/comboOverflowWrapper";

// Lexical React plugins are React components, which makes them
// highly composable. Furthermore, you can lazy load plugins if
// desired, so you don't pay the cost for plugins until you
// actually use them.
function MyCustomAutoFocusPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    // Focus the editor when the effect fires!
    editor.focus();
  }, [editor]);

  return null;
}

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error) {
  console.error(error);
}

const RichTextEditor = forwardRef((props, ref) => {
  const theme = { paragraph: "rich-text-paragraph" };
  const appTheme = useTheme();

  const initialConfig = {
    editorState: props.value ? props.value : null,
    namespace: "MyEditor",
    theme,
    onError,
    editable: !props.readonly,
    nodes: [ComboActionNode],
  };

  // const [editorState, setEditorState] = useState();
  function onChange(editorState) {
    if (props.readonly) return;

    // Call toJSON on the EditorState object, which produces a serialization safe string
    const editorStateJSON = editorState.toJSON();
    // However, we still have a JavaScript object, so we need to convert it to an actual string with JSON.stringify
    const editorStateString = JSON.stringify(editorStateJSON);
    // setEditorState(editorStateString);
    ref.current = editorStateString;
  }

  return (
    <LexicalComposer initialConfig={initialConfig}>
      {props.readonly ? null : <ToolbarPlugin />}
      <div
        style={{
          textAlign: "left",
          padding: "10px",
          position: "relative",
          border: props.readonly ? "" : `1px solid grey`,
          borderRadius: "3px",
          minHeight: "40px",
          overflow: "hidden"
        }}
      >
        <ComboOverflowWrapper>
          <RichTextPlugin
            contentEditable={
              <ContentEditable
                style={{
                  outline: "none",
                  color: appTheme.palette.text.primary,
                }}
              />
            }
            placeholder={
              <div
                style={{
                  pointerEvents: "none",
                  position: "absolute",
                  top: "8px",
                  left: "10px",
                  opacity: "60%",
                }}
              >
                {props.placeholder}
              </div>
            }
            style={{ color: "black" }}
            ErrorBoundary={LexicalErrorBoundary}
          />
        </ComboOverflowWrapper>
      </div>
      <HistoryPlugin />
      <ComboActionsPlugin />
      <MyCustomAutoFocusPlugin />
      <OnChangePlugin onChange={onChange} />
    </LexicalComposer>
  );
});
export default RichTextEditor;
