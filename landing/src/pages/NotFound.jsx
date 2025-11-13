import { Helmet } from "react-helmet-async";

export default function NotFound() {
    return (
        <>
            <Helmet>
                <title>404 - Page Not Found | Medié</title>
                <meta name="description" content="Oops! The page you're looking for doesn't exist. Return to our homepage or browse our latest offerings." />
            </Helmet>
            
            <p className="mt-32 text-center text-7xl text-shadow">
                Oops! <span className="font-gelasio font-bold italic underline text-purple-300">404</span>
                <br/> Not found
            </p>
        </>

    );
}