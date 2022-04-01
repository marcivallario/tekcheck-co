class UsersController < ApplicationController
    def show
        current_user = auth
        if current_user
            render json: current_user, status: :ok
        else 
            render json: {error: "User not authorized: please sign in."}, status: :unauthorized
        end
    end
end
