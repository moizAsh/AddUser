import React from 'react'
import {Link} from 'react-router-dom'
import {
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap' 
export const UserList = () => {
  return (
    <ListGroup>
        <ListGroupItem className="d-flex">User One
            <div className="ml-auto">
                <Link className="btn btn-warning" to="/edit/1">Edit</Link>
                <Button color="danger">Delete</Button>
            </div>           
        
        </ListGroupItem>
    </ListGroup>
  )
}
