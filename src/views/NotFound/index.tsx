import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div>
            <h1>Error Page</h1>
            <Link to="/">Home</Link>
        </div>
    )
}