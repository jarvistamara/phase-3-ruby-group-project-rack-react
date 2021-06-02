class CreateClassrooms < ActiveRecord::Migration[5.2]
  def change
    create_table :classrooms do |t|
      t.string :title
      t.string :teacher_name
      t.integer :student_id
    end
  end
end
