class DashboardController < ApplicationController
  def index
    @dashboard_data = DashboardPresenter.new.data
    render 'dashboard/index'
  end
end
