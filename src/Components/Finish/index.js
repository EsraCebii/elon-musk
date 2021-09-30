import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import "./style.css"

function Finish({open, handleClose, handleOpen}) {
 

  return (
      <div className="modal">
    <Modal
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
    >
      <Modal.Header>Elon Musk</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src='https://thumbor.forbes.com/thumbor/190x190/smart/filters:format(jpeg)/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F416x416.jpg%3Fbackground%3D000000%26cropX1%3D1699%26cropX2%3D3845%26cropY1%3D559%26cropY2%3D2704' wrapped />
        <Modal.Description>
          <Header>You ran out of money !!!</Header>
          <p>
            Don't consume, produce useful things to humanity.
          </p>
          <p>Isn't it fun to consume ?</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          content="Restart"
          labelPosition='right'
          icon='dollar sign'
          onClick={handleClose}
          positive
        />
      </Modal.Actions>
    </Modal>
    </div>
  )
}

export default Finish;