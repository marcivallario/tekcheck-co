class Project < ApplicationRecord
    belongs_to :user
    has_many :trips
    has_many :flights, through: :trips

    validates :job_no, :job_name, :prod_co, presence: true 
end
