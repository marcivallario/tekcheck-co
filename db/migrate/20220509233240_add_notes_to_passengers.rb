class AddNotesToPassengers < ActiveRecord::Migration[7.0]
  def change
    add_column :passengers, :notes, :text
  end
end
