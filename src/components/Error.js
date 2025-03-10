import { useRouteError } from "react-router"

const Error = () => {
    const err = useRouteError();

    return (
        <div>
            <h1>OOPS!!!!!!111</h1>
            <h2>Something Went wrong</h2>
            <h3>
            {err.status}
            </h3>
        </div>
    )
}

export default Error