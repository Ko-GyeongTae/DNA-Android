import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { SvgXml } from "react-native-svg";
import * as Font from 'expo-font';

const xml = `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="191" height="79" viewBox="0 0 191 79">
    <defs>
      <pattern id="pattern" width="1" height="1" viewBox="-0.698 -0.698 32.395 32.395">
        <image preserveAspectRatio="xMidYMid slice" width="31" height="31" xlink:href="data:image/png;base64,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"/>
      </pattern>
    </defs>
    <g id="그룹_135" data-name="그룹 135" transform="translate(-5874 -4302)">
      <circle id="타원_694" data-name="타원 694" cx="19" cy="19" r="19" transform="translate(5874 4302)" fill="#fff"/>
      <g id="타원_681" data-name="타원 681" transform="translate(5878 4306)" stroke="#3b6978" stroke-width="1" fill="url(#pattern)">
        <circle cx="15.5" cy="15.5" r="15.5" stroke="none"/>
        <circle cx="15.5" cy="15.5" r="15" fill="none"/>
      </g>
      <text id="잠수탄_친구_찾기" data-name="잠수탄 친구 찾기" transform="translate(5924 4313)" fill="#204051" font-size="15" font-family="NanumGothicExtraBold, Nanum Gothic" opacity="0.85"><tspan x="0" y="14">잠수탄 친구 찾기</tspan></text>
      <text id="프로젝트_약속에_나오지않고_어딘가_박혀있는_친구를_찾습니다." data-name="프로젝트, 약속에 나오지않고 
    어딘가 박혀있는 친구를 찾습니다." transform="translate(5890 4353)" fill="#204051" font-size="12" font-family="NanumGothic, Nanum Gothic"><tspan x="0" y="11">프로젝트, 약속에 나오지않고 </tspan><tspan x="0" y="25">어딘가 박혀있는 친구를 찾습니다.</tspan></text>
    </g>
    </svg>
`;

export default () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const loadFonts = async() => {
    await Font.loadAsync({
      // Load a font `NanumGothic-Regular` from a static resource
      NanumGothic: require('../fonts/NanumGothic-Regular.ttf'),
      'NanumGothicExtraBold': {
        uri: require('../fonts/NanumGothic-ExtraBold.ttf'),
        display: Font.FontDisplay.FALLBACK,
      },
    });
    setFontsLoaded(true);
  }

  useEffect(() => {
    loadFonts();
  }, []);

  if(fontsLoaded){
    return (
      <SvgXml xml={xml} width="100%" height="100%" />
    );
  } else {
    return null;
  }
};