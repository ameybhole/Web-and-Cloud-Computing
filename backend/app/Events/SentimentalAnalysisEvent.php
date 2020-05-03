<?php

namespace App\Events;

use App\Tweet;
use Illuminate\Broadcasting\Channel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class SentimentalAnalysisEvent implements ShouldBroadcastNow
{
    use InteractsWithSockets, SerializesModels;

    private $dataMessage;

    /**
     * Create a new event instance.
     */
    public function __construct()
    {
        $this->dataMessage = Tweet::orderBy('id', 'DESC')->take(25)->get(['sentiment'])->toArray();
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new Channel('twitter');
    }

    /**
     * Get the data to broadcast.
     *
     * @return array
     */
    public function broadcastWith()
    {
        return ['data_type' => 'sentimental_analysis', 'message' => $this->dataMessage];
    }
}
