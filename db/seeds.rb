# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

# Seed Role Categories
categories = [ "Management", "Operational", "Lead Division" ].map do |category|
  RoleCategory.find_or_create_by!(name: category)
end

# Seed Roles
roles = [
  { name: "Manager", category: categories[0] },
  { name: "Human Resources Representative", category: categories[0] },
  { name: "Software Engineer", category: categories[1] },
  { name: "Software Engineer", category: categories[1] },
  { name: "Coordinator", category: categories[2] }
]


roles.each do |role_data|
  EmployeeRole.create!(
    name: role_data[:name],
    role_category: role_data[:category]
  )
end

# Seed Employees
50.times do
  Employee.create!(
    name: Faker::Name.name,
    employee_role: EmployeeRole.order("RANDOM()").first,
    start_date: Faker::Date.between(from: 2.years.ago, to: Date.today)
  )
end
