import { FC } from 'react';
import { HeaderProps } from './Header.props';

export const Header: FC = ({...props}: HeaderProps):JSX.Element => {
    return <div {...props}>Header</div>;
};