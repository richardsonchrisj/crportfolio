import AvatarView from "@sarge/avatar-view"
import { ChrisSpinner, ChrisContainer } from "./chrisloader"
import { useState } from "react"

const url =
  "https://d1a370nemizbjq.cloudfront.net/2c3a25d8-a3a4-4582-81e7-016842acb0ee.glb"

const Chris = () => {
  const [loading, setLoading] = useState(true)
  return (
    <ChrisContainer ref={AvatarView}>
      {loading && <ChrisSpinner />}
    </ChrisContainer>
  )
}

export default Chris
