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
            <SmartLink href="/page1">
              点击按钮1
            </SmartLink>
            <SmartLink href="/page2">
              点击按钮2
            </SmartLink>
            <SmartLink href="/page2/abc">
              点击按钮3
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
