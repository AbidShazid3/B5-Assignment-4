import SkeletonLoader from "@/components/SkeletonLoader/SkeletonLoader";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useGetBorrowSummaryQuery } from "@/redux/api/baseApi";
import type { IBorrowSummary } from "@/types/types";

const BorrowSummary = () => {
    const { data, isLoading } = useGetBorrowSummaryQuery(undefined, {
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true,
        refetchOnReconnect: true,
    });

    if (isLoading) {
        return <SkeletonLoader></SkeletonLoader>
    }

    return (
        <div className="mt-24 p-2 min-h-[calc(100vh-276px)]">
            <Table className="border">
                <TableCaption></TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="pl-5">Book Title</TableHead>
                        <TableHead>ISBN</TableHead>
                        <TableHead className="text-right">Total Quantity Borrowed</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {!isLoading && data.data.map((borrow: IBorrowSummary, idx: number) => (
                        <TableRow key={idx}>
                            <TableCell className="font-medium">{idx+1}. {borrow?.book?.title}</TableCell>
                            <TableCell>{borrow?.book?.isbn}</TableCell>
                            <TableCell className="text-right pr-5">{borrow?.totalQuantity}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default BorrowSummary;