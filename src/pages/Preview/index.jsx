import { useParams } from "react-router-dom";
import { StylePreview } from "./style";

export const Preview = () => {
    const { id } = useParams();
    
  return (
    <StylePreview>
      <h1>Preview</h1>
    </StylePreview>
  );
};
