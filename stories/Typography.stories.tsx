import type { Meta } from '@storybook/react';
import styled from '@emotion/styled';
import { fonts } from 'styles';
import { css } from '@emotion/react';

const FontSection = styled.div`
  margin-bottom: 48px;
`;

const SectionTitle = styled.div`
  ${({ theme }) => css`
    font-size: 15px;
    margin-bottom: 24px;
    padding-bottom: 12px;
    border-bottom: 2px solid ${theme.colors.gray30};
  `}
`;

interface FontDisplayProps {
  fontStyle: any; // css prop type from emotion
}

const FontDisplay = styled.div<FontDisplayProps>`
  ${(props) => props.fontStyle}
  margin-bottom: 32px;
`;

const FontInfo = styled.div`
  ${({ theme }) => css`
    font-family: var(--font-pretendard);
    font-size: 14px;
    color: ${theme.colors.gray70};
    margin-top: 8px;
    padding: 12px;
    background-color: ${theme.colors.gray10};
    border-radius: 4px;
  `}
`;

const FontPreview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const getSectionName = (fontKey: string) => {
  if (fontKey.startsWith('title')) return 'Title';
  if (fontKey.startsWith('body')) return 'Body';
  if (fontKey.startsWith('caption')) return 'Caption';
  return 'Other';
};

const getWeightName = (weight: number) => {
  switch (weight) {
    case 700:
      return 'Bold';
    case 500:
      return 'Medium';
    case 400:
      return 'Regular';
    default:
      return weight;
  }
};

const extractStyleInfo = (style: string) => {
  const sizeMatch = style.match(/font-size: ([\d.]+)rem/);
  const weightMatch = style.match(/font-weight: (\d+)/);

  return {
    size: sizeMatch?.[1] ?? '0',
    weight: weightMatch?.[1] ?? '400',
  };
};

export default {
  title: 'Design System/Typography',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  tags: ['autodocs'],
} as Meta;

export const Typography = () => {
  const fontEntries = Object.entries(fonts);
  const sections = fontEntries.reduce(
    (acc: Record<string, typeof fontEntries>, [key, value]) => {
      const section = getSectionName(key);
      if (!acc[section]) acc[section] = [];
      acc[section].push([key, value]);
      return acc;
    },
    {}
  );

  return (
    <div>
      {Object.entries(sections).map(([sectionName, sectionFonts]) => (
        <FontSection key={sectionName}>
          <SectionTitle>{sectionName} Styles</SectionTitle>
          {sectionFonts.map(([key, style]) => {
            const { size, weight } = extractStyleInfo(style.styles);
            const pxSize = Math.round(parseFloat(size) * 10);

            return (
              <FontDisplay key={key} fontStyle={style}>
                <FontPreview>
                  <div>빛나는 순간을 함께, 글린트</div>
                  <div>Shining Moments Together, Glint</div>
                </FontPreview>
                <FontInfo>
                  {key} • {size}rem ({pxSize}px) •
                  {getWeightName(parseInt(weight))}
                </FontInfo>
              </FontDisplay>
            );
          })}
        </FontSection>
      ))}
    </div>
  );
};

Typography.storyName = 'Font Styles';
