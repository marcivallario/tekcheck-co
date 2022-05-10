class PassengerSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :legal_first_name, :legal_last_name, :nickname, :position, :department, :cell, :email, :dob, :state_of_residence, :passport, :license, :tsa_precheck, :global_entry, :seat_assignment_pref, :notes
  
  has_many :trips
end
