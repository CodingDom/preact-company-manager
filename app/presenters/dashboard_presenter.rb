# app/presenters/dashboard_presenter.rb

class DashboardPresenter
  def data
    {
      employees: {
        categories: RoleCategory.includes(:employee_roles).map do |category|
          {
            name: category.name,
            count: category.employee_roles.map { |role| role.employees.count }.sum
          }
        end
      }
    }
  end
end
