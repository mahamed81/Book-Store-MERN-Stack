import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Spinner from '../../components/Spinner'
import {Link} from 'react-router-dom'


export default function Home() {
  const[books, SetBooks] = useState([])
  const [loading, setLoading]= useState(false);
   // const[title]= books.data
    console.log(books)

  //  useEffect(()=>{
  //   axios.get('http://localhost:5555/books')
  //   .then((res)=>{
  //     console.log(res)
  //     SetBooks(res.data.data)
  //   })
  //  },[])
  return (
    <div>
     what do you like to do?
    </div>
  )
}
