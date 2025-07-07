import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useCreateBookMutation } from "@/redux/api/baseApi";
import type { IBookFormInput } from "@/types/types";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";


const AddBookForm = () => {
    const [open, setOpen] = useState(false)
    const form = useForm<IBookFormInput>();
    const [createBook] = useCreateBookMutation();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<IBookFormInput> = async (data) => {
        try {
            const bookData = {
                ...data,
                available: true
            }
            await createBook(bookData).unwrap();
            toast.success('Book created Successfully')
            setOpen(false);
            form.reset();
            navigate('/books')
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong")
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <form>
                <DialogTrigger asChild>
                    <Button size={'lg'} variant={"default"} className="text-green-400">Add A New Book</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit A Book</DialogTitle>
                        <DialogDescription>
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-3">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)}>
                                <div className="grid gap-2">
                                    <FormField
                                        control={form.control}
                                        name="title"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Title</FormLabel>
                                                <FormControl>
                                                    <Input {...field} value={field.value || ""} />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="author"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Author</FormLabel>
                                                <FormControl>
                                                    <Input {...field} value={field.value || ""} />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="genre"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Genre</FormLabel>
                                                <Select onValueChange={field.onChange}>
                                                    <FormControl>
                                                        <SelectTrigger className="w-full">
                                                            <SelectValue placeholder="Select a genre" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="FICTION">FICTION</SelectItem>
                                                        <SelectItem value="NON_FICTION">NON_FICTION</SelectItem>
                                                        <SelectItem value="SCIENCE">SCIENCE</SelectItem>
                                                        <SelectItem value="HISTORY">HISTORY</SelectItem>
                                                        <SelectItem value="BIOGRAPHY">BIOGRAPHY</SelectItem>
                                                        <SelectItem value="FANTASY">FANTASY</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="isbn"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>ISBN Number</FormLabel>
                                                <FormControl>
                                                    <Input {...field} value={field.value || ""} />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="description"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Description</FormLabel>
                                                <FormControl>
                                                    <Textarea {...field} value={field.value || ""} />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="copies"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Copies</FormLabel>
                                                <FormControl>
                                                    <Input type="number" min={1} {...field} value={field.value || ''}
                                                        onChange={(e) => {
                                                            const value = Number(e.target.value);
                                                            field.onChange(value);
                                                        }}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <DialogFooter className="mt-5">
                                    <DialogClose asChild>
                                        <Button variant="outline" className="cursor-pointer">Cancel</Button>
                                    </DialogClose>
                                    <Button type="submit" className="cursor-pointer">Add A Book</Button>
                                </DialogFooter>
                            </form>
                        </Form>
                    </div>
                </DialogContent>
            </form>
        </Dialog>
    );
};

export default AddBookForm;