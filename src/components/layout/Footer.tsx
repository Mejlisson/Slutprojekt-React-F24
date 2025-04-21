export default function Footer() {
    return (
        <footer className="bg-gray-200 text-black py-2 px-2 z-50 relative">
            <div className="w-auto h-18 mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-sm">

                {/* API */}
                <div className="text-center md:text-left gap-3">
                    <p className="font-bold ">© {new Date().getFullYear()} Comic Vine Student App</p>
                    <a
                        href="https://comicvine.gamespot.com/api/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img src="/API-icon.png" alt="API" className="h-17 w-20 hover:bg-yellow-400 transition rounded-2xl p-3" />
                    </a>
                </div>

                {/* Git och LinkIn */}
                <div className="flex gap-4 items-center">
                    <a
                        href="https://github.com/Mejlisson"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:bg-yellow-400 transition rounded-full p-1">
                        <img src="/git-icon.png" alt="GitHub" className="h-15 w-30" />
                    </a>

                    <a
                        href="https://linkedin.com/in/mejlisson/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:bg-yellow-400 transition rounded-full p-1">
                        <img src="/linkIn-icon.png" alt="LinkedIn" className="h-13 w-15" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
