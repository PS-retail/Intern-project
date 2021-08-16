import styled from "styled-components";
import tw from "twin.macro";
import MicIcon from "@material-ui/icons/Mic";
import MicOffIcon from "@material-ui/icons/MicOff";
import VideocamIcon from "@material-ui/icons/Videocam";
import VideocamOffIcon from "@material-ui/icons/VideocamOff";
import { IconButton } from "@material-ui/core";
import ClosedCaptionIcon from "@material-ui/icons/ClosedCaption";

const Container = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  ${tw`
    inline-block
    relative
    bg-gray-50
    rounded-lg
    p-3
  `};
`;

const ItemContainer = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  ${tw`
    inline-block
    m-0.5
    relative
    bg-gray-50
    rounded-md
    p-1
  `};
`;
const Options = ({ voice, video, setVoice, setVideo, captions, setCaptions }) => {
  return (
    <Container>
      <ItemContainer>
        <IconButton
          onClick={() => {
            setVideo((prevState) => !prevState);
          }}
        >
          {video && <VideocamIcon />}
          {!video && <VideocamOffIcon />}
        </IconButton>
      </ItemContainer>
      <ItemContainer>
        <IconButton onClick={() => setVoice((prevState) => !prevState)}>
          {voice && <MicIcon />}
          {!voice && <MicOffIcon />}
        </IconButton>
      </ItemContainer>
      <ItemContainer>
        <IconButton
          onClick={() => {
            setCaptions((prevState) => !prevState);
          }}
        >
          {captions && <ClosedCaptionIcon />}
          {!captions && <ClosedCaptionIcon color = "disabled" />}
        </IconButton>
      </ItemContainer>
    </Container>
  );
};

export default Options;
