import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.config";



export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // :::: CREATING NEW USER::::
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

    // SIGN IN WITH EMAIL AND PASSWORD ::::
    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    };

    // ::: LOG OUT BUTTON HANDLER :::
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // ::   AUTHENTICATION PROVIDERS   ::
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

   // ::: GOOGLE SIGN IN METHOD :::
   const googleLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // ::: GITHUB SIGN IN METHOD :::
  const githubLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  // :::: OBSERVE THE AUTH CHANGED :::
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

    const userInfo = {user, loading, createUser, signIn, logOut, googleLogIn, githubLogIn};
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node,
}






// :::: 2ND MISSTAKE TESTING::::

// import { createContext, useEffect, useState } from "react";
// import PropTypes from "prop-types";
// import auth from "../Firebase/firebase.config";

// import {
//   GithubAuthProvider,
//   GoogleAuthProvider,
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   signOut,
// } from "firebase/auth";

// export const AuthContext = createContext(null);
// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // :::: CREATING NEW USER::::
//   const createUser = (email, password) => {
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   // ::: SIGN IN WITH EMAIL AND PASSWORD :::
//   const signIn = (email, password) => {
//     setLoading(true);
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   // ::: LOG OUT BUTTON HANDLER :::
//   const logOut = () => {
//     setLoading(true);
//     return signOut(auth);
//   };

//   // ::   AUTHENTICATION PROVIDERS   ::
//   const googleProvider = new GoogleAuthProvider();
//   const githubProvider = new GithubAuthProvider();

//   // ::: GOOGLE SIGN IN METHOD :::
//   const googleLogIn = () => {
//     setLoading(true);
//     return signInWithPopup(auth, googleProvider);
//   };
//   // ::: GITHUB SIGN IN METHOD :::
//   const githubLogIn = () => {
//     setLoading(true);
//     return signInWithPopup(auth, githubProvider);
//   };

//   // :::: OBSERVE THE AUTH CHANGED :::
//   useEffect(() => {
//     const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false);
//     });
//     return () => {
//       unSubscribe();
//     };
//   }, []);

//   const authInfo = {
//     user,
//     createUser,
//     signIn,
//     logOut,
//     loading,
//     googleLogIn,
//     githubLogIn,
//   };
//   return (
//     <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
//   );
// };

// export default AuthProvider;

// AuthProvider.propTypes = {
//   children: PropTypes.node,
// };




// :::: 3RD MISSTAKE TESTING ::::





// export const AuthContext = createContext(null);
// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const googleProvider = new GoogleAuthProvider();

//   const googleLogIn = () => {
//     setLoading(true)
//     return signInWithPopup(auth, googleProvider);
//   };
//   const createUser = (email, password) => {
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   const signIn = (email, password) => {
//     setLoading(true);
//     return signInWithEmailAndPassword(auth, email, password);
//   };
//   const logOut = () => {
//     return signOut(auth);
//   };
//   useEffect(() => {
//     const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
//       console.log("State changed.", currentUser);
//       setUser(currentUser);
//       setLoading(false);
//     });
//     return () => {
//       unSubscribe();
//     };
//   }, []);

//   const userInfo = {
//     user,
//     loading,
//     googleLogIn,
//     createUser,
//     signIn,
//     logOut
//   };

//   return (
//     <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
//   );
// };
// export default AuthProvider;