import React from 'react';
interface Route {
    path: string;
    component: React.ComponentType<object>;
}
declare const DynamicContent: {
    ({ routes }: {
        routes: Route[];
    }): React.JSX.Element;
    displayName: string;
};
export default DynamicContent;
