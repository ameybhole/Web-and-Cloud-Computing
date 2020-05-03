<?php

namespace App\Repositories;

use App\Tweet;

/**
 * Created by PhpStorm.
 * User: Joey
 * Date: 17-10-2017
 * Time: 14:37
 */
class TweetRepository
{
    /**
     *
     */
    public function storeTrumpTweet()
    {

    }

    /**
     * @param $tweet
     * @return $this|\Illuminate\Database\Eloquent\Model
     */
    public function storeTweet($tweet)
    {
        $first = $this->exists($tweet->id);
        if (!$first)
            return $this->createTweet($tweet);
        else
            return $this->updateTweet($first, $tweet);
    }

    /**
     * @param $tweet
     * @return $this|\Illuminate\Database\Eloquent\Model
     */
    public function createTweet($tweet)
    {
        return Tweet::create((array) $tweet);
    }

    /**
     * @param $model
     * @param $data
     * @return mixed
     */
    public function updateTweet($model, $data)
    {
        $model = $model->fill((array) $data);
        $model->save();
        return $model;
    }


    /**
     * @param $tweetId
     * @return \Illuminate\Database\Eloquent\Model|null|static
     */
    public function exists($tweetId)
    {
        return Tweet::where('id', $tweetId)->first();
    }

    /**
     * @param string $screenName
     * @return mixed
     */
    public function getTimeline($screenName = 'realDonaldTrump')
    {
        return \Thujohn\Twitter\Facades\Twitter::getUserTimeline([
            'count' => 100,
            'screen_name' => $screenName,
        ]);
    }
}