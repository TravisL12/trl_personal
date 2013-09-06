get '/' do
  erb :index, :layout => !is_pjax?
end

get '/letters/:letter' do
  p params
  @letter_data = send("#{params[:letter]}_help")
  haml :"letters/#{params[:letter]}", :layout => !is_pjax?
end
