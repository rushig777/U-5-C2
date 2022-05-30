
import styled from "styled-components"

const Img =styled.img`
width:${Props=>Props.width}
height:${Props=>Props.height}
border-radius:${Props=>Props.radius}`
export const Image = ({ src, alt, borderRadius, width, height, fit }) => {
  return (
    <div>
      <Img radius={borderRadius} className="img" width={width} height={height} src={src} alt={alt} />
    </div>
  );
};
