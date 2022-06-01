class ChangeDataTypeForDepart < ActiveRecord::Migration[7.0]
  def change
    change_column :trips, :depart, :date
  end
end
