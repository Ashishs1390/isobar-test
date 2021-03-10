import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter ,
    Form, FormGroup, Label, Input, FormText 

} from 'reactstrap';

const CommonModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;


  const [modal, setModal] = useState(false);
  const[msgBool,setmsgBool] = useState(false);
  const toggle = () => setModal(!modal);


  const showLoginMsg = () =>{
    setmsgBool(true);

    setTimeout(()=>{
        toggle();
    },100)
  
  }
  useEffect(()=>{
      return(()=>{
    setTimeout(()=>{
        setmsgBool(false)
    },300)
      })
  })
 
    return(
        <div className="ModalWrapper" data-testid = "modal">
        <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>Modal title</ModalHeader>
            <ModalBody>
                {!msgBool ?
                <Form>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Please enter email id" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="Please enter password" />
                </FormGroup>
            </Form>  
            :
            <div className="loginMsg">
                <p>successful login</p>
            </div>
            }
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={showLoginMsg}>Enter</Button>
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
        </div>
    )
  
}

export default CommonModal;