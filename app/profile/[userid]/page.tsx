"use client";
import MainLayout from '@/components/layouts/MainLayout';
import LoadingComponent from '@/components/LoadingComponent'
import ProfileContent from '@/components/profiles/ProfileContent'
import ProfileHeader from '@/components/profiles/ProfileHeader'
import { getUserProfile } from '@/firestore/firestoreService'
import useFirestoreDoc from '@/hooks/useFirestoreDoc'
import { listenToSelectedUserProfile } from '@/redux/profileReducer'
import { useParams } from 'next/navigation'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const SingleProfile = () => {
    const param = useParams();
    const dispatch = useDispatch();
    const { selectedUserProfile } = useSelector((state:any) => state.profile);
    const { currentUser } = useSelector((state:any) => state.auth);
    const {  loading, error } = useSelector((state:any) => state.async);
    let profile;
  
    useFirestoreDoc({
      query: () => getUserProfile(param.userid),
      data: (profile:any) => dispatch(listenToSelectedUserProfile(profile)),
      deps: [dispatch, param.userid]
    });
  
    // if((loading && !selectedUserProfile) || (!selectedUserProfile && !error)) return <LoadingComponent/>
  
  return (
    <MainLayout>
      <ProfileHeader profile ={selectedUserProfile} isCurrentUser={currentUser?.uid === selectedUserProfile?.id}/>
      <ProfileContent profile ={selectedUserProfile} isCurrentUser={currentUser?.uid === selectedUserProfile?.id}/>
    </MainLayout>
  )
}

export default SingleProfile
