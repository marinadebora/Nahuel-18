import { collection, getDocs, addDoc } from "firebase/firestore"
import { db } from "../firebase/config";
import { error_slice, get_guests, get_music, post_collection } from "./slice";

export const getGuests = ()=>{
  return async(dispatch)=>{
    try {
      
       const guestsRef = collection(db,"guests")
           let data = await getDocs(guestsRef)
             .then(res=>{
              return res.docs.map(e=>({...e.data(),id:e.id}))
             
             })
             dispatch(get_guests({data}))
    } catch (error) {
      dispatch(error_slice(error))
    }
  }
};


export const getMusic = ()=>{
  return async(dispatch)=>{
    try {
      
       const musicsRef = collection(db,"music")
           let data = await getDocs(musicsRef)
             .then(res=>{
              return res.docs.map(e=>({...e.data(),id:e.id}))
             
             })
             dispatch(get_music({data}))
    } catch (error) {
      dispatch(error_slice(error))
    }
  }
};

export const postCollection = (payload) =>
{
  return async (dispatch) =>
  {
    try {
      await addDoc(collection(db, payload.collection), payload.values);
      dispatch(post_collection({ data: "Se envió exitosamente" }))
    } catch (error) {
      dispatch(error_slice(error))
    }
  }
}