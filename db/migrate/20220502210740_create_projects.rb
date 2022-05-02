class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.string :job_no
      t.string :job_name
      t.string :prod_co
      t.boolean :active
      t.integer :user_id

      t.timestamps
    end
  end
end
