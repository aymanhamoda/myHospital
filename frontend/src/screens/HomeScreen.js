import axios from 'axios'
import React, { useState } from 'react'
import Loader from '../components/Loader'
import { Form } from 'react-bootstrap'
import UploadList from './UploadList'
import Promotion from '../components/Promotion'

const HomeScreen = () => {



  return (
    <> 

    <h1>Welcome to Clinical Pharmacy Platform</h1>
    <p><storng>We hope that you wil be the best</storng></p>
    <Promotion />
    
    <UploadList />
            
    </>
  )
}

export default HomeScreen
