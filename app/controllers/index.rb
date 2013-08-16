get '/' do
  erb :index
end

get '/letters/:letter' do
  @letter_data = send("#{params[:letter]}_help")
  haml :"letters/#{params[:letter]}"
end
