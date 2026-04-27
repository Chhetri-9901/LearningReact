import React from 'react'
import { useParams } from 'react-router-dom'

const ContactDetails = () => {
  const params = useParams();
  console.log(params);
  return (
    <div><h1>{params.id} CoursesDetails</h1></div>
  )
}

export default ContactDetails