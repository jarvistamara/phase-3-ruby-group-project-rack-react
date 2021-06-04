class CreateClassrooms < ActiveRecord::Migration[5.2]
  def change
    create_table :classrooms do |t|
      t.string :title
      t.string :teacher_name
      t.string :image

    end
  end
end
