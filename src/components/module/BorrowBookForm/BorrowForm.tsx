import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useBorrowBookMutation } from "@/redux/api/baseApi";
import { type IBook, type IBorrowFormInput } from "@/types/types";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";



const BorrowForm = ({ book }: { book: IBook }) => {
    const [open, setOpen] = useState(false)
    const [openDate, setOpenDate] = useState(false)
    const form = useForm<IBorrowFormInput>();
    const navigate = useNavigate();

    const [borrowBook] = useBorrowBookMutation()

    const onSubmit: SubmitHandler<IBorrowFormInput> = async (data) => {
        const borrowData = {
            book: book._id,
            quantity: Number(data.quantity),
            dueDate: data.dueDate
        }
        try {
            await borrowBook(borrowData).unwrap();
            toast.success("Book borrowed successfully!");
            setOpen(false);
            form.reset();
            navigate('/borrow-summary');
        } catch (error) {
            console.error(error);
            toast.error("Failed to borrow book");
        }

    }

    return (
        <div>
            <Dialog open={open} onOpenChange={setOpen}>
                <form>
                    <DialogTrigger asChild>
                        <Button size={"sm"} variant={"outline"}
                            disabled={book.copies === 0 && !book.available}
                            className="text-green-400 cursor-pointer">Borrow Book</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Borrow A Book</DialogTitle>
                            <DialogDescription>
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-3">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)}>
                                    <div className="grid gap-4">
                                        <FormField
                                            control={form.control}
                                            name="quantity"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Quantity</FormLabel>
                                                    <FormControl>
                                                        <Input type="number" min={1} {...field} value={field.value || ""} />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="dueDate"
                                            render={({ field }) => (
                                                <FormItem className="flex flex-col">
                                                    <FormLabel>Due Date</FormLabel>
                                                    <Popover open={openDate} onOpenChange={setOpenDate}>
                                                        <PopoverTrigger asChild>
                                                            <FormControl>
                                                                <Button
                                                                    variant={"outline"}
                                                                    className={cn(
                                                                        "pl-3 text-left font-normal",
                                                                        !field.value && "text-muted-foreground"
                                                                    )}
                                                                >
                                                                    {field.value ? (
                                                                        format(field.value, "PPP")
                                                                    ) : (
                                                                        <span>Pick a Date</span>
                                                                    )}
                                                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                                </Button>
                                                            </FormControl>
                                                        </PopoverTrigger>
                                                        <PopoverContent className="w-auto p-0" align="start">
                                                            <Calendar
                                                                mode="single"
                                                                selected={field.value}
                                                                onSelect={(data) => {
                                                                    field.onChange(data);
                                                                    setOpenDate(false);
                                                                }}
                                                                captionLayout="dropdown"
                                                            />
                                                        </PopoverContent>
                                                    </Popover>
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <DialogFooter className="mt-5">
                                        <DialogClose asChild>
                                            <Button variant="outline" className="cursor-pointer">Cancel</Button>
                                        </DialogClose>
                                        <Button type="submit" className="cursor-pointer">Borrow Book</Button>
                                    </DialogFooter>
                                </form>
                            </Form>
                        </div>
                    </DialogContent>
                </form>
            </Dialog>
        </div>
    );
};

export default BorrowForm;