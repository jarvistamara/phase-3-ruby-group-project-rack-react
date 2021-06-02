class CreateStudentsTable < ActiveRecord::Migration[5.2]
    def change
      create_table :students do |t|
        t.string :first_name
        t.string :last_name
        t.string :age
        t.integer :classroom_id
        t.integer :teacher_id
      end
    end
  end