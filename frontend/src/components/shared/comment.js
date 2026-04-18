import Card from "@mui/material/Card";
import RichTextEditor from "components/editCombo/richTextEditor/richTextEditor";

function Comment(props) {
  return (
    <Card sx={{ p: 2 }}>
      <RichTextEditor readonly value={props.comment.comment}></RichTextEditor>
    </Card>
  );
}
export default Comment;
