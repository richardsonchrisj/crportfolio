import styled from "@emotion/styled";

const Container = styled.div`
      margin-top: 100px;
      margin: auto;
`;
const Content = styled.div`
       margin-top: 10px;
       border: none;
      width: 100%;
       height: calc(100%);
`;


const Avatar = () => {
      return (<>
           

                        body {
                              padding: 20 40;
                        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
                        background-color: rgb(243, 243, 243);
      }

                        .warning {
                              color: rgb(215, 0, 0);
                        font-weight: bold;
      }
                  </style>

                  <script>
      // Listen to messages from the iframe
                        window.addEventListener('message', receiveMessage, false)

                        // Handle messages from the iframe
                        function receiveMessage(event) {
        // Check if the received message is a string and a glb url
        // if not ignore it, and print details to the console
        if (
                        typeof event.data === 'string' &&
                        event.data.startsWith('https://') &&
                        event.data.endsWith('.glb')
                        ) {
          const url = event.data

                        console.log(`Avatar URL: ${url}`)

                        document.getElementById('avatarUrl').innerHTML = `Avatar URL: ${url}`
                        document.getElementById('iframe').hidden = true
        } else {
                              console.log(`Received message from unknown source: ${event.data}`)
                        }
      }

                        function displayIframe() {
                              document.getElementById('avatarUrl').innerHTML = 'Avatar URL:'
        document.getElementById('iframe').hidden = false
      }
                  </script>
            </head>

            <body>
                  <h2>Ready Player Me iframe example</h2>
                  <ul>
                        <li>Click "Open Ready Player Me" button.</li>
                        <li>Create an avatar.</li>
                        <li>Click on "Done" button when you finish customizing your avatar.</li>
                        <li>This page will receive the url when it is created.</li>
                        <li>Url will be displayed, and Ready Player Me window will be closed.</li>
                  </ul>
                  <p class="warning">
                        If you are a Ready Player Me partner, don't forget to replace 'demo' in
                        the iframe source url with your partner subdomain.
                  </p>
                  <input
                        type="button"
                        value="Open Ready Player Me"
                        onClick="displayIframe()"
                  />
                  <div id="avatarUrl"><b>Avatar URL: </b></div>
                  <div class="container">
                        <iframe
                              id="iframe"
                              class="content"
                              allow="camera *; microphone *"
                              src="https://demo.readyplayer.me/"
                              hidden="true"
                        ></iframe>
                  </div>
            </body>
      </>)
}
export default Avatar