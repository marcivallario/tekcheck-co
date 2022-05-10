class RemoveCountryFromPassengers < ActiveRecord::Migration[7.0]
  def change
    remove_column :passengers, :country_of_residence, :string
  end
end
