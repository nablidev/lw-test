<?php

namespace App\Http\Controllers;

use App\Services\SharedStateService\SharedStateService;

class SecondController extends Controller
{
    public function index(SharedStateService $sharedStateService)
    {
        $books = $sharedStateService->getState('books');

        $sharedStateService->append('books', 'b1 from c2');
        $sharedStateService->append('books', 'b2 from c2');
        $sharedStateService->append('books', 'b3 from c2');

        $sharedStateService->clearAll();

        return view('books', compact('books'));
    }
}