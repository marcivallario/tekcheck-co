# Rails.application.routes.draw do
#   namespace :api do
#     resources :accommodations
#     resources :transportations
#     resources :flights
#     resources :ffnumbers
#     resources :trips
#     resources :passengers
#     resources :projects
#     get '/auth', to: 'users#show'
#     post '/login', to: 'sessions#create'
#     delete '/logout', to: 'sessions#destroy'
#     post '/signup', to: 'users#create'
#   end
  
#   get '*path',
#       to: 'fallback#index',
#       constraints: ->(req) { !req.xhr? && req.format.html? }
# end

Rails.application.routes.draw do
  resources :accommodations
  resources :transportations
  resources :flights
  resources :ffnumbers
  resources :trips
  resources :passengers
  resources :projects
  get '/auth', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  post '/signup', to: 'users#create'
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end