import AvatarView from "@sarge/avatar-view"

const url =
  "https://d1a370nemizbjq.cloudfront.net/2c3a25d8-a3a4-4582-81e7-016842acb0ee.glb"

const Chris = () => {
  return (
    <AvatarView
      url={url}
      style={{ margin: "auto", width: "400px", height: "400px" }}
      rotateAvatar
      eyeBlink
      headMovement
    />
  )
}

export default Chris
