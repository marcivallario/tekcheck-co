class Trip < ApplicationRecord
    belongs_to :passenger
    belongs_to :project
    has_many :flights
    has_many :transportations
    has_many :accommodations

    validates :project_id, :passenger_id, :depart, :return, presence: true 
end
