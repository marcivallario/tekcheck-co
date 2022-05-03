class CreateAccommodations < ActiveRecord::Migration[7.0]
  def change
    create_table :accommodations do |t|
      t.datetime :checkin
      t.datetime :checkout
      t.string :acc_type
      t.string :name
      t.string :address_1
      t.string :address_2
      t.string :city
      t.string :state
      t.string :zip
      t.string :confirmation
      t.string :phone
      t.text :notes
      t.integer :trip_id

      t.timestamps
    end
  end
end
