import { asyncActionError, asyncActionFinish, asyncActionStart } from '@/redux/asyncReducer';
import { dataFromSnapshot } from '@/firestore/firestoreService';
import { onSnapshot } from 'firebase/firestore';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export default function useFirestoreCollection({query, data, deps}:any) {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(asyncActionStart());
      const unsubscribe = onSnapshot(query(),
          (snapshot:any) => {
              const docs = snapshot.docs.map((doc:any) => dataFromSnapshot(doc));
              data(docs);
              dispatch(asyncActionFinish());
          },
          error => dispatch(asyncActionError(error))
      );
      return () => {
          unsubscribe()
      }
  }, deps) // eslint-disable-line react-hooks/exhaustive-deps
  
}
