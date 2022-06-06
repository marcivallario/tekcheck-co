class ChangeDataTypeForReturn < ActiveRecord::Migration[7.0]
  def change
    change_column :trips, :return, :date
  end
end
