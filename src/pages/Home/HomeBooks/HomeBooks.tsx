import Heading from "@/components/common/Heading";
import GridBooks from "../GridBooks/GridBooks";
import { useGetAllBooksQuery } from "@/redux/api/baseApi";
import SkeletonLoader from "@/components/SkeletonLoader/SkeletonLoader";
import type { IBook } from "@/types/types";

const HomeBooks = () => {
  const { data, isLoading } = useGetAllBooksQuery(undefined)

  if (isLoading) {
    return <SkeletonLoader></SkeletonLoader>
  }

  return (
    <div className="mt-16 p-2 md:p-4 lg:p-4">
      <Heading heading="Library Books" subHeading="Explore, Manage, and Borrow Your Favorite Titles"></Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
          !isLoading && data.data.map((book: IBook) => <GridBooks key={book._id} book={book}></GridBooks>)
        }
      </div>
    </div>
  );
};

export default HomeBooks;