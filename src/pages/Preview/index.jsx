import { useParams } from "react-router-dom";
import { StylePreview } from "./style";

export const Preview = () => {
  const { id } = useParams();

  return (
    <StylePreview>
      <titleStyles fontSize="one">Preview</titleStyles>
    </StylePreview>
  );
};
