import { Skeleton } from "../ui/skeleton";


const SkeletonLoader = () => {
    return (
        <div className="flex items-center justify-center space-x-4 min-h-[calc(100vh-180px)]">
            <Skeleton className="h-20 w-20 rounded-full bg-gray-200" />
            <div className="space-y-2">
                <Skeleton className="h-10 w-[250px] bg-gray-100" />
                <Skeleton className="h-10 w-[200px] bg-gray-100" />
            </div>
        </div>
    );
};

export default SkeletonLoader;