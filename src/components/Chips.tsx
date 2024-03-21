import { useState } from 'react';
import styled from 'styled-components';

import ColorButton from './ColorButton';

const ChipContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 9px 6px;
  grid-template-columns: fit-content(100px) fit-content(100px) fit-content(100px);
  justify-content: center;
  button {
    justify-self: center;
  }
`;
type ChipsProps = {
  onSelect?: (key: string) => void;
  chips: { key: string; color: string; children: React.ReactNode }[];
};
function Chips(props: ChipsProps) {
  const { chips, onSelect } = props;
  const [selectedKey, setSelectedKey] = useState<string>('none');

  const selectKey = (key: string) => {
    setSelectedKey(key);
    if (onSelect) {
      onSelect(key);
    }
  };

  return (
    <ChipContainer>
      {chips.map((chip) => (
        <ColorButton
          key={chip.key}
          $chipColor={chip.color}
          $unSelected={selectedKey !== 'none' && selectedKey !== chip.key}
          onClick={() => selectKey(chip.key)}
        >
          {chip.children}
        </ColorButton>
      ))}
    </ChipContainer>
  );
}

export default Chips;
