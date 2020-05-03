<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Tweet extends Eloquent
{

    protected $collection = 'tweets';

    protected $fillable = [
        'id',
        'text',
        'sentiment',
        'entities',
        'retweet_count',
        'favorite_count'
    ];

    protected $attributes = [
        'sentiment' => NULL,
    ];

}
