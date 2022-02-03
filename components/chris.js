import AvatarView from "@sarge/avatar-view"
import styled from "@emotion/styled"

const ChrisBox = styled.div`
  width: 800px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 400px;
`

const url =
  "https://d1a370nemizbjq.cloudfront.net/2c3a25d8-a3a4-4582-81e7-016842acb0ee.glb"

const Chris = () => {
  return (
    <ChrisBox>
      <AvatarView
        style={{
          width: "400px",
          height: "400px",
          alignItems: "center",

          borderRadius: "100%",
        }}
        url={url}
        rotateAvatar
        eyeBlink
        headMovement
      />
    </ChrisBox>
  )
}

export default Chris
