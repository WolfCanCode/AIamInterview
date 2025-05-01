import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const Cursor = styled.span`
  display: inline-block;
  width: 2px;
  height: 1em;
  background: linear-gradient(
    to bottom,
    oklch(85% 0.3 240),
    oklch(85% 0.3 280)
  );
  margin-left: 4px;
  vertical-align: middle;
  animation: ${blink} 1s step-end infinite;
`;

export default function BlinkingCursor() {
  return <Cursor aria-hidden="true" />;
}
