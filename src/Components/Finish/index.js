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
        <Image size='medium' src='https://i4.hurimg.com/i/hurriyet/75/750x0/5f64a4d218c77321f04ed7b1.jpg' wrapped />
        <Modal.Description>
          <Header>You ran out of my  money !!!</Header>
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