export interface IBook {
    _id: string,
    title: string,
    author: string,
    genre: 'FICTION' | 'NON_FICTION' | 'SCIENCE' | 'HISTORY' | 'BIOGRAPHY' | 'FANTASY',
    isbn: string,
    description: string,
    copies: number,
    available: boolean
}

export interface IBookFormInput {
  title: string;
  author: string;
  genre: 'FICTION' | 'NON_FICTION' | 'SCIENCE' | 'HISTORY' | 'BIOGRAPHY' | 'FANTASY';
  isbn: string;
  description: string;
  copies: number;
  available?: boolean;
}


export interface IBorrow {
    _id: string,
    book: string,
    quantity: number,
    dueDate: Date
}

export interface IBorrowFormInput {
  quantity: number;
  dueDate: Date;
}

export interface IBorrowSummary{
    totalQuantity: number;
    book: IBook
}
