import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {
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

  updateBook(): void {
    this.bookService.updateBook(this.book.id, this.book).subscribe(() => {
      alert('Book updated successfully');
      this.router.navigate(['/book-list']);
    });
  }
}
