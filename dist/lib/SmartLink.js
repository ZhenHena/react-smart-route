import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
export default function SmartLink({ href, children }) {
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        const handlePopState = () => {
            setIsActive(window.location.pathname === href);
        };
        setIsActive(window.location.pathname === href);
        window.addEventListener('popstate', handlePopState);
        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, [href]);
    const handleLinkClick = (event) => {
        event.preventDefault();
        window.history.pushState(null, '', href);
        window.dispatchEvent(new PopStateEvent('popstate'));
    };
    return (_jsx("div", { className: isActive ? 'smart-link-active' : '', children: _jsx("a", { href: href, onClick: handleLinkClick, children: children }) }));
}