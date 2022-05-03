class CreateFfnumbers < ActiveRecord::Migration[7.0]
  def change
    create_table :ffnumbers do |t|
      t.string :airline
      t.string :number
      t.integer :passenger_id

      t.timestamps
    end
  end
end
