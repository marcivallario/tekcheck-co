class AccommodationSerializer < ActiveModel::Serializer
  attributes :id, :checkin, :checkout, :acc_type, :name, :address_1, :address_2, :city, :state, :zip, :confirmation, :phone, :notes, :trip_id

  belongs_to :trip
end
