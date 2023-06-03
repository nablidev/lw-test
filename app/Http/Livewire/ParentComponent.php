<?php

namespace App\Http\Livewire;

use App\Models\Book;
use App\Models\EBook;
use Livewire\Component;

class ParentComponent extends Component
{

    public $aBook;
    public EBook $eBook;
    public Book $book;

    //NOTE: !!!!! all private state will not persist because it is private: so after listener fires it will be lost !!!!!
    // you have to make it public so it persists even you are using it internally only


    //rules is MANDATORY!!! for the eloquent model property to work properly
    // !!!! otherwise you on refresh the model data will DISAPPEAR and YOU WILL NOT !!! get an ERROR !!!!
    protected $rules = [
        'eBook.title' => 'string',
        'eBook.author' => 'string',
    ];


    protected $listeners = ['aBookUpdated','eBookUpdated','bookUpdated'];

    public function aBookUpdated($aBookData)
    {
        $this->aBook = $aBookData;
    }

    public function eBookUpdated($eBookData)
    {
        $this->eBook = new EBook($eBookData);
    }

    public function bookUpdated($book)
    {
        $this->book = new Book($book['title'], $book['author']);
    }


    public function getBookTitleLetterCountProperty()
    {
        return strlen($this->book->title);
    }


    public function getEBookTitleLetterCountProperty()
    {
        return strlen($this->eBook->title);
    }

    public function getABookTitleLetterCountProperty()
    {
        return strlen($this->aBook['title']);
    }

    public function mount()
    {
        $this->aBook = ['title' => 'initial aBook title from parent', 'author' => 'initial aBook author from parent'];

        $this->eBook = EBook::inRandomOrder()->first();

        $this->book = new Book('initial book title from parent', 'initial book author from parent');
    }

    public function render()
    {
        return view('livewire.parent-component');
    }
}
