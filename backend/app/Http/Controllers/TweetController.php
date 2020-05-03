<?php

namespace App\Http\Controllers;

use App\Jobs\fetchTwitterTimeline;
use App\Jobs\testJob;
use App\Repositories\TweetRepository;
use Illuminate\Queue\Queue;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redis;

class TweetController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        fetchTwitterTimeline::dispatch();
//        return view('home');
    }

    public function removeQueue()
    {
        Redis::connection()->del('queues:default');
        Redis::connection()->del('queues:sentiment');
    }
}
