"use client";

import { useState, useEffect } from 'react';

// 定义 Route 接口来描述每个路由的结构。
interface Route {
    path: string;
    component: React.ComponentType<object>; // 使用 object 类型。
}

// DynamicContent 组件接收 routes 作为属性。
const DynamicContent = ({ routes }: { routes: Route[] }) => {
    // 初始化组件状态为一个默认内容组件。
    const [Component, setComponent] = useState<React.ComponentType<object>>(() => {
        const DefaultComponent = () => <div></div>;
        DefaultComponent.displayName = "DefaultComponent";
        return DefaultComponent;
    });
    const [params, setParams] = useState<Record<string, string>>({});

    useEffect(() => {
        const handleUrlChange = () => {
            const currentPath = window.location.pathname;

            // 在 routes 中查找匹配的路由。
            const matchedRoute = routes.find(route => {
                const pathRegex = new RegExp(`^${route.path.replace(/:\w+/g, '(\\w+)')}$`);
                return pathRegex.test(currentPath);
            });

            if (matchedRoute) {
                const pathKeys = matchedRoute.path.match(/:\w+/g) || [];
                const pathValues = currentPath.match(new RegExp(matchedRoute.path.replace(/:\w+/g, '(\\w+)'))) || [];

                // 提取路径参数。
                const params = pathKeys.reduce((acc, key, index) => {
                    acc[key.substring(1)] = pathValues[index + 1];
                    return acc;
                }, {} as Record<string, string>);

                setParams(params);
                setComponent(() => matchedRoute.component);
            } else {
                // 如果没有匹配的路由，设置组件为默认内容。
                const NotFoundComponent = () => <div>未找到匹配的内容</div>;
                NotFoundComponent.displayName = "NotFoundComponent";
                setComponent(() => NotFoundComponent);
            }
        };

        // 初始化内容。
        handleUrlChange();

        // 监听 popstate 事件。
        window.addEventListener('popstate', handleUrlChange);

        // 清理事件监听器。
        return () => {
            window.removeEventListener('popstate', handleUrlChange);
        };
    }, [routes]);

    // 直接渲染当前匹配的组件，并传递路径参数。
    return <Component {...params} />;
};

// 为组件添加显示名称。
DynamicContent.displayName = "DynamicContent";

export default DynamicContent;