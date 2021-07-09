import { Header, HeaderName, HeaderMenuItem, HeaderNavigation, SkipToContent, HeaderGlobalBar, HeaderGlobalAction } from "carbon-components-react";
import { UserAvatar20 } from '@carbon/icons-react';

const GlobalHeader = () => (
    <Header aria-label="Lakkie.net Devtools">
        <HeaderName href="/" prefix="Lakkie.net">
            Devtools
        </HeaderName>
        <SkipToContent />
        <HeaderNavigation aria-label="Login and dashboard">
            <HeaderMenuItem href="/login">Login</HeaderMenuItem>
            <HeaderMenuItem href="/dashboard">Dashboard</HeaderMenuItem>
        </HeaderNavigation>
        <HeaderGlobalBar>
            <HeaderGlobalAction aria-label="Profile">
                <UserAvatar20 />
            </HeaderGlobalAction>
        </HeaderGlobalBar>
    </Header>
);

export default GlobalHeader;