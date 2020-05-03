<?php

namespace App\Repositories;

use App\Tweet;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Log;
use Mockery\Exception;

/**
 * Created by PhpStorm.
 * User: Joey
 * Date: 17-10-2017
 * Time: 14:37
 */
class SentimentRepository
{

    /**
     * @var Client
     */
    private $client;

    /**
     * SentimentRepository constructor.
     */
    public function __construct()
    {
        $this->client = new Client();
    }

    /**
     * @param $text
     * @return int|string
     * @throws \Exception
     */
    public function getSentiment($text)
    {
        try {
            Log::info("Text to analyze: " . $text);
            $command = escapeshellcmd('python3 /var/www/app/Python/app.py "' . $text . '"');
            $output = shell_exec($command);
            Log::info("Output Analayze: " . $output);
            return str_replace(PHP_EOL, '', $output);
        } catch (\Exception $e) {
            Log::warning("Text analysis failed with text" . $text);
            return 0;
        }
    }

    /**
     * @param Tweet $tweet
     * @param $sentiment
     */
    public function saveSentiment(Tweet $tweet, $sentiment)
    {
        $tweet->sentiment = $sentiment;

        $tweet->save();
    }

}