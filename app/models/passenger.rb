class Passenger < ApplicationRecord
    belongs_to :user
    has_many :ffnumbers 
    has_many :trips

    validates :legal_first_name, :legal_last_name, :position, :department, :cell, :email, :dob, :seat_assignment_pref, presence: true 
end
