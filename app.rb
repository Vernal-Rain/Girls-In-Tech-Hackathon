# myapp.rb
require 'dotenv/load'
require 'sinatra'
require 'sinatra/reloader' if development?
require 'faraday'

API_HOST            = 'https://maps.googleapis.com/maps/api/js?key=REACT_APP_GOOGLE_MAPS_API_KEY&callback=initMap'
SEARCH_PATH         = ''
DEFAULT_TERM        = 'breast cancer screening'
DEFAULT_LOCATION    = 'Austin, TX'

get '/' do
  url = "#{API_HOST}#{SEARCH_PATH}"

  resp = Faraday.get(url) do |req|
    req.params['term'] = params[:term] || DEFAULT_TERM
    req.params['location'] = params[:location] || DEFAULT_LOCATION
    req.headers['Content-Type'] = 'application/json'
    req.headers['Authorization'] = "Bearer #{ENV['REACT_APP_GOOGLE_MAPS_API_KEY']}"
  end

  resp.body
end
