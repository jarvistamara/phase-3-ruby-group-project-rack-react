class CreateClassroomsTable < ActiveRecord::Migration[5.2]
    def change
      create_table :classrooms do |t|
        t.string :name
        t.integer :teacher_id
        t.integer :student_id
      end
    end
  end