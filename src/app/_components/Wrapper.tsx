import {ReactNode} from "react"

interface Props {
  children: ReactNode
}

const Wrapper = async ({children}: Props) => {
  await new Promise((resolve) => setTimeout(() => resolve("ok"), 3000))

  return <div>{children}</div>
}

export default Wrapper
