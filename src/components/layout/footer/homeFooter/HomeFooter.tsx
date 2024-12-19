import { usePathname, useRouter } from 'next/navigation';
import * as S from './HomeFooter.styled';
import {
  HouseIcon,
  MagnifyingGlassIcon,
  MapPinPlusICon,
  UserListIcon,
  UsersThreeIcon,
} from 'assets';
import { Button } from 'components/button';

const HomeFooter = () => {
  const router = useRouter();
  const pathname = usePathname();

  const footerArr = [
    { icon: <HouseIcon />, text: '홈', path: '/main' },
    { icon: <MagnifyingGlassIcon />, text: '검색', path: '/search' },
    { icon: <MapPinPlusICon />, text: '미팅 만들기', path: '/createMeeting' },
    { icon: <UsersThreeIcon />, text: '내미팅', path: '/myMeeting' },
    { icon: <UserListIcon />, text: '마이페이지', path: '/myPage' },
  ];

  const handleClickFooter = (path: string) => {
    router.push(path);
  };

  return (
    <S.Footer>
      {footerArr.map((item) => {
        const selectedItem = item.path === pathname;
        return (
          <Button
            key={item.text}
            onClick={() => handleClickFooter(item.path)}
            css={S.button}
          >
            <S.ButtonWrapper>
              <S.IconWrapper isSelected={selectedItem}>
                {item.icon}
              </S.IconWrapper>
              <S.Text isSelected={selectedItem}>{item.text}</S.Text>
            </S.ButtonWrapper>
          </Button>
        );
      })}
    </S.Footer>
  );
};

export default HomeFooter;
