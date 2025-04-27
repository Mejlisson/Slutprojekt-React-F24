import SectionBlock from "../buttons/SectionBlock";
import SeeMoreButton from "./SeeMoreButton";

export default function UpcomingEvents() {
    return (
        <SectionBlock className="mt-4">
            <SeeMoreButton />
            <h2 className="text-xl font-bold  ml-2 mb-1">Upcoming Events</h2>
            <div className="h-32 bg-white flex items-center justify-center rounded">content here</div>
        </SectionBlock>
    );
}