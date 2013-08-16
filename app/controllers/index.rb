get '/' do
  erb :home
end

get '/about' do
  haml :about
end
