class CreateEmployeeRoles < ActiveRecord::Migration[8.0]
  def change
    create_table :employee_roles do |t|
      t.string :name

      t.timestamps
    end
  end
end
