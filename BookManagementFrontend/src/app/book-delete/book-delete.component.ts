import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {
  book: Book = {
    id: 0,
    title: '',
    author: '',
    genre: '',
    publicationYear: new Date().getFullYear()
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? +idParam : 0;
    this.bookService.getBook(id).subscribe(data => {
      this.book = data;
    });
  }

  deleteBook(): void {
    this.bookService.deleteBook(this.book.id).subscribe(() => {
      alert('Book deleted successfully');
      this.router.navigate(['/book-list']);
    });
  }
}
