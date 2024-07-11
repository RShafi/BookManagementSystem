import { Component } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent {
  book: Book = {
    id: 0,
    title: '',
    author: '',
    genre: '',
    publicationYear: new Date().getFullYear()
  };

  constructor(private bookService: BookService) { }

  addBook(): void {
    this.bookService.addBook(this.book).subscribe(() => {
      alert('Book added successfully');
      this.book = {
        id: 0,
        title: '',
        author: '',
        genre: '',
        publicationYear: new Date().getFullYear()
      };
    });
  }
}
