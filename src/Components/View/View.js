import React, { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../../store/Context';
import { PostContext } from '../../store/PostContext';

import './View.css';
function View() {
  const [userDetiles, setUserDetiles] = useState();
  const { postDetiles } = useContext(PostContext);
  const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    const { userId } = postDetiles;
    firebase
      .firestore()
      .collection('users')
      .where('id', '==', userId)
      .get()
      .then((res) => {
        res.forEach((doc) => {
          setUserDetiles(doc.data());
        });
        console.log(userDetiles);
      });
  }, []);
  return (
    <div className='viewParentDiv'>
      <div className='imageShowDiv'>
        <img src={postDetiles.url} alt='' />
      </div>
      <div className='rightSection'>
        <div className='productDetails'>
          <p>&#x20B9;{postDetiles.price} </p>
          <span>{postDetiles.name}</span>
          <p>{postDetiles.category}</p>
          <span>{postDetiles.createAt}</span>
        </div>
        {userDetiles && (
          <div className='contactDetails'>
            <p>Seller details</p>
            <p>{userDetiles.username}</p>
            <p>{userDetiles.phone}</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default View;
