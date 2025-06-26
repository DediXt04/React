import "./Home.css";

//COMPONENTS
import LikeContainer from '../../components/LikeContainer'
import PhotoItem from '../../components/PhotoItem'
import { Link } from "react-router-dom";

//HOOKS
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useResetComponentMessage } from '../../hooks/useResetCompenentMessage'

//REDUX
import { getPhotos, like } from "../../slices/photoSlice";

const Home = () => {

  const dispatch = useDispatch()

  const resetMessage = useResetComponentMessage()

  const {user} = useSelector((state) => state.auth)
  const {photos, loading} = useSelector((state) => state.photo)

  //load all photos
  useEffect(() => {
    dispatch(getPhotos())
  }, [dispatch])

  //Like a photo
  const handleLike = (photo)=> {
    dispatch(like(photo._id))

    resetMessage()
  }

  if(loading){
    return <p>Carregando...</p>
  }

  return (
    <div>Home</div>
  )
}

export default Home