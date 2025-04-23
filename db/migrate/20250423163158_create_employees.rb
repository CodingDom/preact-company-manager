class CreateEmployees < ActiveRecord::Migration[8.0]
  def change
    create_table :employees do |t|
      t.string :name
      t.references :employee_role, null: false, foreign_key: true
      t.date :start_date

      t.timestamps
    end
  end
end
