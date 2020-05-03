<?php

namespace App\Jobs;

use App\Repositories\SentimentRepository;
use App\Repositories\TweetRepository;
use App\Tweet;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\Log;
use Thujohn\Twitter\Twitter;

class fetchTweetSentiment implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * @var Tweet
     */
    private $tweet;

    /**
     * Create a new job instance.
     *
     * @param Tweet $tweet
     * @internal param TweetRepository $repository
     */
    public function __construct(Tweet $tweet)
    {
        $this->tweet = $tweet;
    }

    /**
     * Execute the job.
     *
     * @param SentimentRepository $repository
     * @return void
     */
    public function handle(SentimentRepository $repository)
    {
        Log::info('Started sentiment Job');
        $sentiment = round($repository->getSentiment($this->tweet->text), 2);
        Log::info('Sentiment fetched: ' . $sentiment);
        $repository->saveSentiment($this->tweet, $sentiment);
    }
}
