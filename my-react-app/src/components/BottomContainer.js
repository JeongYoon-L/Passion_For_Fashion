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
        </PhotoAction>
        <PhotoAction>
          <FontAwesomeIcon size={"2x"} icon={faThumbsDown} />
        </PhotoAction>
      </div>
      <div>
        <FontAwesomeIcon size={"2x"} icon={faBookmark} />
      </div>
    </PhotoActions>
    <Likes>{likes === 1 ? "1 Like" : `${likes} Likes`}</Likes>
  </>;
}

export default BottomContainer;
// 상단에 메뉴로 가는 버튼, 
// 좋(r)/싫(l), 
// 좋아요 개수,
// 좋아요 애니메이션
// 우측하단 onclick 시 사진 출력, 특정 부위 클릭 시 URL 이동.