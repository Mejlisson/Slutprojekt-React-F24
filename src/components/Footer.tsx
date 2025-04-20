export default function Footer() {
    return (
        <footer className="bg-black text-white mt-10 py-6 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">

                {/* Vänster info */}
                <div className="text-center md:text-left">
                    <p className="font-bold">© {new Date().getFullYear()} Comic Vine Student App</p>
                    <a
                        href="https://comicvine.gamespot.com/api/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-yellow-400 transition"
                    >
                        <img src="/API-icon.png" alt="API" className="h-9 w-9" />
                    </a>
                </div>

                {/* Höger länkar med ikoner */}
                <div className="flex gap-6 items-center">


                    <a
                        href="https://github.com/dittGitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-yellow-400 transition"
                    >
                        <img src="/git-icon.png" alt="GitHub" className="h-10 w-23" />
                    </a>

                    <a
                        href="https://linkedin.com/in/dittLinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-yellow-400 transition"
                    >
                        <img src="/linkIn-icon.png" alt="LinkedIn" className="h-10 w-10" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
