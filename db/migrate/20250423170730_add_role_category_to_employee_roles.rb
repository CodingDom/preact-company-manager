class AddRoleCategoryToEmployeeRoles < ActiveRecord::Migration[8.0]
  def change
    add_reference :employee_roles, :role_category, null: false, foreign_key: true
  end
end
