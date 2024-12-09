import { ReactNode, useEffect, useState } from 'react';

// 定义 SmartLink 组件的属性接口。
interface SmartLinkProps {
    href: string;
    children: ReactNode;
}

// 定义 SmartLink 组件。
export default function SmartLink({ href, children }: SmartLinkProps) {
    // 使用 useState 钩子定义 isActive 状态。
    const [isActive, setIsActive] = useState(false);

    // 使用 useEffect 钩子监听 URL 的变化。
    useEffect(() => {
        // 定义处理 URL 变化的函数。
        const handlePopState = () => {
            // 更新 isActive 状态。
            setIsActive(window.location.pathname === href);
        };

        // 初始化 isActive 状态。
        setIsActive(window.location.pathname === href);

        // 添加 popstate 事件监听器。
        window.addEventListener('popstate', handlePopState);

        // 在组件卸载时移除事件监听器。
        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, [href]); // 依赖项为 href，确保在 href 变化时重新执行。

    // 定义点击事件处理函数。
    const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault(); // 阻止默认的链接跳转行为。
        window.history.pushState(null, '', href); // 更新浏览器历史记录。
        window.dispatchEvent(new PopStateEvent('popstate')); // 手动触发 popstate 事件。
    };

    return (
        // 并根据 isActive 变量设置类名。
        <div className={isActive ? 'smart-link-active' : ''}>
            <a href={href} onClick={handleLinkClick}>
                {children}
            </a>
        </div>
    );
}