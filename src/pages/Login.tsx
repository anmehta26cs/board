import { auth, provider } from '../firebase-config'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Login = ({ setIsAuth } : {setIsAuth : React.Dispatch<React.SetStateAction<boolean>>}) => {

    const navigate = useNavigate()

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", "true")
            setIsAuth(true)
            navigate('/')
            console.log(result)
        }).catch((error) => {
            console.log(error)
        })
    }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-12">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <p className="text-gray-700 text-lg mb-6">Sign in with Google to continue.</p>
                <button
                    onClick={signInWithGoogle}
                    className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-opacity-50 transition duration-200"
                >
                    Sign in with Google
                </button>
            </div>
        </div>
  )
}

export default Login