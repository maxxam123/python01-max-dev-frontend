import "./cluster.css"
import Feed from "../../components/feed/Feed"
import { Link } from 'react-router-dom';

export default function Cluster() {
  return (
    <div>
    <div className="cluster">
      <Link className="clusterlink" to='/home'>Go to Homepage</Link>
      Create Cluster
      <Feed/>
      </div>
    </div>
  )
}
