//
//Referenced by
//https://github.com/nomadcoders/instaclone-web
//

import { Button } from "@mui/material";

import { faBookmark, faComment, faHeart, faPaperPlane, faThumbsUp, faBell, faThumbsDown } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { FatText } from "../shared";


const Likes = styled(FatText)`
  margin-top: 15px;
  display: block;
`;

const PhotoActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 1em 0 1em;
  div {
    display: flex;
    align-items: center;
  }
  svg {
    font-size:18px;
  }
`;

const PhotoAction = styled.div`
  margin-right: 10px;
  cursor: pointer;
`;

const BottomContainer = ({imgUrl, likes}) => {
  return <>
    <PhotoActions>
      <div>
        <PhotoAction  >
          <FontAwesomeIcon
            style={{ color: "inherit" }}
            size={"2x"}
            icon={ faThumbsUp}
          />
        </PhotoAction>
        <PhotoAction>
          <FontAwesomeIcon size={"2x"} icon={faHeart} />
          <div>
            105200
          </div>
        </PhotoAction>
        <PhotoAction>
          <FontAwesomeIcon size={"2x"} icon={faThumbsDown} />
        </PhotoAction>
      </div>
      <div>
      <PhotoAction>
        <FontAwesomeIcon size={"2x"} icon={faBookmark}  onClick={() => window.open('https://www.buckmason.com/products/army-green-baja-twill-field-shirt?variant=39741470769235&utm_source=google&utm_medium=cpc', '_blank')}/>
        </PhotoAction>
      </div>
    </PhotoActions>
    <Likes>{likes === 1 ? "1 Like" : `${likes} Likes`}</Likes>
  </>;
}

export default BottomContainer;