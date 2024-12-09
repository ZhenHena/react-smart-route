import './page.css';
import DynamicContent from './lib/DynamicContent';
import Page1 from './Page1';
import Content from './Content';

// 定义路由数组，包含路径和对应的组件。
const routes = [
  { path: '/', component: Content },
  { path: '/page1', component: Page1 },
  { path: '/pages/:mapName', component: Content },
];

export default function HomePage() {
  return (
    // 将 routes 作为属性传递给 DynamicContent 组件。
    <DynamicContent routes={routes} />
  );
}