import Link from "next/link";
import NotFoundScene from "./components/NotFoundScene";

export default function NotFound() {
    return (
        <main className="not-found-page">
            <div className="not-found-container">

                <NotFoundScene />

                <div className="not-found-content">
                    <p className="not-found-label">
                        404 — PAGE NOT FOUND
                    </p>

                    <h2>This isn&apos;t my page.</h2>

                    <p className="not-found-description">
                        I haven&apos;t added the page you&apos;re looking for yet.
                        But you can head back to my portfolio and explore
                        what I&apos;ve built so far.
                    </p>

                    <Link
                        href="/"
                        className="not-found-button"
                    >
                        <span>←</span>
                        Back to Portfolio
                    </Link>

                    <p className="not-found-path">
                        <span>~/</span>portfolio/404
                    </p>
                </div>

            </div>
        </main>
    );
}