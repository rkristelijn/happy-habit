import styled from 'styled-components';

import { BasicGrid } from './grid';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <BasicGrid x={4} y={4} />
    </StyledApp>
  );
}

export default App;
