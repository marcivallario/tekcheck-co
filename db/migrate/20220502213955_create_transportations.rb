class CreateTransportations < ActiveRecord::Migration[7.0]
  def change
    create_table :transportations do |t|
      t.string :direction
      t.datetime :date
      t.string :trans_mode
      t.string :confirmation
      t.text :notes
      t.integer :trip_id

      t.timestamps
    end
  end
end
