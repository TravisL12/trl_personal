get '/' do
  @tweets = Twitter.user_timeline('travisl12', :count => 10)
  erb :index
end
