import { useRef } from "react"
import "./create.css"
import axios from "axios"
import { AuthContext } from "../../context/AuthContext"
import { useContext } from "react"

export default function Create() {
  const {user} = useContext(AuthContext)

  const submitHandler = async (e) => {
    e.preventDefault()
    const address = user._id;
    const desc = e.target.desc.value;
    const name = e.target.name.value;
    const owner = e.target.owner.value;
//    const together = owner-name
    var test = owner
    var test01 = name
    var test02 = `${test}-${test01}`

    const newPost = {
      userId: address,
      desc: desc,
      name: test02,
      owner: owner
    }

      await axios.post("/api/news", newPost)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
         console.log(error);
      })
  }

  return (
    <div className="share">
      <form className="shareBottom" onSubmit={submitHandler}>
        <input
        type="text"
        placeholder="your id" 
        className="shareInput"
        id="address"
        required
        name="address"
        />
        <input
        type="text"
        placeholder="amount nodes" 
        className="shareInput"
        id="desc"
        required
        name="desc"
        />
        <input
        type="text"
        placeholder="cluster name" 
        className="shareInput"
        id="name"
        required
        name="name"
        />
        <input
        type="text"
        placeholder="username" 
        className="shareInput"
        id="owner"
        required
        name="owner"
        />
        <button className="shareButton" type="submit">Create</button>  
      </form>
    </div>
  )
}
