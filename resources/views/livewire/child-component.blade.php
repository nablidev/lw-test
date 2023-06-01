<div class="border p-4 m-4">
    <h2>Child Component</h2>

    {{-- in the case of wiring attributes both accessing the attributes of arrays or eloquent model objects is the same with a . --}}

    <div>
        <label for="book-title">Book Title:</label>
        <input type="text" id="book-title" wire:model="book.title">
    </div>

    <div>
        <label for="book-author">Book Author:</label>
        <input type="text" id="book-author" wire:model="book.author">
    </div>

    <div>
        <label for="ebook-title">EBook Title:</label>
        <input type="text" id="ebook-title" wire:model="eBook.title">
    </div>

    <div>
        <label for="ebook-author">EBook Author:</label>
        <input type="text" id="ebook-author" wire:model="eBook.author">
    </div>

</div>
