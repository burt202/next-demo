import {ReactNode, Suspense} from "react"

import "../styles/global.css"
import Loading from "./_components/Loading"
import Wrapper from "./_components/Wrapper"

interface LayoutProps {
  children: ReactNode
}

const Layout = ({children}: LayoutProps) => {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<Loading />}>
          <Wrapper>
            <div className="content">{children}</div>
          </Wrapper>
        </Suspense>
      </body>
    </html>
  )
}

export default Layout
