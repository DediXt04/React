import React from 'react'
import styles from "./Dashboard.module.css"

import {Link} from 'react-router-dom'

//HOOKS
import {useAuthValue} from '../../context/AuthContext'
import {useFetchDocument} from '../../hooks/useFetchDocuments'

const Dashboard = () => {
  const {user} =useAuthValue()
  const uid = user.uid



  return (
    <div>
        <h2>Dashboard</h2>
        <p>Gerencie os seus posts</p>
    </div>
  )
}

export default Dashboard