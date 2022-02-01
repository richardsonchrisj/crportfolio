const Avatar = () => (
    <>
        <body>
            <button onclick="return render()">Render</button>
  </body>
      <script>
            function render() 
            {
                  const params = 
                  {
                        model: "https://example.com/model.glb",
                        scene: "fullbody-portrait-v1",
                        armature: "ArmatureTargetMale",
                        blendShapes: {}
                  }            
                  const http = new XMLHttpRequest()
                  http.open("POST", "https://render.readyplayer.me/render")
                  http.setRequestHeader("Content-type", "application/json")
                  http.send(JSON.stringify(params))
                  http.onload = function()
                  {
                        // Do whatever with response
                        alert(http.responseText)
                  }
            }
        </script>
        </>
)
      export default Avatar