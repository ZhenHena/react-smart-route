"use client";
import SmartLink from './lib/SmartLink';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-cn">
      <body>
        <div className="container">
          <div className="sidebar">
            <h2>菜单</h2>

            <SmartLink href="/">
              首页
            </SmartLink>

            <SmartLink href="/page1">
              Page1
            </SmartLink>

            <SmartLink href="/pages/abc">
              ABC
            </SmartLink>
          </div>
          <div className="content">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
