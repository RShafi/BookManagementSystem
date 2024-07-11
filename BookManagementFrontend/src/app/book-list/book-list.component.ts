import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    });
  }

  deleteBook(id: number): void {
    const confirmed = confirm('Are you sure you want to delete this book?');
    if (confirmed) {
      this.bookService.deleteBook(id).subscribe(() => {
        this.books = this.books.filter(book => book.id !== id);
        alert('Book deleted successfully');
      });
    }
  }
}
