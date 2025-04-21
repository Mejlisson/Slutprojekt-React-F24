import SectionBlock from "../layout/SectionBlock";
import SeeMoreButton from "./SeeMoreButton";

export default function RandomFacts() {
    return (
        <SectionBlock className="mt-4">
            <SeeMoreButton />
            <h2 className="text-xl  ml-2 font-bold mb-2">Random Facts</h2>
            <div className="h-32 bg-white flex items-center justify-center rounded">content here</div>
        </SectionBlock>
    );
}
