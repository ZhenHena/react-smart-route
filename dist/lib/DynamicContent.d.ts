interface Route {
    path: string;
    component: React.ComponentType<object>;
}
declare const DynamicContent: {
    ({ routes }: {
        routes: Route[];
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default DynamicContent;
