class EmployeeRole < ApplicationRecord
  belongs_to :role_category
  has_many :employees
end
