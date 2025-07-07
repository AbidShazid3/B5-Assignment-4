import AddBookForm from "@/components/module/AddBookForm/AddBookForm";
import BorrowForm from "@/components/module/BorrowBookForm/BorrowForm";
import EditBookForm from "@/components/module/EditBookForm/EditBookForm";
import SkeletonLoader from "@/components/SkeletonLoader/SkeletonLoader";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils";
import { useDeleteBookMutation, useGetAllBooksQuery } from "@/redux/api/baseApi";
import type { IBook } from "@/types/types";
import Swal from 'sweetalert2'

const AllBook = () => {
    const { data, isLoading } = useGetAllBooksQuery(undefined, {
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true,
        refetchOnReconnect: true,
    });
    const [deleteBook] = useDeleteBookMutation();

    const handleDeleteBook = async (id: string) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        });

        if (result.isConfirmed) {
            try {
                await deleteBook(id).unwrap();
                Swal.fire({
                    title: "Deleted!",
                    text: "The book has been deleted.",
                    icon: "success",
                });
            } catch (error) {
                console.log(error);
                Swal.fire({
                    title: "Error!",
                    text: "Something went wrong while deleting the book.",
                    icon: "error",
                });
            }
        }
    };

    if (isLoading) {
        return <SkeletonLoader></SkeletonLoader>
    }

    return (
        <div className="mt-24 p-2 min-h-[calc(100vh-276px)]">
            <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl font-bold">Total Books: {data?.data?.length}</h2>
                <AddBookForm></AddBookForm>
            </div>
            <Table className="border-2">
                <TableCaption></TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="pl-5">Title</TableHead>
                        <TableHead>Author</TableHead>
                        <TableHead>Genre</TableHead>
                        <TableHead>ISBN</TableHead>
                        <TableHead>Copies</TableHead>
                        <TableHead>Availability</TableHead>
                        <TableHead className="text-right pr-24">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {!isLoading && data.data.map((book: IBook, idx: number) => (
                        <TableRow key={book._id}>
                            <TableCell className="font-medium">{idx + 1}. {book?.title}</TableCell>
                            <TableCell>{book?.author}</TableCell>
                            <TableCell>{book?.genre}</TableCell>
                            <TableCell>{book?.isbn}</TableCell>
                            <TableCell>{book?.copies}</TableCell>
                            <TableCell className={cn(
                                book.available ? "text-green-600 font-medium" : "text-red-600 font-medium"
                            )}>{book.available ? "Available" : "Not Available"}</TableCell>
                            <TableCell>
                                <div className="flex items-center justify-end gap-3">
                                    <EditBookForm book={book}></EditBookForm>
                                    <Button onClick={() => handleDeleteBook(book._id)} size={"sm"} variant={"outline"} className="text-red-500 cursor-pointer">Delete</Button>
                                    <BorrowForm book={book} />
                                </div>

                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default AllBook;