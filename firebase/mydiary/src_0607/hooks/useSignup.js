import { useState } from "react"
import { appAuth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

// 회원가입을 진행하는 훅
export const useSignup = () => {
  // 에러 정보를 저장합니다.
  const [error, setError] = useState(null);
  // 현재 서버와의 통신 상태를 저장합니다.
  const [isPending, setPending] = useState(false);

  const { dispatch } = useAuthContext();

  // signup 훅을 만듭니다. email, password, displayName 세가지 매개변수
  const signup = (email, password, displayName) => {
    setError(null);// 아직 에러가 없으니 null
    setPending(true);// 통신중이므로 true

    //appAuth : https://firebase.google.com/docs/auth/web/password-auth?hl=ko&authuser=1
    // 회원가입이 처리되는 함수
    // 비밀번호 설정으로 유저 정보를 등록합니다. import 받아야함
    createUserWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        if (!user) {
          throw new Error('회원 가입에 실패했습니다!');
        }

        // 회원의 별명정보를 업데이트합니다.
        updateProfile(appAuth.currentUser, { displayName })
          .then(() => {
            setError(null);
            setPending(false);
            dispatch({ type: 'login', payload: user });
          }).catch((err) => {
            setError(err.message);
            setPending(false);
            console.log(err.message);
          });
      })
      .catch((err) => {
        setError(err.message);
        setPending(false);
        console.log(err.message);
      });
  }
  return { error, isPending, signup }
}