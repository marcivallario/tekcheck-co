class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :job_no, :job_name, :prod_co, :active, :user_id

  has_many :trips
end
