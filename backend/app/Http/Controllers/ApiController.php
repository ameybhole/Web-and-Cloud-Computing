<?php

namespace App\Http\Controllers;

use App\Jobs\testJob;
use App\Repositories\TweetRepository;
use App\Tweet;
use Illuminate\Http\Request;

/**
 * Class ApiController
 * @package App\Http\Controllers
 */
class ApiController extends Controller
{

    /**
     * @return mixed
     */
    public function tweets()
    {
        return response()->json([
            'data_type' => 'twitter_list',
            'message' => Tweet::orderBy('id', 'DESC')->take(100)->get()
        ]);
    }

    /**
     * @return mixed
     */
    public function sentiment()
    {
        return response()->json([
            'data_type' => 'sentimental_analysis',
            'message' => Tweet::orderBy('id', 'DESC')->take(100)->get(['sentiment', 'id', 'retweet_count', 'favorite_count'])
        ]);
    }


}