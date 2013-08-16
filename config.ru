# Require config/environment.rb
require ::File.expand_path('../config/environment',  __FILE__)

set :app_file, __FILE__

configure do
  # See: http://www.sinatrarb.com/faq.html#sessions
  enable :sessions
  set :session_secret, ENV['SESSION_SECRET'] || 'this is a secret shhhhh'

  # Set the views to
  view1 = File.join(Sinatra::Application.root, "app", "views")
  view2 = File.join(Sinatra::Application.root, "app", "letters")

  set :views, [view1, view2]

  helpers do
    def find_template(views, name, engine, &block)
      Array(views).each { |v| super(v, name, engine, &block) }
    end
  end

end

run Sinatra::Application
