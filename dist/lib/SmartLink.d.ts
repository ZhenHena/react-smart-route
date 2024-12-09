import React from 'react';
import { ReactNode } from 'react';
interface SmartLinkProps {
    href: string;
    children: ReactNode;
}
export default function SmartLink({ href, children }: SmartLinkProps): React.JSX.Element;
export {};
