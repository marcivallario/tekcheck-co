Rails.application.routes.draw do
  get '/auth', to: 'users#show'
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
