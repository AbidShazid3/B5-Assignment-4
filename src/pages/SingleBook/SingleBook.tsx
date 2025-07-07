import SkeletonLoader from "@/components/SkeletonLoader/SkeletonLoader";
import { useGetSingleBookQuery } from "@/redux/api/baseApi";
import { useParams } from "react-router";


const SingleBook = () => {
    const { id } = useParams()
    const { data, isLoading, error } = useGetSingleBookQuery(id)
    console.log({ data, isLoading, error });

    if (isLoading) return <SkeletonLoader></SkeletonLoader>;
    if (error && !data) {
        return (<div className="flex items-center justify-center space-x-4 min-h-[calc(100vh-180px)]">
            <p className="text-red-500 text-3xl font-bold">Book not found...</p>
        </div>);
    }

    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-180px)] p-4 border rounded-lg shadow-md bg-white">
            <div>
                <h1 className="text-2xl font-bold mb-2">{data?.data?.title}</h1>
                <p className="text-gray-700 mb-2">{data?.data?.description}</p>
                <p className="font-medium">Author: {data?.data?.author}</p>
                <p>Genre: {data?.data?.genre}</p>
                <p>ISBN: {data?.data?.isbn}</p>
                <p>Copies: {data?.data?.copies}</p>
                <p>
                    Availability:{" "}
                    <span className={data?.data?.available ? "text-green-600" : "text-red-600"}>
                        {data?.data?.available ? "Available" : "Not Available"}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default SingleBook;