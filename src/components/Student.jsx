import React from 'react';
import {
  Card, Button, CardTitle, CardText, CardImg,
} from 'reactstrap';

const Student = ({ alumnus }) => (
  <Card body className="mainCard text-center">
    <CardTitle>{alumnus.name}</CardTitle>
    <CardImg src={alumnus.photo} />
    <CardText>{alumnus.age}</CardText>
  </Card>
);

export default Student;
