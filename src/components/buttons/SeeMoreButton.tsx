import { useNavigate } from "react-router-dom";
import { ResourceType } from "../../types/contextTypes";

interface SeeMoreButtonProps {
    id: number;
    resource: ResourceType;
}

export default function SeeMoreButton({ id, resource }: SeeMoreButtonProps) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/details/${id}?resource=${resource}`);
    };

    return (
        <button
            onClick={handleClick}
            className="text-xs h-[30px] w-[90px] text-black bg-pink-500 border-3 border-black shadow-[4px_4px_0px_black] p-1 text-center transition duration-300 ease-in-out hover:scale-110 hover:-translate-y-1"
        >See more...
        </button>
    );
}
