import ErrorMessage from "../errorMessage/ErrorMessage";
import {Link} from "react-router-dom";

const Page404 = () => {
    return (
        <div>
            <ErrorMessage/>
            <p style={{textAlign: "center", marginBottom: "20px", marginTop: "20px"}}>
                Page doesn't exist
            </p>
            <Link style={{textAlign: "center", display: "block", textDecoration: "underline"}} to="/">Back to main page</Link>
        </div>
    )
}

export default Page404;