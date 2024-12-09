declare module 'react-smart-route' {
    import { FC, ReactNode } from 'react';
  
    // 定义 Route 接口。
    interface Route {
      path: string;
      component: FC<any>;
    }
  
    // DynamicContent 组件的 Props。
    interface DynamicContentProps {
      routes: Route[];
    }
  
    // SmartLink 组件的 Props。
    interface SmartLinkProps {
      href: string;
      children: ReactNode;
    }
  
    // 导出组件。
    export const DynamicContent: FC<DynamicContentProps>;
    export const SmartLink: FC<SmartLinkProps>;
  }