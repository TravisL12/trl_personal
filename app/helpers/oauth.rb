def oauth_consumer
  raise RuntimeError, "You must set TWITTER_KEY and TWITTER_SECRET in your server environment." unless ENV['TWITTER_KEY'] and ENV['TWITTER_SECRET']
  @consumer ||= OAuth::Consumer.new(
    ENV['consumer_key'],
    ENV['consumer_secret'],
    ENV['oauth_token'],
    ENV['oauth_token_secret'],
    :site => "https://api.twitter.com"
    )
end
