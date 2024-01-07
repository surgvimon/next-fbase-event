import { asyncActionError, asyncActionFinish, asyncActionStart } from '@/redux/asyncReducer';
import { dataFromSnapshot } from '@/firestore/firestoreService';
import { onSnapshot } from 'firebase/firestore';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export default function useFirestoreDoc({query, data, deps, shouldExecute = true}:any) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!shouldExecute) return;
    dispatch(asyncActionStart());
    const unsubscribe = onSnapshot(query(),
        (snapshot:any) => {
            if (!snapshot.exists) {
                dispatch(asyncActionError({code: 'not-found', message: 'Could not find document'}));
                return;
            }
            data(dataFromSnapshot(snapshot));
            dispatch(asyncActionFinish());
        },
        error => dispatch(asyncActionError(error))
    );
    return () => {
          unsubscribe()
    }
  }, deps) // eslint-disable-line react-hooks/exhaustive-deps
  
}
