class CreateTrips < ActiveRecord::Migration[7.0]
  def change
    create_table :trips do |t|
      t.datetime :depart
      t.datetime :return
      t.boolean :itinerary_sent
      t.integer :project_id
      t.integer :passenger_id

      t.timestamps
    end
  end
end
