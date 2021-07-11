import { Link } from "react-router-dom";
const Error=()=> {
    return (
        <>
        <section className="error">
            <h1>Error 404 Page not found</h1>
            <Link className="link" to="/">Homepage</Link>
        </section>
        </>
    );
}

export default Error;