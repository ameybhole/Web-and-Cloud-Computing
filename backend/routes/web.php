<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Auth::routes();

Route::get('', 'HomeController@index')->name('home');

Route::get('/test/tweet', 'TweetController@index');

Route::get('logs', '\Rap2hpoutre\LaravelLogViewer\LogViewerController@index');
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/api/tweets', 'ApiController@tweets')->name('api.tweets');
Route::get('/api/sentiment', 'ApiController@sentiment')->name('api.sentiment');


Route::get('/removequeue', 'TweetController@removeQueue');



Route::get('test', function() {
    broadcast(new \App\Events\TwitterDataEvent());
});

Route::get('jsondata', function() {

    return response()->json([
        'data_type'=>'twitter_list',
        'message'=>[
            'tweet1'=>[
                'id'=>1,
                'text'=>'llaalala'
            ],
            'tweet2'=>[
                'id'=>2,
                'text'=>'asdasd'
            ],
            'tweet3'=>[
                'id'=>3,
                'text'=>'ghghgh'
            ],
            'tweet4'=>[
                'id'=>4,
                'text'=>'opopop'
            ]
        ]
    ]);
});