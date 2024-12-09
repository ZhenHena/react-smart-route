"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
const DynamicContent = ({ routes }) => {
    const [Component, setComponent] = useState(() => {
        const DefaultComponent = () => _jsx("div", {});
        DefaultComponent.displayName = "DefaultComponent";
        return DefaultComponent;
    });
    const [params, setParams] = useState({});
    useEffect(() => {
        const handleUrlChange = () => {
            const currentPath = window.location.pathname;
            const matchedRoute = routes.find(route => {
                const pathRegex = new RegExp(`^${route.path.replace(/:\w+/g, '(\\w+)')}$`);
                return pathRegex.test(currentPath);
            });
            if (matchedRoute) {
                const pathKeys = matchedRoute.path.match(/:\w+/g) || [];
                const pathValues = currentPath.match(new RegExp(matchedRoute.path.replace(/:\w+/g, '(\\w+)'))) || [];
                const params = pathKeys.reduce((acc, key, index) => {
                    acc[key.substring(1)] = pathValues[index + 1] || '';
                    return acc;
                }, {});
                setParams(params);
                setComponent(() => matchedRoute.component);
            }
            else {
                const NotFoundComponent = () => _jsx("div", { children: "\u672A\u627E\u5230\u5339\u914D\u7684\u5185\u5BB9" });
                NotFoundComponent.displayName = "NotFoundComponent";
                setComponent(() => NotFoundComponent);
            }
        };
        handleUrlChange();
        window.addEventListener('popstate', handleUrlChange);
        return () => {
            window.removeEventListener('popstate', handleUrlChange);
        };
    }, [routes]);
    return _jsx(Component, Object.assign({}, params));
};
DynamicContent.displayName = "DynamicContent";
export default DynamicContent;
