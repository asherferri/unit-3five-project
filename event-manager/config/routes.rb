Rails.application.routes.draw do
  # root 'site#index'
  #redirects localhost:3000 to /events
  root to: redirect('/events')

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  get 'events', to: 'site#index'
  get 'events/new', to: 'site#index'
  get 'events/:id', to: 'site#index'
  get 'events/:id/edit', to: 'site#index'

  namespace :api do
    resources :events, only: %i[index show create destroy update]
  end
end
