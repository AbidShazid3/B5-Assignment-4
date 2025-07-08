import BorrowForm from "@/components/module/BorrowBookForm/BorrowForm";
import EditBookForm from "@/components/module/EditBookForm/EditBookForm";
import { Button } from "@/components/ui/button";
import { useDeleteBookMutation } from "@/redux/api/baseApi";
import type { IBook } from "@/types/types";
import { Link } from "react-router";
import Swal from "sweetalert2";


const GridBooks = ({ book }: { book: IBook }) => {

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
    
    return (
        <div className="w-full bg-white rounded-lg shadow-lg">

            <div className="flex items-center justify-between px-4 py-4 bg-gray-900/70 rounded-t-lg">
                <EditBookForm book={book}></EditBookForm>
                <Button onClick={() => handleDeleteBook(book._id)} size={"sm"} variant={"outline"} className="text-red-500 cursor-pointer">Delete</Button>
                <BorrowForm book={book}></BorrowForm>
            </div>

            <Link to={`/book/${book._id}`}>
                <div className="px-6 py-4">
                    <h2 className="text-[22px] font-semibold">{book?.title}</h2>

                    <p className="py-2 text-gray-800">{book?.description}</p>

                    <h1 className="text-lg font-semibold py-1">Author : {book?.author}</h1>
                    <h1 className="text-base font-semibold py-1">Genre : {book?.genre}</h1>

                    <p className="text-sm text-gray-600 py-1">ISBN: {book?.isbn}</p>

                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center text-gray-700">
                            <svg
                                aria-label="copies icon"
                                className="w-6 h-6 fill-current"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M14 11H10V13H14V11Z" />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"
                                />
                            </svg>
                            <h1 className="px-2 text-sm">Copies: {book?.copies}</h1>
                        </div>

                        <div className="flex items-center text-gray-700">
                            <svg
                                aria-label="availability icon"
                                className="w-6 h-6 fill-current"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {book.available ? (
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 14l-5-5 1.414-1.414L11 13.172l6.293-6.293L19 8l-8 8z"
                                    />
                                ) : (
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1-1v16h2V1h-2z"
                                    />
                                )}
                            </svg>
                            <h1 className="px-2 text-sm">
                                {book?.available ? "Available" : "Not Available"}
                            </h1>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default GridBooks;