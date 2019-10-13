import React from "react"
import { css } from "@emotion/core"
import logo from "../images/hatena-b.svg"

type Props = {
  url: string;
}

const HatenaB: React.FC<Props> = ({ url, ...props }) => (
  <a
    href={`https://b.hatena.ne.jp/my/add.confirm?url=${encodeURIComponent(url)}`}
    target="_blank"
    rel="noopener noreferrer"
    css={css`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 28px;
      height: 28px;
      background-color: #00a4de;
      border-radius: 3px;
      cursor: pointer;
    `}
    {...props}
  >
    <i
      css={css`
        display: block;
        width: 18px;
        height: 18px;
        background-image: url(${logo});
      `}
    />
  </a>
)

export default HatenaB
