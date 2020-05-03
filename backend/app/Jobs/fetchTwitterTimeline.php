<?php

namespace App\Jobs;

use App\Events\SentimentalAnalysisEvent;
use App\Events\TwitterDataEvent;
use App\Repositories\TweetRepository;
use App\Tweet;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\Log;
use Thujohn\Twitter\Twitter;

class fetchTwitterTimeline implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     */
    public function __construct()
    {
    }

    /**
     * Execute the job.
     * @param TweetRepository $repository
     * @return void
     * @internal param TweetRepository $repository
     */
    public function handle(TweetRepository $repository)
    {
        Log::info('Twitter  timeline fetching...');
        foreach ($repository->getTimeline() as $tweet) {
            $model = $repository->storeTweet($tweet);

            if ($model->wasRecentlyCreated)
                fetchTweetSentiment::dispatch($model)->onQueue('sentiment');
        }
        broadcast(new TwitterDataEvent());
        broadcast(new SentimentalAnalysisEvent());

        Log::info('Twitter timeline fetched');
    }
}
