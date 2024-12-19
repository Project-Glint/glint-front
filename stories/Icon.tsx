import * as icons from 'assets/icons';

export type IconType = keyof typeof icons;

interface IconProps {
  name: IconType;
}

const Icon = ({ name }: IconProps) => {
  const SVGIcon = icons[name];
  if (!SVGIcon) {
    return null;
  }
  return (
    <div
      style={{
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100px',
        height: '100px',
      }}
    >
      <SVGIcon />
    </div>
  );
};

export default Icon;
