import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { SvgXml } from "react-native-svg";
import * as Font from 'expo-font';

const xml = `
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="500" height="129" viewBox="0 0 500 129">
  <defs>
    <clipPath id="clip-path">
      <rect id="사각형_195" data-name="사각형 195" width="500" height="129" fill="#fff" stroke="#707070" stroke-width="1"/>
    </clipPath>
    <pattern id="pattern" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" viewBox="0 0 512 512">
      <image width="512" height="512" xlink:href="data:image/png;base64,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"/>
    </pattern>
  </defs>
  <g id="마스크_그룹_5" data-name="마스크 그룹 5" clip-path="url(#clip-path)">
    <g id="그룹_143" data-name="그룹 143">
      <rect id="사각형_193" data-name="사각형 193" width="514" height="105" rx="16" transform="translate(-7 -4)" fill="#204051" opacity="0.09"/>
      <rect id="사각형_194" data-name="사각형 194" width="509" height="103" rx="16" transform="translate(-5 -9)" fill="#3b6978"/>
      <g id="그룹_142" data-name="그룹 142" transform="translate(59 -49.189)">
        <path id="패스_1107" data-name="패스 1107" d="M619.269,213.607c0,12.5-22.635,47.841-22.635,47.841S574,226.107,574,213.606a22.635,22.635,0,0,1,45.269,0Z" transform="translate(-406 -83.02)" fill="#cae8d5"/>
        <g id="그룹_141" data-name="그룹 141" transform="translate(177.421 117.437)">
          <path id="패스_1108" data-name="패스 1108" d="M12.86,0A12.86,12.86,0,1,1,0,12.86,12.86,12.86,0,0,1,12.86,0Z" transform="translate(0.353 0.288)" fill="#f2f2f2"/>
          <circle id="타원_725" data-name="타원 725" cx="9.5" cy="9.5" r="9.5" transform="translate(3.579 3.752)" fill="url(#pattern)"/>
        </g>
      </g>
      <text id="노동자_구하기" data-name="노동자 구하기" transform="translate(206 34)" fill="#fff" font-size="15" font-family="NanumGothic, Nanum Gothic" opacity="0.49"><tspan x="0" y="20">노동자 구하기</tspan></text>
    </g>
  </g>
  </svg>
`;

export default () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const loadFonts = async() => {
    await Font.loadAsync({
      // Load a font `NanumGothic-Regular` from a static resource
      NanumGothic: require('../fonts/NanumGothic-Regular.ttf'),
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