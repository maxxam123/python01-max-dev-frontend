import { useRef } from "react"
import "./delete.css"
import axios from "axios"
import { AuthContext } from "../../context/AuthContext"
import { useContext } from "react"

export default function Delete() {
  const {user} = useContext(AuthContext)

  const submitHandler = async (e) => {
    e.preventDefault()
    const userId = e.target.userId.value;

    const newPost = {
      userId: userId
    }
      await axios.post("/api/dels", newPost)
//      await axios.delete(http://localhost:8800/api/del)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
         console.log(error);
      })
  }

  return (
    <div className="share">
      <form className="shareBottom02" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="cluster name" 
          className="shareInput"
          id="userId"
          required
          name="userId"
        />
        <button className="shareButton02" type="submit">Delete</button>  
      </form>  
    </div>
  )
}
