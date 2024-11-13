import type { Meta } from '@storybook/react';
import styled from '@emotion/styled';
import { css, useTheme } from '@emotion/react';

const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const ColorCard = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.gray10};
    border-radius: 8px;
    overflow: hidden;
  `}
`;

const ColorSwatch = styled.div<{ bgColor: string }>`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.bgColor};
`;

const ColorInfo = styled.div`
  padding: 12px;
`;

const ColorName = styled.div`
  font-weight: bold;
  margin-bottom: 4px;
`;

const ColorValue = styled.div`
  ${({ theme }) => css`
    font-family: var(--font-pretendard);
    color: ${theme.colors.gray70};
  `}
`;

const ColorSection = styled.div`
  margin-bottom: 40px;
`;

const SectionTitle = styled.div`
  ${({ theme }) => css`
    font-size: 15px;
    margin-bottom: 20px;
    padding-bottom: 8px;
    border-bottom: 2px solid ${theme.colors.gray30};
  `}
`;

export default {
  title: 'Design System/Colors',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  tags: ['autodocs'],
} as Meta;

const getColorGroups = (colors: Record<string, string>) => {
  const groups: Record<string, Record<string, string>> = {};

  Object.entries(colors).forEach(([key, value]) => {
    const groupName = key.replace(/[0-9]/g, '');
    if (!groups[groupName]) {
      groups[groupName] = {};
    }
    groups[groupName][key] = value;
  });

  return groups;
};

export const ColorPalette = () => {
  const { colors } = useTheme();
  const colorGroups = getColorGroups(colors);

  return (
    <div>
      {Object.entries(colorGroups).map(([groupName, groupColors]) => (
        <ColorSection key={groupName}>
          <SectionTitle>{groupName}</SectionTitle>
          <ColorGrid>
            {Object.entries(groupColors).map(([colorName, colorValue]) => (
              <ColorCard key={colorName}>
                <ColorSwatch bgColor={colorValue} />
                <ColorInfo>
                  <ColorName>{colorName}</ColorName>
                  <ColorValue>{colorValue}</ColorValue>
                </ColorInfo>
              </ColorCard>
            ))}
          </ColorGrid>
        </ColorSection>
      ))}
    </div>
  );
};

ColorPalette.storyName = 'Color Palette';
