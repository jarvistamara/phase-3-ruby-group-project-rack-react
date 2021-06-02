class CreateTeachersTable < ActiveRecord::Migration[5.2]
  def change
    create_table :teachers do |t|
      t.string :first_name
      t.string :last_name
      t.integer :classroom_id
      t.integer :student_id
    end
  end
end
