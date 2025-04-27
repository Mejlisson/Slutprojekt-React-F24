import SectionBlock from "../layout/SectionBlock";
import SeeMoreButton from "../buttons/SeeMoreButton";

export default function ForumActivity() {
    return (
        <SectionBlock className="mt-4">
            <SeeMoreButton />
            <h2 className="text-xl  ml-2 font-bold mb-2">Forum Activitys</h2>
            <div className="h-32 bg-white flex items-center justify-center rounded">content here</div>
        </SectionBlock>
    );
}