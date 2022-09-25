/* eslint-disable jsx-a11y/alt-text */
import BottomContainer from "./BottomContainer";
import Button from '@mui/material/Button';


const ImgPage = ({imgUrl, likes}) => {
  const likesParam = likes?likes:123;
  return <>
    <img src={imgUrl} useMap="#tssss"></img>
      <map name="tssss"  id="tssss">
        {/* <area 
          shape="rect" 
          coords="60, 180, 1279, 1663" 
          href="https://www.naver.com/" 
        /> */}
      </map>
      
    <BottomContainer likes={likesParam}></BottomContainer>
  </>;
}

export default ImgPage;