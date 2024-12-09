"use client";
import './page.css';

export default function Page({ mapName = '' }) {
  if (mapName === "abc") {
    return <div>这是 ABC</div>
  }

  return (
    <div className="content">
      <h1>这是首页</h1>
      <p>看这个页面如果你此时点击浏览器的<b>刷新按钮</b>，将会看到 404 错误页，找不到页面！</p>
      <p>你需要把这个前端项目构建输出到后端的项目中，把生成的 <b>index.html</b> 文件作为后端渲染的模板页面去做页面路由。</p>
    </div>
  )
}