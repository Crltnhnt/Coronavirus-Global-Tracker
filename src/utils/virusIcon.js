import React from "react";

function Icon({ color }) {
  return (
    <svg 
        height='30px' 
        width='30px' 
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
        style={{ fill: color, transition: '0.5s' }}
    >
      <path
        style={{
          WebkitTextIndent: "0",
          textIndent: "0",
          WebkitTextAlign: "start",
          textAlign: "start",
          lineHeight: "normal",
          WebkitTextTransform: "none",
          textTransform: "none",
          blockProgression: "tb",
          InkscapeFontSpecification: "Bitstream Vera Sans"
        }}
        d="M14 3v2h1v1.063A9.87 9.87 0 009.687 8.25l-.75-.75.688-.688-1.406-1.406L5.406 8.22l1.407 1.406.687-.688.75.75A9.87 9.87 0 006.062 15H5v-1H3v4h2v-1h1.063a9.864 9.864 0 002.218 5.344l-.781.718-.688-.687-1.406 1.406 2.813 2.813 1.406-1.407-.688-.687.75-.781A9.846 9.846 0 0015 25.937V27h-1v2h4v-2h-1v-1.063a9.846 9.846 0 005.313-2.218h.03l.72.781-.688.688 1.406 1.406 2.813-2.813-1.407-1.406-.687.688-.781-.72c.005-.006-.006-.024 0-.03A9.846 9.846 0 0025.937 17H27v1h2v-4h-2v1h-1.063a9.87 9.87 0 00-2.187-5.313l.75-.75.688.688 1.406-1.406-2.813-2.813-1.406 1.407.688.687-.75.75A9.87 9.87 0 0017 6.062V5h1V3h-4zm2 5c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8zm-2.5 2.156a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm5 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM11 14.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm5 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm5 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-7.5 4.344a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm5 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
      ></path>
    </svg>
  );
}

export default Icon;